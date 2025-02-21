import { message, Table, Input, Select, Button } from "antd";
import React, { useState } from "react";
import { axiosInstance } from "../api";

const { Option } = Select;

const queries = [
  {
    key: "1",
    name: "allpre",
    label: "Get All Gifted Data",
    params: [],
  },
  {
    key: "2",
    name: "getallrec",
    label: "Get All Received Data",
    params: [],
  },
  {
    key: "3",
    name: "getallcity",
    label: "Get All Cities",
    params: [],
  },
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

const QuerySidebar = () => {
  // Selected query is stored in state.
  const [selectedQuery, setSelectedQuery] = useState(null);
  // queryParams will be an object keyed by query.key.
  // For example, { "5": { TYPE: "PRESENTATION" } }
  const [queryParams, setQueryParams] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Update parameters for a specific query.
  const handleParamChange = (queryKey, paramName, value) => {
    setQueryParams((prev) => ({
      ...prev,
      [queryKey]: {
        ...prev[queryKey],
        [paramName]: value,
      },
    }));
    console.log(`Updated params for query ${queryKey}:`, {
      ...queryParams[queryKey],
      [paramName]: value,
    });
  };

  // Fetch data using only the parameters for the selected query.
  const fetchData = async () => {
    if (!selectedQuery) return;
    setLoading(true);
    try {
      // Retrieve only the parameters associated with the selected query.
      const paramsForQuery = queryParams[selectedQuery.key] || {};
      const queryString = Object.entries(paramsForQuery)
        .map(
          ([key, value]) => `${key}=${value}`
        )
        .join("&");

      const url = `/${selectedQuery.name}${queryString ? `?${queryString}` : ""}`;
      console.log("Fetching from URL:", url);
      const response = await axiosInstance.get(url);
      console.log("API response:", response.data);
      if (response.data) {
        const formattedData = Array.isArray(response.data) ? response.data : [response.data]
        setData(formattedData);
      } else {
        message.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      message.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Render inputs for the parameters of the selected query.
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
            onChange={(value) =>
              handleParamChange(selectedQuery.key, param.name, value)
            }
          >
            {param.options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        ) : (
          <Input
            placeholder={`Enter ${param.name}`}
            value={queryParams[selectedQuery.key]?.[param.name] || ""}
            onChange={(e) =>
              handleParamChange(selectedQuery.key, param.name, e.target.value)
            }
          />
        )}
      </div>
    ));
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-auto bg-gray-900 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold border-b border-gray-700 pb-2">
          Querying
        </h2>
        <ul>
          {queries.map((query) => (
            <li
              key={query.key}
              className={`cursor-pointer p-2 rounded-md hover:bg-gray-700 transition duration-200 ${
                selectedQuery?.key === query.key ? "bg-gray-700" : ""
              }`}
              onClick={() => {
                setSelectedQuery(query);
                setData([]);
                // Optionally reset parameters for the selected query:
                setQueryParams((prev) => ({
                  ...prev,
                  [query.key]: {}, // Reset only for this query
                }));
              }}
            >
              {query.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 w-full overflow-x-auto overflow-y-auto">
        {selectedQuery ? (
          <div className="p-4 max-w-1/2 border border-gray-300 rounded-md shadow-md">
            <h3 className="text-xl font-bold">
              Selected Query: {selectedQuery.label}
            </h3>
            {renderParameterInputs()}
            <Button type="primary" onClick={fetchData} loading={loading}>
              Fetch Data
            </Button>
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
        ) : (
          <p className="text-gray-500">Select a query from the sidebar</p>
        )}
      </main>
    </div>
  );
};

export default QuerySidebar;
