// import React from "react";
// import { NavLink } from 'react-router-dom';

import '../../custom-colors.css';
import '../../App.css'; 

import Footer from "../../components/Footer/Footer";

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

    return(
        <div className='d-flex flex-column'>
           <NavBarPrivate style={{ }}/>
           <div className=''>
                  <SideNavBar/>
            </div>
            <div className='d-flex flex mainContent'>
            <div className='' style={{ width: "95%", height: "100%"}}>
                    <div className=' '>
                       <img src={Truck} style={{marginLeft: "65px", width: "100%", height: "100%", objectFit: "cover", position: "relative"}} />
                       <span style={{position: "absolute"}}> Hello George</span>
                    </div>
                    {/* <div className=' bg-black' style={{marginLeft: "80px", width: "75rem", height: "100%"}}> */}
                    <div className=' p-4' style={{marginLeft: "90px", width: "95%" , height: "100%"}}>
                        <Row>
                        <Col lg={5} className='p-0'>
                         <Row  className='m-0'>
                            <div className='m-3 p-3' style={{borderRadius: "22px", backgroundColor: "var(--darkish-green)", width: "400px", height: "170px"}}>
                                <h1 style={{fontSize: "25px", color: "var(--whitish-green)"}}>Apply for transit pass</h1>
                                <p style={{color: "var(--whitish-green)"}}>Enter track details and verify your application with us</p>
                                <Button className=" HeroText3   " style={{marginLeft: "230px", borderRadius: "50px", border: " 2px solid var(--whitish-green)", backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)", height: "38px"}}>
                                    Start here <ArrowRight size={25} weight="bold" /></Button>
                            </div>
                         </Row>
                         <Row className='m-3'>
                             <div  style={{width: "400px", height: "170px", borderRadius: "22px", backgroundColor: "var(--darkish-green)"}}>
                                <h1 className='m-3 text-center'  style={{fontSize: "20px", color: "var(--whitish-green)"}}>Products Supported</h1>
                                <Row>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", border: " 0.3px solid var(--whitish-green)", backgroundColor: "var(--primary-green)", borderRadius: "14px"}} >
                                        <TreePalm className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Timber</span>
                                    </div>
                                    <div className=' align-items-center  m-2 ' style={{ width: "5rem", height: "5rem", border: " 0.3px solid var(--whitish-green)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <Leaf className=' m-1 ' size={45} weight="bold" style={{ color: 'var(--whitish-green)'}}  />
                                        <span className='m-0 text-center ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Wood pile</span>
                                    </div>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", border: " 0.3px solid var(--whitish-green)", backgroundColor: "var(--dark-blue)", borderRadius: "14px"}} >
                                        <Tree className=' m-1' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                                    </div>
                                    <div className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", border: " 0.3px solid var(--whitish-green)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <TreeEvergreen className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "10px"}}>Hard wood</span>
                                    </div>
                                </Row>
                            </div>
                         </Row>
                        </Col>
                        <Col lg={7} className='  '>
                            <Row className=' d-flex justify-content-center align-items-center'>
                                <div className='align-items-center d-flex justify-content-center' style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className=' flex justify-content-center align-items-center m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className=' flex justify-content-center align-items-center'>
                                            <MapPin size={70} color="var(--whitish-green)" weight="bold" />
                                            <img src={Dashboardline}/>                                                                          
                                        </div>
                                        <Row className=' '>
                                            <Col className='m-2 '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Current</h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Checkpoints</h2>
                                            </Col>
                                            <Col className='m-2'>
                                                <span className=' flex justify-content-center align-items-center text-center' style={{  display: 'flex',  color: "--custom-grey-100", backgroundColor: 'var(--whitish-green)', width: '2rem', height: '2rem', borderRadius: "100px" }}>
                                                    <p className='m-2' style={{ fontSize: "25px", fontWeight: "bold"}}>5</p>
                                                </span>
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                    <div className=' flex justify-content-center align-items-center m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <Col className='m-1  flex'>
                                            <CalendarX size={70} color="var(--whitish-green)" weight="bold" />
                                            <img src={Dashboardline}/>
                                        </Col>
                                        <div>
                                            <Col className='m-2 text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>TP-Deadline</h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>Date: 6 May 2024</h2>
                                            </Col>
                                        </div>
                                            
                                    </div>
                                    <div className=' flex justify-content-center align-items-center m-3' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className=''>
                                            <SealWarning size={70} color="var(--whitish-green)" weight="bold" />
                                            <img src={Dashboardline}/>
                                        </div>
                                        <div>
                                            <Col className='m-1 p-1  text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Verify documents</h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>Please verify your Business License</h2>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <Row className='' >
                                {/* <div style={{display: 'flex', justifyContent: 'space-between'}}> */}
                                <div className='d-flex'>
                                    <div className='m-2' style={{width: "13rem", height: "11rem", borderRadius: "27px", backgroundColor: "var(--darkish-green)"}}>
                                        <div className='m-1'>
                                            <SignOut size={70} color="var(--whitish-green)" weight="bold" />
                                            <img src={Dashboardline}/>
                                        </div>
                                        <div>
                                            <Col className='m-1 p-1  text-center '>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "18px", fontWeight: "bold"}}>Log out </h2>
                                                <h2 style={{ color: "var(--whitish-green)", fontSize: "15px", fontWeight: "normal"}}>Back to home</h2>
                                            </Col>
                                        </div>

                                    </div>
                                    <Row className='m-2' style={{width: "28rem", height: "4.3rem", borderRadius: "22px", backgroundColor: "var(--darkish-green)"}}>
                                        <di>
                                            <h2  style={{ color: "var(--whitish-green)", fontSize: "20px", fontWeight: "bold"}}>Completed Deliveries</h2>
                                        </di>
                                        <span className=' flex justify-content-center align-items-center text-center' style={{  display: 'flex',  color: "--custom-grey-100", backgroundColor: 'var(--whitish-green)', width: '2rem', height: '2rem', borderRadius: "100px" }}>
                                            <p className='m-2' style={{ fontSize: "25px", fontWeight: "bold"}}>5</p>
                                        </span>
                                    </Row>
                                </div>
                             </Row>
                        </Col>

                        </Row>
                        
        
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Dashboard