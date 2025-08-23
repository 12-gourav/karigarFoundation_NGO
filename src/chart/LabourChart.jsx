import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LabourChart() {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent", 
      plotBackgroundColor: "transparent", 
    
    },
    title: {
      text: "",
      align: "center",
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: {
          enabled: false,
          format: "{point.name}: {point.y}%",
        },
      },
    },
    series: [
      {
        name: "Donation Allocation",
        data: [
          { name: "Healthy Food", y: 37, color: "#2E7D32" },
          { name: "Medicine", y: 20, color: "#388E3C" },
          { name: "Pure Water", y: 17, color: "#66BB6A" },
          { name: "Excursions & Welfare Activities", y: 13, color: "#8BC34A" },
          { name: "Feeding the Poor", y: 13, color: "#FFCA28" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
