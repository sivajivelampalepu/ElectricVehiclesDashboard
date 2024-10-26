import React from 'react';
import * as MAP from 'react-bootstrap'
import { formatNumber } from './CommonFunctions';
import { FcElectricity } from 'react-icons/fc';
import { SiUnitednations } from 'react-icons/si';

const TotalCards = ({total,vehicle}) => {
    return (
       <>
          <MAP.Container fluid className='px-0 py-1'>
             
                <MAP.Row>
                <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0  mb-md-0'>
                    <div className='box box1'>
                  
                    <div class="row m-0 total mt-4 text-center">
                <h6  class="mt-1  noof "><b style={{fontSize:'12px'}}>  Total Electric Vehicles  <FcElectricity /></b></h6>
                <h5 className='empcount '>  {vehicle!=undefined&&formatNumber(vehicle)}</h5>
         </div>
                    </div>
                
                    </MAP.Col>

                    <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0 mb-md-0'>
                    <div className='box box2 '>

                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof "><b style={{fontSize:'12px'}}>Total Battery Electric Vehicles (BEV)  <FcElectricity /> </b></h6>
                    <h5 className='empcount'> {total!=undefined&&formatNumber(total.battery)}</h5>
                </div>
                    </div>
                    
                        </MAP.Col>
                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0  mb-md-0'>
                    <div className='box box7'>
                  
                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Plug-in Hybrid Electric Vehicles (PHEV)   <FcElectricity /> </b></h6>
                    <h5 className='empcount'>{total!=undefined&&formatNumber(total.plugin)}</h5>
                </div>

                    </div>
                   
                        </MAP.Col>

                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0  mb-md-0'>
                    <div className='box box3'>
                  
                  
                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Countries   <SiUnitednations/></b></h6>
                    <h5 className='empcount'> {total!=undefined&&formatNumber(total.country)}</h5>
                </div>
                    </div>
                   
                        </MAP.Col>

                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0  mb-md-0'>
                    <div className=' box box4'>
                  
                  
                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Models</b></h6>
                    <h5 className='empcount'>{total!=undefined&&formatNumber(total.model)}</h5>
                </div>

                    </div>
                    
                        </MAP.Col>

                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=' p-3 text-end m-0 mb-md-0'>
                    <div className=' box box5'>
                  
                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Companies</b></h6>
                    <h5 className='empcount'>{total!=undefined&&formatNumber(total.companies)}</h5>
                </div>

                    </div>
                    
                        </MAP.Col>

                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='mb-3 p-3 text-end m-0 mb-md-0'>
                    <div className=' box box6'>
                   
                  
                <div class="row m-0 total mt-4 text-center">
                    <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Cities</b></h6>
                    <h5 className='empcount'>{total!=undefined&&formatNumber(total.cities)}</h5>
                </div>
                    </div>
                  
                        </MAP.Col>
                        <MAP.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='mb-3 p-3 text-end m-0  mb-md-0'>
                    <div className='box box1'>
                  
              
            <div class="row m-0 total mt-4 text-center">
                <h6  class="mt-1  noof"><b style={{fontSize:'12px'}}>Total Electric Utility</b></h6>
                <h5 className='empcount'>{total!=undefined&&formatNumber(total.electric)}</h5>
            </div>
                    </div>
               
                    </MAP.Col>
                   
                    </MAP.Row>
                    </MAP.Container>
       </>
    );
};

export default TotalCards;