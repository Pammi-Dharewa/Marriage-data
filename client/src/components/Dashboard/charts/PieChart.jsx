import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { mockPieData } from '../../../Data/mockData';
import { axiosInstance } from '../../../api';

const PieChart = () => {

  const data = "";

  // const fetchData = async()=>{
  //   try{
  //     const res = await axiosInstance.get("/")
  //     if(res){
  //       data = res
  //       console.log("data fetched of pie chart")
  //     }else{
  //       console.log("failed to fetch")
  //     }
  //   }catch(err){
  //     console.log(err)
  //   }
  // }



  return (
    <div style={{ height: 500 }}>
      <ResponsivePie
        data={mockPieData}
        margin={{ top: 60, right: 80, bottom: 70, left: 80 }}
        innerRadius={0.5} // Adjust for a donut effect
        padAngle={0.7}
        cornerRadius={5}
        colors={{ scheme: "category10" }} // Color scheme
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#fff"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateY: 56,
            itemsSpacing: 2,
            itemWidth: 70,
            itemHeight: 19,
            itemTextColor: "#333",
            symbolSize: 15,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
