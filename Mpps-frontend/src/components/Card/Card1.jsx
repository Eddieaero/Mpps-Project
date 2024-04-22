// import React from "react";

import '../../custom-colors.css';

import sectionline from  "../../assets/Line29.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Cpu } from "@phosphor-icons/react";
import { Package } from "@phosphor-icons/react";
import { CubeTransparent } from "@phosphor-icons/react";
import { FingerprintSimple } from "@phosphor-icons/react";

const Card1 = () => {
    return(
        <div>
            <Container className="justify-content-center">
                <Row>
                    <div className=" flex  text-center p-3">
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>Core Benefits</p>
                        <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>WHY CHOOSE US</h1>
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>We are cost-effective for your business</p>
                    </div>
                    <div className="d-flex col-12 " >
                        <Row>
                            <Card className="d-flex p-2 m-2 "  style={{backgroundColor: "var(--next-white)", border: "3px solid var(--plain-white)", boxShadow: "-5px 50px 50px rgba(0, 0, 0, 0.01)", borderRadius: "30px", width: "34rem", height: "9rem" }} >
                                <Row className="m-1">
                                    <Col lg={4} className="d-flex  p-2 justify-content-center align-items-center" style={{ backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                        <FingerprintSimple style={{color:"var(--plain-white)", margin: "5px"}} className=" " size={95} weight="bold" />   
                                    </Col>
                                    <Col lg={8} className=" flex-row p-2 " style={{ overflow: 'auto' }}  >
                                        <h1 style={{ fontSize: "20px ", fontWeight: "bold"}}>Security</h1>
                                        <h2 style={{ fontSize: "12px ", fontWeight: "semibold"}}>Data Security You Can Trust</h2>
                                        <p className="text-right" style={{ fontSize: "12px"}}>
                                            We implement industry-standard security measures to ensure the confidentiality and integrity of your information throughout the permit application process.
                                        </p>
                                    </Col>
                                </Row>
                                
                            </Card>
                            <Card className="d-flex p-2 m-2"  style={{backgroundColor: "var(--next-white)", border: "3px solid var(--plain-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.01)", borderRadius: "30px", width: "34rem", height: "9rem" }}>
                                <Row className="m-1">
                                    <Col lg={4} className="d-flex  p-2 justify-content-center align-items-center" style={{ backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                        <Package style={{color:"var(--plain-white)", margin: "5px"}} size={95} weight="bold" />
                                    </Col>
                                    <Col lg={8} className="  flex-row p-2" style={{ overflow: 'auto' }}  >
                                        <h1 style={{ fontSize: "20px ", fontWeight: "bold"}}>Accessibility</h1>
                                        <h2 style={{ color: "var(--dark-blue)", fontSize: "12px ", fontWeight: "semibold"}}>Apply for permits anytime, anywhere.</h2>
                                        <p className="text-right" style={{ fontSize: "12px"}}>
                                        Access the system online or through your mobile device to submit applications, track their status, and receive updates all at your fingertips.</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="d-flex p-2 m-2"  style={{backgroundColor: "var(--next-white)", border: "3px solid var(--plain-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.01)", borderRadius: "30px", width: "34rem", height: "9rem" }}>
                                <Row className="m-1">
                                    <Col lg={4} className="d-flex  p-2 justify-content-center align-items-center" style={{ backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                        <CubeTransparent style={{color:"var(--plain-white)", margin: "5px"}} size={95} weight="bold"  />
                                    </Col>
                                    <Col lg={8} className="  flex-row p-2" style={{ overflow: 'auto' }}>
                                        <h1 style={{ fontSize: "20px ", fontWeight: "bold"}}>Cost-effective</h1>
                                        <h2 style={{ fontSize: "12px ", fontWeight: "semibold"}}>Save Time, Save Money</h2>
                                        <p className="text-right" style={{ fontSize: "12px"}}>
                                            Eliminates the need for physical paperwork and unnecessary visits. This translates to reduced administrative costs and faster turnaround times
                                        </p>                        
                                </Col>
                                </Row>
                            </Card>
                            <Card className="d-flex p-2 m-2"  style={{backgroundColor: "var(--next-white)", border: "3px solid var(--plain-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.01)", borderRadius: "30px", width: "34rem", height: "9rem" }}>
                                <Row className="m-1">
                                    <Col lg={4} className="d-flex  p-2 justify-content-center align-items-center" style={{ backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                        <Cpu style={{color:"var(--plain-white)", margin: "5px"}} size={95} weight="bold"  />
                                    </Col>
                                    <Col lg={8} className="  flex-row p-2" style={{ overflow: 'auto' }}>
                                        <h1 style={{ fontSize: "20px ", fontWeight: "bold"}}>Integration</h1>
                                        <h2 style={{ fontSize: "12px ", fontWeight: "semibold"}}>Smooth connectivity</h2>
                                        <p className="text-right" style={{ fontSize: "12px"}}>
                                            No manual data entry on multiple platforms. MPPS integrates with relevant systems for a smoother user experience and faster processing times.
                                        </p>                        
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </div>
                </Row>
                <Row className="m-5">
                    <img  src={sectionline} alt="" className="sectionline  "/>
                </Row>
            </Container>
        </div>

    )
}

export default Card1