// import React from "react";


import Udsmlogo from  "../../assets/udsm.svg";
import tfslogo from  "../../assets/TFS logo 1.svg";
import mapboxlogo from  "../../assets/mapbox.svg";



import '../../custom-colors.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


const Card4 = () => {

    return( 
        <div style={{  maxWidth: "100%" ,position: "relative"}} className=' mt-5 mb-5 justify-content-center align-content-center '>
            <Container className=" "  >
                <Row className="  ">
                    <div className="mt-5  flex  text-center ">
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>Partners</p>
                        <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>Trusted partners &Organizations</h1>
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>Our system is acknowledged country-wise</p>
                    </div>
                    <div >
                        <Row className=" d-flex justify-content-center p-3 ">
                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                <Card style={{ width: "17rem", height: "15rem", borderRadius: "22px"}} className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <div className='p-1' style={{ width: "10rem", height: "10rem", borderRadius: "0%", overflow: "hidden" }}> <img  src={Udsmlogo} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                    <h1  style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}>UDSM </h1>
                                    <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> University of Dar es salaam</p>
                                </Card>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                <Card style={{ width: "17rem", height: "15rem", borderRadius: "22px"}} className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <div className='p-1' style={{ width: "15rem", height: "15rem", borderRadius: "0%", overflow: "hidden" }}> <img  src={tfslogo} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                    <h1  style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}>TFS </h1>
                                    <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> Tanzania Forest Services Argency</p>
                                </Card>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center '>
                                <Card style={{ width: "17rem", height: "15rem", borderRadius: "22px"}} className='d-flex flex-column align-items-center justify-content-center p-1 '>
                                <div className='p-1' style={{ width: "9.8rem", height: "9.8rem", borderRadius: "0%", overflow: "hidden" }}> <img  src={mapboxlogo} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                    <h1  style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}>Mapbox</h1>
                                    <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> Mapbox Geo-data Platform</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default Card4
