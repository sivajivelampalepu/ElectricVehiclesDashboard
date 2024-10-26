import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CompanyPieChart = ({companylabel,companyvalue}) => {
  const chartData = {
    series:(companyvalue!=undefined&&companyvalue!=""&&companyvalue.length!=0)?companyvalue:[],
    options: {
      labels:(companylabel!=undefined&&companylabel!=""&&companylabel.length!=0)?companylabel:[],
      legend: {
        show: true,
      },
    },
  };

  return (
    <>
     <div className="inner-herbpage-service-title-sub  ">
              
              <h1>Company Wise Data</h1>
            </div>
    <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={200} />
    </>
  );
};

export default CompanyPieChart;
