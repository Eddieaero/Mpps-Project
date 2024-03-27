// import React from "react";

import herocard from "../../assets/herocard.png";
import Rectangle1 from "../../assets/Rectangle 237.png"; 
import Rectangle2 from "../../assets/Rectangle 238.png"; 
import Rectangle3 from "../../assets/Rectangle 239.png"; 

import { ArrowRight } from '@phosphor-icons/react';
import { ArrowCircleDown } from '@phosphor-icons/react';

// import arrowRight from "../../assets/Arrow 1.png";
import '../../custom-colors.css';

import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";  
import Button from "react-bootstrap/Button"; 








const HeroSection = () => {

    return (
        <Container className="MainDiv  flex justify-center" style={{backgroundColor: 'var(--custom-white )'}}>
            <Row className="Minidiv">
                <Col  className="Div1 mt-5 p-5 "  lg={6}>
                    <img src={herocard} alt="herocard" className="HeroCard"></img>
                </Col>
                <Col  lg={6}  className="Div2 mt-5 p-4 justify-content-center col-6" >
                    <h1 className="HeroHeading" style={{ color:"var(--darkish-green)", fontWeight: "bold", fontSize: "70px "}}>Transit Pass Application</h1>
                    <p className="HeroText" style={{ fontWeight: "bold"}}>Instant</p>
                    <h3 className="HeroText2" style={{ fontSize: "20px"}}>Everything is Simplified, transfer forest products faster and easier with less paperworks</h3>
                    <Row className="flex-row">
                        <Col> <img src={Rectangle1} alt="herocard" className="HeroCard"></img> fast</Col>
                        <Col> <img src={Rectangle2} alt="herocard" className="HeroCard"></img> easy</Col>
                        <Col> <img src={Rectangle3} alt="herocard" className="HeroCard"></img> affordable</Col> 
                    </Row>
                    <div className=" ">
                        <div className="justify-content-center " style={{ borderRadius: "50px", backgroundColor: "var(--whitish-green)", width: "300px", height: "55px"}}>
                            <div className="m-3">
                                <Button className="HeroText3   " style={{ borderRadius: "50px", border: " 2px solid var(--primary-green)", backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)", height: "38px"}}>
                                    Apply now <ArrowRight size={25} weight="bold" /></Button>
                                <Button className="HeroText4  m-2 " style={{ borderRadius: "50px", border: " 2px solid var(--darkish-green)", backgroundColor: "var(--custom-white)", color: "var(--darkish-green)", height: "38px"}}>See details</Button>
                            </div>
                          </div>
                    </div>
                </Col>
            </Row>
            <Row>   
                <ArrowCircleDown className="mb-5 d-flex" size={40} weight="bold" />  
             </Row>
        </Container>
    )
}

export default HeroSection