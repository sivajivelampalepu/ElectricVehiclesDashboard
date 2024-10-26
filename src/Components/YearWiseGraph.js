import React from 'react';
import ReactApexChart from 'react-apexcharts';

const YearWiseGraph = ({yearlabel,yearvalue}) => {

  const chartData = {
    categories:(yearlabel!==undefined&&yearlabel!==""&&yearlabel.length!==0)?yearlabel:[],
    series: [
      {
        name: 'Vehicles :',
        data:(yearvalue!==undefined&&yearvalue!==""&&yearvalue.length!==0)?yearvalue:[],
      },
   
    ],
  };


  const chartOptions = {
    chart: {
      type: 'bar',
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
      
    },
    dataLabels: {
        enabled: true,
        style: {
          colors: ['#000'], // Set the color of the values here (e.g., black)
        },
      },
    xaxis: {
      categories: chartData.categories,
    },
    series: chartData.series,
  };

  return (
    <>
    <div className="inner-herbpage-service-title-sub  ">
              
              <h1><b>YEAR WISE MANUFACTURING DATA</b></h1>
            </div>
    <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={200} />
    </>
  );
};

export default YearWiseGraph;
