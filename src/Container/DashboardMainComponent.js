import React, { useEffect, useState } from 'react';
import { formatArrays, getDistinctValues } from '../Components/CommonFunctions';
import * as Data from '../Components/test.electric.json';
import * as MAP from 'react-bootstrap'
import TotalCards from '../Components/TotalCards';
import YearWiseGraph from '../Components/YearWiseGraph';
import CountryWiseGraph from '../Components/CountryWiseGraph';
import ElectryType from '../Components/ElectryType';
import CountryWiseTable from '../Components/CountryWiseTable';
import Header from '../Components/Header';
import Loader from '../Components/Loader';


const DashboardMainComponent = () => {
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [totalValues,setTotalValues]=useState({
    battery:0,plugin:0,model:0,companies:0,cities:0,electric:0,country:0
  })
  const [yearlablelist,setYearlablelist]=useState([])
  const [yearvaluelist,setYearValuelist]=useState([])
  const [countrylabelist,setCountrylabellist]=useState([])
  const [countryvaluelist,setCountryvalelist]=useState([])
  const [electrictypelabel,setElectrictypelabel]=useState([])
  const [electrictypevalue,setElectrictypevalue]=useState([])
  const [companylabel,setCompanylabel]=useState([])
  const [companvalues,setCompanyvalues]=useState([])
  const [comapywisedata,setCompanywisedata]=useState([])
  const [modelwisedata,setModelwisedata]=useState([])
  const [citywisedata,setCitywisedata]=useState([])
  const [eletricutitlydata,setElectricutilitydata]=useState([])
  const [loading, setLoading] = useState(true);

  const countRecordsByCounty = (data, countyList,type) => {
    const countyCountMap = [];
    countyList.forEach(county => {
        countyCountMap[county] = 0;
    });
    data.forEach(record => {
        if (countyList.includes(record[type])) {
            countyCountMap[record[type]]++;
        }
    });
    const countValues = Object.values(countyCountMap);
    return countValues;
};
  useEffect(() => {
    const loadData = async () => {
      const dataset = Data.default;
      let CountyList=[]
      let CityList=[]
      let YearWiseList=[]
      let ElectricTypeWiseList=[]
      let CompanyWiseList=[]
      let ModelWiseList=[]
      let ElectricUtiliyWiseList=[]
      
     CountyList=getDistinctValues(dataset,"County","country")
     CityList= getDistinctValues(dataset,"City","city")
     YearWiseList=getDistinctValues(dataset,"Model Year","model")
     ElectricTypeWiseList= getDistinctValues(dataset,"Electric Vehicle Type","electric type")
     CompanyWiseList= getDistinctValues(dataset,"Make","make")
     ModelWiseList=getDistinctValues(dataset,"Model","model")
     ElectricUtiliyWiseList= getDistinctValues(dataset,"Electric Utility","electric")
     setYearlablelist(YearWiseList.sort((a,b)=>a-b))
     setCountrylabellist(CountyList)
     setElectrictypelabel(ElectricTypeWiseList)
     setCompanylabel(CompanyWiseList)
    const CountValueList = countRecordsByCounty(dataset, CountyList,"County");
    const CityValueList = countRecordsByCounty(dataset, CityList,"City");
    const CompanyValueList = countRecordsByCounty(dataset, CompanyWiseList,"Make");
    const ElectrictypeValueList = countRecordsByCounty(dataset, ElectricTypeWiseList,"Electric Vehicle Type");
    const YearValue = countRecordsByCounty(dataset, YearWiseList,"Model Year");
    const ModelValueList = countRecordsByCounty(dataset, ModelWiseList,"Model");
    const ElectricutitliyValue = countRecordsByCounty(dataset, ElectricUtiliyWiseList,"Electric Utility");
    
    setYearValuelist(YearValue)
    setCountryvalelist(CountValueList)
    setElectrictypevalue(ElectrictypeValueList)
    setCompanyvalues(CompanyValueList)
    setTotalValues({
      ...totalValues,
      battery:ElectrictypeValueList[0],
      plugin:ElectrictypeValueList[1],
      model:ModelWiseList.length,
      companies:CompanyWiseList.length,
      cities:CityList.length,
      electric:ElectricUtiliyWiseList.length,
      country:CountyList.length

    })
      setCompanywisedata(formatArrays(CompanyWiseList,CompanyValueList))
      setModelwisedata(formatArrays(ModelWiseList,ModelValueList))
      setCitywisedata(formatArrays(CityList,CityValueList))
      setElectricutilitydata(formatArrays(ElectricUtiliyWiseList,ElectricutitliyValue))
      const totalVehiclesCount = dataset.length;
      setTotalVehicles(totalVehiclesCount);
      setLoading(false);
    };

    loadData();
  }, []);




  if (loading) {
    return <Loader/>; 
  }


  return (
    <>

<Header/>
      <MAP.Container  fluid className="bg-white mb-5 mt-5 pt-5">
    
    <MAP.Row className='dashboard mb-2 mt-2'>
    <MAP.Card>
          <MAP.Card.Body>
            <TotalCards total={totalValues} vehicle={totalVehicles}/>
          </MAP.Card.Body>
        </MAP.Card>
    </MAP.Row>
    <MAP.Row className='dashboard mb-2 mt-2'>
    
        <MAP.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} >
        <MAP.Card>
        <MAP.Card.Body>
        <YearWiseGraph yearlabel={yearlablelist} yearvalue={yearvaluelist}/>
        </MAP.Card.Body>
        </MAP.Card>
        </MAP.Col>
        <MAP.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
        <MAP.Card>
        <MAP.Card.Body>
        <ElectryType electriclabel={electrictypelabel} electricvalue={electrictypevalue}/>
         </MAP.Card.Body>
      </MAP.Card>
          </MAP.Col>
       
    </MAP.Row>
    <MAP.Row className='dashboard mt-2 mb-2'>
      <MAP.Card>
        <MAP.Card.Body>
          <CountryWiseGraph countrylabel={countrylabelist} countryvalue={countryvaluelist}/>
        </MAP.Card.Body>
      </MAP.Card>
    </MAP.Row>
  
    <MAP.Row className='dashboard mt-2 mb-2'>
    <MAP.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
      <MAP.Card>
        <MAP.Card.Body>
          <CountryWiseTable data={comapywisedata} type="Company"/>
        </MAP.Card.Body>
      </MAP.Card>
      </MAP.Col>
      <MAP.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
      <MAP.Card>
        <MAP.Card.Body>
          <CountryWiseTable data={modelwisedata} type="Model"/>
        </MAP.Card.Body>
      </MAP.Card>
      </MAP.Col>
     
    </MAP.Row> 
    <MAP.Row className='dashboard mt-2 mb-2'>
    <MAP.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
      <MAP.Card>
        <MAP.Card.Body>
          <CountryWiseTable data={citywisedata} type="City"/>
        </MAP.Card.Body>
      </MAP.Card>
      </MAP.Col>
      <MAP.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
      <MAP.Card>
        <MAP.Card.Body>
          <CountryWiseTable data={eletricutitlydata} type="Electric Utility"/>
        </MAP.Card.Body>
      </MAP.Card>
      </MAP.Col>
      </MAP.Row> 
    
        </MAP.Container>
    </>
  );
};

export default DashboardMainComponent;
