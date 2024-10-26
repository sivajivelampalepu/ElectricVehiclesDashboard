import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ElectryType = ({electriclabel,electricvalue}) => {
 
  const chartData = {
    series:(electricvalue!=undefined&&electricvalue!=""&&electricvalue.length!=0)?electricvalue:[],
    options: {
      labels:(electriclabel!=undefined&&electriclabel!=""&&electriclabel.length!=0)?electriclabel:[],
      colors: ['#FF5733', '#007BFF'], 
      legend: {
        show: true,
      },
    },
  };

  return (
    <>
     <div className="inner-herbpage-service-title-sub  ">
              
              <h1><b>Electric Type</b></h1>
            </div>
    <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={200} />
    </>
  );
};

export default ElectryType;
