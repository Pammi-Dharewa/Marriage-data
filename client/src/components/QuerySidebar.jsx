import { message, Table, Input, Select, Button } from "antd";
import React, { useState } from "react";
import { axiosInstance } from "../api";

const { Option } = Select;

const queries = [
  { key: "1", name: "allpre", label: "Get All Gifted Data", params: [] },
  { key: "2", name: "getallrec", label: "Get All Received Data", params: [] },
  { key: "3", name: "getallcity", label: "Get All Cities", params: [] },
  {
    key: "4",
    name: "getrelbycity",
    label: "Get Relations by City",
    params: [
      { name: "CITY", type: "input" },
      { name: "TYPE", type: "select", options: ["PRESENTATION", "RECEIVING"] },
    ],
  },
  {
    key: "5",
    name: "totalgold",
    label: "Total Gold by Type",
    params: [{ name: "TYPE", type: "select", options: ["PRESENTATION", "RECEIVING"] }],
  },
  {
    key: "6",
    name: "totalgifts",
    label: "Total Gifts by Type",
    params: [{ name: "TYPE", type: "select", options: ["PRESENTATION", "RECEIVING"] }],
  },
  {
    key: "7",
    name: "totalrec",
    label: "Total Receiving",
    params: [
      { name: "TOTAL_TYPE", type: "select", options: ["GOLD_IN_GM", "SILVER_IN_GM", "AMOUNT_IN_INR"] },
      { name: "TYPE", type: "select", options: ["PRESENTATION", "RECEIVING"] },
    ],
  },
];

const QuerySidebar  = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [queryParams, setQueryParams] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleParamChange = (queryKey, paramName, value) => {
    setQueryParams((prev) => ({
      ...prev,
      [queryKey]: {
        ...prev[queryKey],
        [paramName]: value,
      },
    }));
  };

  const fetchData = async () => {
    if (!selectedQuery) return;
    setLoading(true);
    try {
      const paramsForQuery = queryParams[selectedQuery.key] || {};
      const queryString = Object.entries(paramsForQuery)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      
      const url = `/${selectedQuery.name}${queryString ? `?${queryString}` : ""}`;
      const response = await axiosInstance.get(url);
      if (response.data) {
        console.log(response.data)
        setData(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        message.error("Failed to fetch data");
      }
    } catch (error) {
      message.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const renderParameterInputs = () => {
    if (!selectedQuery || selectedQuery.params.length === 0) return null;
    return selectedQuery.params.map((param) => (
      <div key={`${selectedQuery.key}-${param.name}`} className="mb-4">
        <label className="block text-gray-700">{param.name}</label>
        {param.type === "select" ? (
          <Select
            style={{ width: "100%" }}
            placeholder={`Select ${param.name}`}
            value={queryParams[selectedQuery.key]?.[param.name] || undefined}
            onChange={(value) => handleParamChange(selectedQuery.key, param.name, value)}
          >
            {param.options.map((option) => (
              <Option key={option} value={option}>{option}</Option>
            ))}
          </Select>
        ) : (
          <Input
            placeholder={`Enter ${param.name}`}
            value={queryParams[selectedQuery.key]?.[param.name] || ""}
            onChange={(e) => handleParamChange(selectedQuery.key, param.name, e.target.value)}
          />
        )}
      </div>
    ));
  };

  return (
    <div className="h-full w-full p-5">
      {/* Query Selection Dropdown */}
      <div className="mb-5">
        <h2 className="text-lg font-bold mb-2">Select a Query</h2>
        <Select
        className="w-full"
          placeholder="Choose a query"
          onChange={(value) => {
            const query = queries.find((q) => q.key === value);
            setSelectedQuery(query);
            setData([]);
            setQueryParams((prev) => ({
              ...prev,
              [query.key]: {},
            }));
          }}
          
        >
          {queries.map((query) => (
            <Option key={query.key} value={query.key}>{query.label}</Option>
          ))}
        </Select>
      </div> 

      {/* Query Details & Results */}
      {selectedQuery && (
        <div className="p-4 border border-gray-300 rounded-md shadow-md h-auto overflow-auto">
          <h3 className="text-xl font-bold mb-4">Selected Query: {selectedQuery.label}</h3>
          {renderParameterInputs()}
          <Button type="primary" onClick={fetchData} loading={loading} className="mt-3">Fetch Data</Button>
          {data.length > 0 ? (
            <Table
              dataSource={data}
              columns={Object.keys(data[0]).map((key) => ({
                title: key,
                dataIndex: key,
                key,
              }))}
              className="mt-5"
            />
          ) : (
            <p className="text-gray-500 mt-4">No data available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuerySidebar ;
