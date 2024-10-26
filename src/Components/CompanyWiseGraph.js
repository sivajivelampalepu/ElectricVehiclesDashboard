import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CompanyWiseGraph = ({companylabel,companyvalue}) => {
  const chartData = {
    categories:(companylabel!=undefined&&companylabel!=""&&companylabel.length!=0)?companylabel:[],
    series: [
      {
        name: 'Series 1',
        data:(companyvalue!=undefined&&companyvalue!=""&&companyvalue.length!=0)?companyvalue:[],
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
    xaxis: {
      categories: chartData.categories,
    },
    series: chartData.series,
  };

  return (
    <>
    <div className="inner-herbpage-service-title-sub  ">
              
              <h1>Company Wise DATA</h1>
            </div>
    <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={200} />
    
    </>
  );
};

export default CompanyWiseGraph;
