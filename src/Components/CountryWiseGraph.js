import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CountryWiseGraph = ({countrylabel,countryvalue}) => {
  const chartData = {
    categories:(countrylabel!==undefined&&countrylabel!=""&&countrylabel.length!=0)?countrylabel:[],
    series: [
      {
        name: 'Vehicles :',
        data:(countryvalue!==undefined&&countryvalue!=""&&countryvalue.length!=0)?countryvalue:[],
      },
     
    ],
  };

  const chartOptions = {
    chart: {
      type: 'line',
      height: 400,
    },
    xaxis: {
      categories: chartData.categories,
    },
    series: chartData.series,
    colors: ['#FF5733', '#007BFF'], 
  };

  return (
    <>
      <div className="inner-herbpage-service-title-sub  ">
              
              <h1>Country Wise Data</h1>
            </div>
            <ReactApexChart options={chartOptions} series={chartData.series} type="line" height={200} /></>
  
  );
};

export default CountryWiseGraph;
