// import React from "react";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { Post } from 'react-axios';

import '../../custom-colors.css';
import '../../App.css'; 

// import Footer from "../../components/Footer/Footer";
import FooterSpe from "../../components/Footer/FooterSpe";

import NavBar from "../../components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


import bgpic from "../../assets/pine ui background.svg";
import logo from "../../assets/Mppslogo.svg";
import {ArrowRight} from "@phosphor-icons/react";


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const { email, password } = formData;
      
        try {
          const response = await axios.post('/api/login', { email, password }); // Replace with your backend API endpoint
          // Handle successful login (explained in next steps)
          console.log('Login successful:', response.data); // Example: log response for demonstration
        } catch (error) {
          console.error('Login failed:', error.response.data); // Example: log error for demonstration
          // Handle login error (explained in next steps)
        }
      };

    return(
        <div>
            <div >
                <NavBar renderButtons={false}/>
            </div>
            <div>
            <Container className="p-5 " style={{ backgroundImage: `url(${bgpic})` ,backgroundPosition: 'center',  backgroundSize: 'cover',backgroundRepeat: 'no-repeat', maxHeight: '100%', maxWidth: "100%" , padding: '0', margin: '0' }} >
                <Row className= "p-5 m-5 align-items-center justify-content-center " style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.1)", borderRadius: "22px" }}>
                    <Col className='d-flex justify-content-center align-items-center ' >
                        <div className='m-5 align-items-center justify-content-center' >
                        <img  src={logo} alt="" className=" m-5 align-items-center justify-content-center" style={{ width: "40%", height: "40%"}}/>
                        </div>
                    </Col>
                    <Col>
                        <Card className="m-3 border-0 bg-transparent" border=''>
                            <h1 className='text-center'>Login</h1>
                        <Form>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="JohnDoe@example.com" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="********"  
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required  />
                            </Form.Group>
                            
                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                            <div className='d-flex align-items-center justify-content-center'>
                                <Button type='submit' className=" myButton m-1 align-items-center justify-content-center "  style={{  border: " 2px solid var(--light-green)", textColor: "var(--plain-black)", backgroundColor: "var(--whitish-green)", color: "var(--plain-black)" }} >
                                    <NavLink style={{   color: "var(--plain-black)", textDecoration: 'none'  }} to="/Dashboard"> Submit </NavLink>
                                    {/* Submit */}
                                </Button>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p className='m-2'>you don't have an account?</p>
                                <NavLink className='' style={{ textDecoration: "none ", color: "var(--light-green) ",borderRadius: "5px", border: " 0px solid var(--whitish-green)"}} to="/Signup"> 
                                    Go to sign up
                                    <ArrowRight className='m-1' size={25} weight="bold" />
                                </NavLink>
                            </div>
                        </Form>
                    </Card>
                    </Col>
                </Row>
                
            </Container>
            </div>
            <FooterSpe/>
        </div>
    )
}

export default Login