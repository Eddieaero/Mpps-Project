import  { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, Navigate } from "react-router-dom";
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
// import {ArrowRight, Copy} from "@phosphor-icons/react";
import {ArrowRight} from "@phosphor-icons/react";
import Login from './Login';



const Signup = () => {

    const [first_name, setFirstName] = useState();
    const [last_name, setSecondName] = useState();
    const [company_name, setCompanyName] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [password, setPassword] = useState(); 
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();


    console.log(first_name, last_name, company_name, address, email, phone_number, password)


    // const [formData, setFormData] = useState({
    //     first_name: '',
    //     second_name: '',
    //     company_name: '',
    //     address: '',
    //     email: '',
    //     phone_number: '',
    //     password: '',
    //     is_admin: false,
    // });
    // console.log(formData);

    // const handlePasswordChange = (e) => {
    //     // handleChange(e);
    //     confirmPassword(e);
    // };

    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.name]: e.target.value});
    // };


    // const confirmPassword = (e) => {
    //     if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
    //         if (formData.password !== formData.confirmPassword) {
    //             console.error('Passwords do not match');
    //         }
    //     }
    // }

    const handleSubmit = async (e) => { // Make handleSubmit async
        e.preventDefault();
    
        // const formData = new FormData(e.target); // Replace with your form selector if needed
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/MppsUser/register/', {
            first_name,
            last_name,
            email,
            address,
            company_name,
            phone_number,
            password
          }, {
            headers: {
              'Content-Type': 'application/json' // Set appropriate content type for FormData
            }
          });
    
          console.log('Registration successful:', response.data); // Log response data for debugging
          // { registerSuccess && (<Navigate to="/dashboard"  replace={true}/>) }
          // <Navigate to="/dashboard" replace/>
         if (response.data.success) {
            // Update state to indicate login success
            setRegisterSuccess(true);
            
          } else {
            setRegisterSuccess(false);
            // Handle login failure (e.g., show an error message)
          }
          if (registerSuccess) {
            console.log('Registration successful:', response.data); // Log response data for debugging
          }
        } catch (error) {
          console.error('Registration error:', error.response?.data || error.message); // Handle errors
          const errorMessage = error.response && error.response.data ? error.response.data : 'Incorrect Username or Password. Please try again.';
          console.error(errorMessage); // Log the error message for debugging purposes
          setRegisterError(errorMessage);
        }
            navigate('/dashboard'); // Navigate to the login page


        // useEffect(() => {
        //   if (registerSuccess) {
        //     // navigate('./login'); // Navigate to the login page
        //     <Navigate to="/dashboard" replace/>
        //   }
        // }, [registerSuccess]);
      };
      


    return(
        
        <div>
          {/* { registerSuccess && (<Navigate to="/dashboard"  replace={true}/>) } */}
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
                                <Form.Control 
                                    type="text" 
                                    placeholder="John"  
                                    required 
                                    value={first_name} 
                                    onChange={e => setFirstName(e.target.value)} 
                                    />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="John"  
                                    required 
                                    value={last_name} 
                                    onChange={e => setSecondName(e.target.value)} 
                                    />
                              </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Company name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="John"  
                                required 
                                value={company_name} 
                                onChange={e => setCompanyName(e.target.value)} 
                                />
                                                        </Form.Group> 

                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Address</Form.Label>
                                                            <Form.Control 
                                type="text" 
                                placeholder="John"  
                                required 
                                value={address} 
                                onChange={e => setAddress(e.target.value)} 
                                />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control 
                                type="text" 
                                placeholder="John"  
                                required 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Phone number</Form.Label>
                                                        <Form.Control 
                                type="text" 
                                placeholder="John"  
                                required 
                                value={phone_number} 
                                onChange={e => setPhoneNumber(e.target.value)} 
                                />
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="John"  
                            required 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="" 
                                required 
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$" 
                                // onChange={handlePasswordChange}
                            />
                        </Form.Group> */}

                        <div>
                        {registerError && <div className="alert alert-danger" role="alert">{registerError}</div>}
                        <div className="d-flex align-items-center justify-content-center">
                            <Button type="submit" onClick={handleSubmit} className=" myButton m-2 align-items-center justify-content-center "  
                                    style={{ height: "35px", width: "80px", border: " 2px solid var(--light-green)", textColor: "var(--plain-black)", backgroundColor: "var(--whitish-green)", color: "var(--plain-black)" }} >
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