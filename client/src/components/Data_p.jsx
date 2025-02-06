import React, { useEffect, useState } from "react";

const Data_p = () => {
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://4c11-117-217-220-193.ngrok-free.app/getall", {
          method: "GET",
          headers: {
            // 'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "true"
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const jsonData = await res.json();
          setData(jsonData);
          console.log("Data from API:", jsonData);
        } else {
          const text = await res.text();
          throw new Error(`Invalid JSON response: ${text}`);
        }
      } catch (err) {
        // setError(err.message);
        console.error("API error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center font-bold text-xl text-blue-900 mt-5">Your Data</h2>
      <div className="flex w-full items-center min-h-screen flex-grow justify-center p-4">
        {/* Responsive Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-100 w-full border border-gray-300 bg-white shadow-md cursor-auto ">
            <thead>
              <tr className="border text-lg text-black bg-slate-50">
                <th className="px-4 py-2 ">Customer ID</th>
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">City</th>
                <th className="px-4 py-2 ">Phone</th>
                <th className="px-4 py-2 ">Address</th>
                <th className="px-4 py-2 ">Gold</th>
                <th className="px-4 py-2 ">Silver</th>
                <th className="px-4 py-2 ">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => (
                 <tr key={index} className="text-slate-700 border hover:bg-gray-500">
                  <td className="px-4 py-2">{index}</td>
                  <td className="px-4 py-2">{`${ele.firstName} ${ele.lastName}`}</td>
                  <td className="px-4 py-2">{ele.city}</td>
                  <td className="px-4 py-2">{ele.phone}</td>
                  <td className="px-4 py-2">{ele.address}</td>
                  <td className="px-4 py-2">{ele.gold}</td>
                  <td className="px-4 py-2">{ele.silver}</td>
                  <td className="px-4 py-2">{ele.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Data_p;



// import React, { useEffect, useState } from "react";

// const Data_p = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const res = await fetch("https://4c11-117-217-220-193.ngrok-free.app/getall");
//         const result = await res.json();
//         setData(result);
//         console.log("Getting data from db", result);
//       } catch (err) {
//         console.log("Api error", err);
//       }
//     };
//     fetchdata();
//   }, []);

//   return (
//     <>
//       <h2 className="text-center font-bold text-xl text-blue-900 mt-5">Your Data</h2>
//       <div className="flex w-full items-center justify-center h-auto p-4">
//         {/* Responsive Table Container */}
//         <div className="w-full overflow-x-auto">
//           <table className="min-w-100 w-full border border-gray-300 bg-white shadow-md cursor-auto ">
//             <thead>
//               <tr className="border text-lg text-black bg-slate-50">
//                 <th className="px-4 py-2 ">Customer ID</th>
//                 <th className="px-4 py-2 ">Name</th>
//                 <th className="px-4 py-2 ">City</th>
//                 <th className="px-4 py-2 ">Phone</th>
//                 <th className="px-4 py-2 ">Address</th>
//                 <th className="px-4 py-2 ">Gold</th>
//                 <th className="px-4 py-2 ">Silver</th>
//                 <th className="px-4 py-2 ">Amount</th>
//               </tr>
//             </thead>
//             {/* <tbody>
//               {data.map((ele, index) => (
//                  <tr key={index} className="text-slate-700 border hover:bg-gray-500">
//                   <td className="px-4 py-2">{index}</td>
//                   <td className="px-4 py-2">{`${ele.firstName} ${ele.lastName}`}</td>
//                   <td className="px-4 py-2">{ele.city}</td>
//                   <td className="px-4 py-2">{ele.address}</td>
//                   <td className="px-4 py-2">{ele.gold}</td>
//                   <td className="px-4 py-2">{ele.silver}</td>
//                   <td className="px-4 py-2">{ele.amount}</td>
//                   <td className="px-4 py-2">{ele.phone}</td>
//                 </tr>
//               ))}
//             </tbody> */}
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Data_p;
