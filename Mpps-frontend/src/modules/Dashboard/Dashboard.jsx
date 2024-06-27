import useNavigate from "react";
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import { removeToken } from './modules/authentication/TokenUtils';
import { removeToken } from './../authentication/TokenUtils';

import '../../custom-colors.css';
import '../../App.css'; 
// import Footer from "../../components/Footer/Footer";
import FooterSpe from "../../components/Footer/FooterSpe";

import SideNavBar from "../../components/SideNavBar/SideNavBar";
import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
// import Container from 'react-bootstrap/esm/Container';
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import Truck from "../../assets/truckpic.svg";
import Dashboardline from "../../assets/dashboardLine.svg";
import { TreePalm, Leaf, Tree, TreeEvergreen, ArrowRight,MapPin,CalendarX,SealWarning,SignOut } from "@phosphor-icons/react";


const Dashboard = () => {



    const logoutUser = async () => {
        try {
            await axios.post('/api/logout/');
            removeToken();
            // Redirect to the home page
            const navigate = useNavigate();
            navigate('/'); // Change the URL to your home page URL
        } catch (error) {
            throw error.response.data;
        }
    };

    return(
        <div className='d-flex flex-column'>
           <NavBarPrivate style={{ }}/>
           <div className=''>
                  <SideNavBar/>
           </div>
            <div className='d-flex flex mainContent'>
                <div className='' style={{ width: "95%", height: "100%"}}>
                    <div className=' '>
                        <img
                            src={Truck}
                            style={{
                            marginLeft: "65px",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            }}
                        />
                        <span style={{ position: "absolute", top: "13%", left: "10%", color: "white", fontWeight: "bold" }}>
                            <p style={{fontSize: "25px", fontWeight: "normal"}}>
                                Welcome, <span>George</span>
                                <p style={{fontSize: "25px", fontWeight: "bold"}}>Good Morning</p>
                            </p>
                        </span>
                    </div>
                    <div className=' p-4' style={{marginLeft: "85px", width: "97%" , height: "100%"}}>
                        <Row>
                        <Col lg={12} className='p-0'>
                         <Row  className='m-0'>
                            <div className='m-3 p-3' style={{borderRadius: "22px", backgroundColor: "var(--custom-white)", width: "400px", height: "170px"}}>
                                <h1 style={{fontSize: "25px", color: "var(--darkish-green)"}}>Apply for transit pass</h1>
                                <p style={{color: "var(--darkish-green)"}}>Enter track details and verify your application with us</p>
                                <Button className=" HeroText3   " style={{marginLeft: "230px", borderRadius: "50px", border: " 2px solid var(--whitish-green)", backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)", height: "38px"}}>
                                    Start here <ArrowRight size={25} weight="bold" />
                                </Button>
                            </div>
                            <div className=' flex justify-content-center align-items-center p-1 m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <MapPin className='' size={70} color="var(--whitish-green)" weight="bold" />
                                        </div>
                                        <div>
                                            <img src={Dashboardline}/>
                                        </div>
                                        <Row className='p-2 '>
                                            <Col className='m-0'>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Current</h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Checkpoints</h2>
                                            </Col>
                                            <Col className='m-0'>
                                                <span className=' flex justify-content-center align-items-center text-center' style={{  display: 'flex',  color: "--custom-grey-100", backgroundColor: 'var(--whitish-green)', width: '2rem', height: '2rem', borderRadius: "100px" }}>
                                                    <p className='m-2' style={{ fontSize: "25px", fontWeight: "bold"}}>0</p>
                                                </span>
                                            </Col>
                                        </Row>
                                        
                            </div>
                            <div className=' flex justify-content-center align-items-center p-1 m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <CalendarX size={70} color="var(--whitish-green)" weight="bold" />
                                         </div>
                                        <div>
                                            <img src={Dashboardline}/>
                                        </div>
                                        <Row className='p-2'>
                                            <Col className='m-0 text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>TP-Deadline</h2>
                                                {/* <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>Date: 6 May 2024</h2> */}
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}> - - </h2>
                                            </Col>
                                        </Row>
                                            
                            </div>
                            <div className=' flex justify-content-center align-items-center p-1 m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <SealWarning size={70} color="var(--whitish-green)" weight="bold" />
                                        </div>
                                        <div>
                                            <img src={Dashboardline}/>
                                        </div>
                                        <div>
                                            <Col className='m-1  text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Verify documents</h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>Please verify your Business License</h2>
                                            </Col>
                                        </div>
                            </div>
                        </Row>
                        <Row className=' m-1'>
                             <div  className='m-3' style={{width: "25rem", height: "10.6rem", borderRadius: "22px", backgroundColor: "var(--custom-white)"}}>
                                <h1 className='m-3 text-center'  style={{fontSize: "20px",fontWeight: "bold", color: "var(--darkish-green)"}}>Products Supported</h1>
                                <Row>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderLeft: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--primary-green)", borderRadius: "14px"}} >
                                        <TreePalm className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Timber</span>
                                    </div>
                                    <div className=' align-items-center  m-2 ' style={{ width: "5rem", height: "5rem", borderBottom: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <Leaf className=' m-1 ' size={45} weight="bold" style={{ color: 'var(--whitish-green)'}}  />
                                        <span className='m-0 text-center ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Wood pile</span>
                                    </div>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderBottom: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--dark-blue)", borderRadius: "14px"}} >
                                        <Tree className=' m-1' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                                    </div>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderRight: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <TreeEvergreen className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "10px"}}>Hard wood</span>
                                    </div>
                            </Row>
                            </div>
                            <div className=' p-1  m-3 ' style={{width: "13rem", height: "10.6rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <SignOut size={70} color="var(--whitish-green)" weight="bold" />
                                        </div>
                                        <div>
                                            <img src={Dashboardline}/>
                                        </div>
                                        <div>
                                            <Col className='m-1 p-1  text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>
                                                    <button style={{ backgroundColor: "inherit", textDecoration: "none",fontWeight: "bold",  padding: "0px", margin: "0px", border: "none", color: "var(--whitish-green)"  }} onClick={logoutUser}>
                                                        Log out
                                                    </button>
                                                </h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>
                                                    Back to home
                                                </h2>
                                            </Col>
                                        </div>
                            </div>
                            <div className=' m-3' style={{width: "28rem", height: "4rem", borderRadius: "22px", backgroundColor: "var(--darkish-green)"}}>
                                <Row className='m-0 p-3'>
                                    <Col lg={10} className='m-0'>
                                        <h2  style={{ color: "var(--whitish-green)", fontSize: "20px", fontWeight: "bold"}}>Completed Deliveries</h2>
                                    </Col>
                                    <Col lg={2} className=' align-items-center'>
                                        <span className=' flex justify-content-center align-items-center text-center' style={{  display: 'flex',  color: "--custom-grey-100", backgroundColor: 'var(--whitish-green)', width: '2rem', height: '2rem', borderRadius: "100px" }}>
                                            <p className='m-2' style={{ fontSize: "25px", fontWeight: "bold"}}>0</p>
                                        </span>
                                    </Col>
                                </Row>
                             </div>
                          </Row>
                        </Col>
                        </Row>
                     </div>
                </div>
            </div>
            <FooterSpe/>
        </div>
    )
}

export default Dashboard