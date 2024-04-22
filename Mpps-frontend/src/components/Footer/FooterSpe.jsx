// import React from "react";
// import Mppslogo from "../../assets/Mppslogo.svg";

import '../../custom-colors.css';

import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


const FooterSpecial = () => {
    return(
        <div className=" p-1" style={{ backgroundColor: "var(--custom-white)", maxHeight: "100%", width: "100%", alignItems: 'center', position: '', bottom: '0' }}>
            <Row className=' d-flex align-items-center '>
                <div className='text-center'>
                    @MPPS-2024
                </div>
            </Row>
        </div>
    )
}

export default FooterSpecial