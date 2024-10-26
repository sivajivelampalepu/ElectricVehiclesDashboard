import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <>
        <div className="fp-container">
        <Spinner animation="border"  size="500"   variant="info" className="fp-loader" /> 
    </div>
    </>
    );
};

export default Loader;