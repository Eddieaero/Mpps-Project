// import React from "react";


import '../../custom-colors.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';



const Card5 = () => {

    return(
        <div className=' ' >
            <Container className=' mb-5  '>
                <Row>
                    <div className=" flex  text-center p-3">
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>History</p>
                        <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>How we keep track of your history</h1>
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>Remember everything form your first to last delivery</p>
                    </div>
                    <div className= "d-flex  justify-content-center   ">
                        <Card className= " justify-content-center " style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.1)", borderRadius: "22px", width: "65rem", height: "20rem"}}>
                            <Row className='p-5 '>
                                <Col className='p-3 mt-3' lg={7}> 
                                    <div >
                                        <h1 style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "30px"}}>All applications on hand</h1>
                                        <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "20px"}}>
                                        Keep your documents for future auditing purposes to cross check quantities delivered and cost incurred
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={5} className=' d-flex justify-content-center align-items-center flex-column '>
                                    <Row className='mb-2' style={{ backgroundColor: 'var(--custom-grey-25)', width: '11.5rem', height: '2rem', borderRadius: "50px" }}></Row>
                                    <Row className='mb-2' style={{ backgroundColor: 'var(--custom-grey-50)', width: '16.5rem', height: '2rem', borderRadius: "50px" }}></Row>
                                    <Row className='mb-2 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--custom-grey-100)', width: '24rem', height: '2.7rem', borderRadius: "50px" }}>
                                        <div className=' p-2' style={{ display: 'flex' }}> 
                                            <p className='   ' style={{ marginRight: "6rem", fontWeight: "bold", color: "var(--whitish-green)", fontSize: "20px"}}>Completed Deliveries</p>
                                            <span className=' flex justify-content-center align-items-center text-center' style={{  display: 'flex',  color: "--custom-grey-100", backgroundColor: 'var(--whitish-green)', width: '2rem', height: '2rem', borderRadius: "100px" }}>
                                                <p className='m-2' style={{ fontSize: "25px", fontWeight: "bold"}}>5</p>
                                            </span>
                                        </div>
                                    </Row>

                                    <Row className='mb-2' style={{ backgroundColor: 'var(--custom-grey-50)', width: '16.5rem', height: '2rem', borderRadius: "50px" }}></Row>
                                    <Row className='mb-2' style={{ backgroundColor: 'var(--custom-grey-25)', width: '11.5rem', height: '2rem', borderRadius: "50px" }}></Row>
                                </Col>
                            </Row>
                        </Card>
                    </div>    
                </Row>
            </Container>
        </div>

    )

}

export default Card5



