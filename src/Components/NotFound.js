import React from 'react';
import {  useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
    return (
       <>
       <div className="center-container">
  <h1>
    URL NOT FOUND ,IF You want to Redirect Click <a onClick={() => navigate('/dashboard')}><u className='linkclick'>DASHBOARD</u></a>
  </h1>
</div>
       </>
    );
};

export default NotFound;