import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Barchart = ({ data, title, yAxisLabel }) => {
  if (!data || data.length === 0) {
    return <h3 className="text-center text-gray-500">Sorry, No Data to Show</h3>;
  }

  // Neon color palette
  const neonColors = [
    "#39FF14", // Neon Green
    "#FF10F0", // Neon Pink
    "#00FFFF", // Neon Cyan
    "#FFD700", // Neon Yellow
    "#FF007F", // Neon Magenta
    "#00FF7F", // Neon Spring Green
    "#FF00FF", // Neon Fuchsia
    "#00FF00", // Neon Lime
  ];

  return (
    <div style={{ height: 250 }}>
      <h3 className="text-center text-white text-xl font-bold ">{title}</h3>
      <ResponsiveBar
        data={data}
        keys={["total"]} // Y-axis values
        indexBy="fullName" // X-axis categories
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={({ index }) => neonColors[index % neonColors.length]} // Neon bar colors
        borderRadius={4}
        theme={{
          textColor: "#ffffff", // White text for labels
          axis: {
            domain: {
              line: {
                stroke: "#ffffff", // White axis lines
              },
            },
            ticks: {
              line: {
                stroke: "#ffffff", // White tick lines
              },
              text: {
                fill: "#ffffff", // White tick text
              },
            },
            legend: {
              text: {
                fill: "#ffffff", // White legend text
              },
            },
          },
          grid: {
            line: {
              stroke: "#555555", // Light gray grid lines
            },
          },
          tooltip: {
            container: {
              background: "#4FD1C5", // Light teal tooltip background
              color: "#ffffff", // White tooltip text
            },
          },
        }}
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
          legendOffset: -45,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#ffffff" // White bar labels
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