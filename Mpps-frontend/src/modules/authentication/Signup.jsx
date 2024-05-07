import React, { useState } from 'react';
import axios from 'axios';

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



    const [formData, setFormData] = useState({
        first_name: '',
        second_name: '',
        company_name: '',
        address: '',
        email: '',
        phone_number: '',
        password1: '',
        password2: '',
        is_admin: false,
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/register/', formData)
            .then(response => {
                // response.data.data.formData.value;
                console.log(response.data.data.formData.value);
                history.push('/user/login');  // Redirect to login page
            })
            .catch(error => console.error(error));
    };

    return(
        <div>
            <div>
              <NavBar renderButtons={false}/>
            </div>
            <div className="">
            <Container className="container-fluid" style={{ backgroundImage: `url(${bgpic})` ,backgroundPosition: 'center',  backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '100vh', maxWidth: "100%" , padding: '0', margin: '0' }} >
               <Form onSubmit={handleSubmit} className="p-5">
                <Row  className= "p-4 m-5 align-items-center justify-content-center " style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.1)", borderRadius: "22px" }}>
                    <h1 className='text-center'>
                        Register here
                    </h1>
                     <Col className="m-3">
                     <Row >
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="John"  required onChange={handleChange} />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Doe"  required onChange={handleChange} />
                              </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control type="text" placeholder="" required onChange={handleChange}/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="" required onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" required onChange={handleChange}/>
                        </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="" required onChange={handleChange}/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" required onChange={handleChange}/>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="" required onChange={handleChange}/>
                        </Form.Group>

                        <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button type="submit" className=" myButton m-2 align-items-center justify-content-center "  style={{ height: "35px", width: "80px", border: " 2px solid var(--light-green)", textColor: "var(--plain-black)", backgroundColor: "var(--whitish-green)", color: "var(--plain-black)" }} >
                                    <p className='text-center' style={{   color: "var(--plain-black)", textDecoration: 'none'  }} > Submit </p>
                            </Button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                                <p className='m-2'>Already have an account?</p>
                                <NavLink className='' style={{ textDecoration: "none ", color: "var(--light-green) ",borderRadius: "5px", border: " 0px solid var(--whitish-green)"}} to="/user/login"> 
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