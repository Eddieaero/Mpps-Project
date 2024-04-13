// import React from "react";

import { NavLink } from "react-router-dom";

// import Footer from "../../components/Footer/Footer";
import FooterSpe from "../../components/Footer/FooterSpe";


import NavBar from "../../components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


import bgpic from "../../assets/pine ui background.svg";
import {ArrowRight} from "@phosphor-icons/react";

const Signup = () => {

    return(
        <div>
            <div>
              <NavBar renderButtons={false}/>
            </div>
            <div className="">
            <Container className="container-fluid" style={{ backgroundImage: `url(${bgpic})` ,backgroundPosition: 'center',  backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '100vh', maxWidth: "100%" , padding: '0', margin: '0' }} >
                

                <Form className="p-5">
                <Row  className= "p-4 m-5 align-items-center justify-content-center " style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.1)", borderRadius: "22px" }}>
                    <h1 className='text-center'>
                        Register here
                    </h1>
                     <Col className="m-3">
                     <Row >
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="John"  required  />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Doe"  required  />
                              </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="email" placeholder="" required/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="" required/>
                        </Form.Group> 
                      
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="" required/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" required/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="" required/>
                        </Form.Group>

                        <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button className=" myButton m-2 align-items-center justify-content-center "  style={{  border: " 2px solid var(--light-green)", textColor: "var(--plain-black)", backgroundColor: "var(--whitish-green)", color: "var(--plain-black)" }} >
                                    <NavLink style={{   color: "var(--plain-black)", textDecoration: 'none'  }} to="/dashboard"> Submit </NavLink>
                            </Button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                                <p className='m-2'>Already have an account?</p>
                                <NavLink className='' style={{ textDecoration: "none ", color: "var(--light-green) ",borderRadius: "5px", border: " 0px solid var(--whitish-green)"}} to="/Login"> 
                                    Go to Login
                                    <ArrowRight className='m-1' size={25} weight="bold" />
                                </NavLink>
                        </div>
                        </div>
                    </Col>
                </Row>
                </Form>
            </Container>
            </div>
            <FooterSpe/>
        </div>
    )
}

export default Signup