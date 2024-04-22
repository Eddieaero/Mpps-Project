// import React from "react";


import Mppslogo from "../../assets/Mppslogo.svg";



import '../../custom-colors.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


const Footer = () => {

    return(
        <Container className=" p-5" style={{ backgroundColor: "var(--custom-white)", maxWidth: "100%", height: "10rem", alignItems: 'center' }}>
            <Row className=' d-flex align-items-center '>
                <Col >
                    <div>
                        <p style={{ }}>No need to worry , we'll  help you
                            make sense of it all..
                        </p>
                        <input placeholder='Enter your email' style={{borderRadius: "7px", border: "2px solid var(--primary-green)", backgroundColor: "var(--whitish-green)", width: "15rem", height: "2.5" }} >
                        </input>
                    </div>
                </Col>
                <Col >
                    <div className='text-center'>
                        @MPPS-2024
                    </div>
                </Col>
                <Col className="align-items-center justify-content-center " style={{ display: "flex" }}>
                    <div className="align-items-center justify-content-center ml-5" style={{  }}>
                        <img src={Mppslogo } alt='logo' style={{width: "5rem", height: "5rem", margin: '0 auto'}} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer