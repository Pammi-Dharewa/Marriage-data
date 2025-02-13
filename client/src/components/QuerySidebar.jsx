import { message, Table } from "antd";
import React, { useState, useEffect } from "react";

const queries = [
  "GetAllRelatives",
  "GetAllPresentations",
  "GetAllReceivings",
  "GetAllCitys",
  "GetAllGoldReceivings",
  "GetAllGoldPresentations",
  "GetAllSilverReceivings",
  "GetAllSilverPresentations",
  "GetAllAmountReceivings",
  "GetAllAmountPresentations",
  "GetAllGiftsReceivings",
  "GetAllGiftPresentations",
  "GetRelativesBasedOnCity",
  "GetTotalGoldPresentations",
  "GetTotalGoldReceiving",
  "GetTotalAmountReceiving",
  "GetTotalAmountPresentation",
  "GetTotalSilverPresentation",
  "GetTotalSilverReceiving",
  "GetTotalNumberOfGiftsPresentated",
  "GetTotalNumberOfGiftsReceivings",
];

const QuerySidebar = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!selectedQuery) return;
    const fetchData = async () => {
      try{
        const response = await fetch(`/api/query/${selectedQuery}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(response.ok){
          const res = await response.json();
          console.log(res);
          setData(res);
        }
        
    
      }catch(error){
        message.error("Error fetching data");
      }
    }
     
    fetchData();
  }, [selectedQuery]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-auto bg-gray-900 text-white p-4 space-y-2 overflow-y-auto">
        <h2 className="text-lg font-bold border-b border-gray-700 pb-2">Querying</h2>
        <ul>
          {queries.map((query, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md hover:bg-gray-700 transition duration-200 ${
                selectedQuery === query ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedQuery(query)}
            >
              {query}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {selectedQuery ? (
          <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Selected Query:</h3>
            <p className="text-gray-700 mt-2">{selectedQuery}</p>
         
            <Table
              dataSource={data}
              columns={data.length > 0 ? Object.keys(data[0]).map((key) => ({ title: key, dataIndex: key, key })) : []}
              pagination={false}
            >  
            </Table>

          </div>

        ) : (
          <p className="text-gray-500">Select a query from the sidebar</p>
        )}
      </main>
    </div>
  );
};

export default QuerySidebar;
