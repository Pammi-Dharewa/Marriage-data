import React, { useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { mockBarData } from '../../../Data/mockData';


const Barchart = ({data, title, yAxisLabel}) => {
 
  // console.log("from bar", data)


    
  return (
    <div style={{ height: 250 }}>
      <ResponsiveBar
        data={data}
        keys={["total"]}  // Y-axis values
        indexBy="fullName"  // X-axis categories
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo"}}
        borderRadius={1}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 34,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yAxisLabel,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Barchart;
