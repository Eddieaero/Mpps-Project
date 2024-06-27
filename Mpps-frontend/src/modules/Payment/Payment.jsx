// import React from "react";

import '../../custom-colors.css';
import '../../App.css'; 

import FooterSpe from "../../components/Footer/FooterSpe";
import SideNavBar from '../../components/SideNavBar/SideNavBar';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
import { Button } from 'react-bootstrap';

const Payment = () => {

    return(
        <div>
            <NavBarPrivate/>
            <div>
                <SideNavBar/>
            </div>
            <div>
                <Col>
                    <Row className='flex p-5' style={{borderRadius: "30px", margin: "100px 100px 100px 100px ",backgroundColor: "var(--custom-white)",width: "90%", height: "100%"}}>
                        <Col lg={6} >
                            <h2 style={{ fontSize: "30px", fontWeight: "bold"}}>Payment</h2>
                            <p className='m-1' style={{ color: "var(--darkish-green)",fontSize: "15px", fontWeight: "normal"}}>See the details of the application fee for your transit pass </p>
                            <p className='m-1'>Transit pass expires after 10 days from the day you pay</p>
                            <Row className='m-0 ' style={{width: "29rem", height: "6.25rem", borderRadius: "14px", backgroundColor: "var(--darkish-green)"}}>
                                <Col lg={9} className='p-3'>
                                    <h1 className='p-0'  style={{ color: "var(--whitish-green)",fontSize: "20px", fontWeight: "normal"}}>Total payable amount</h1>
                                    <p className='p-0' style={{ color: "var(--whitish-green)",fontSize: "20px", fontWeight: "bold"}}>68,000/=</p>
                                </Col>
                                <Col lg={3}>
                                    <Button className=" HeroText3  " style={{marginTop: "30px", borderRadius: "50px", border: " 2px solid var(--whitish-green)", backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)", height: "2.5rem", width: "5rem"}}>
                                            Pay
                                    </Button>
                                </Col>
                               </Row>
                        </Col>
                        <Col lg={6}>
                            <p style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "25px"}}>  Cost estimations</p>
                            <Row className='m-3 p-3' style={{backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)",borderRadius: "22px"}}>
                                <Col>
                                    <p>Tax payments</p>
                                    <p>Cargo costs</p>
                                    <p>Service Charges</p>
                                    <p style={{color: "var(--whitish-green)", fontWeight: "bold", fontSize: "25px"}}>Total</p>
                                </Col>
                                <Col className='text-end ' style={{fontWeight: "bold"}}>
                                    <p>15,000/=</p>
                                    <p> - - </p>
                                    <p> - - </p>
                                    <p style={{color: "var(--whitish-green)", fontWeight: "bold", fontSize: "25px"}}>15,000/=</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='flex p-3' style={{borderRadius: "30px", margin: "100px 100px 100px 100px ",backgroundColor: "var(--custom-white)",width: "90%", height: "100%"}}>
                        
                        <p style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "25px"}}>
                            Payment history
                        </p>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Id</Col>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Date</Col>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Route</Col>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Transaction-No</Col>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Amount</Col>
                        <Col lg={2} className='text-center' style={{color: "var(--darkish-green)", fontWeight: "bold", fontSize: "20px"}}>Status</Col>
                        <Row>
                            <Col className='text-center'>1</Col>
                            <Col className='text-center'>21 May 2024</Col>
                            <Col className='text-center'>Dar - Iringa</Col>
                            <Col className='text-center'>9990907787665</Col>
                            <Col className='text-center'>15,000</Col>
                            <Col className='text-center'>Paid</Col>
                        </Row>
                        

                    </Row>
                
                </Col>
                
            </div>
            
            <FooterSpe/>
        </div>
    )
}

export default Payment