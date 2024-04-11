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
import { TreePalm, Leaf, Tree, TreeEvergreen } from "@phosphor-icons/react";


const Dashboard = () => {

    return(
        <div className='d-flex flex-column'>
           <NavBarPrivate style={{ }}/>
           
           
            <div className='d-flex flex mainContent'>
            <SideNavBar/>
                <div className='' style={{ width: "100%", height: "100%", overflow: "hidden"}}>
                    <div className=' '>
                       <img src={Truck} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    </div>
                    <div className='' style={{width: "110rem", height: "320px"}}>
                        <Col>
                         <Row>
                            <div style={{width: "400px", height: "100px"}}>
                                <h1>Apply for transit pass</h1>
                                <p>Enter track details and verify your application with us</p>
                                <Button>Start here</Button>
                            </div>
                         </Row>
                         <Row>
                             <div style={{width: "400px", height: "100px"}}>
                                <h1>Products Supported</h1>
                                <Row>
                                    <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--primary-green)", borderRadius: "14px"}} >
                                        <TreePalm className='m-2 ' size={65} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-3  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Timber</span>
                                    </div>
                                    <div className=' align-items-center  m-4 ' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <Leaf className=' m-2 ' size={65} weight="bold" style={{ color: 'var(--whitish-green)'}}  />
                                        <span className='m-2 text-center ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Wood pile</span>
                                    </div>
                                    <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--dark-blue)", borderRadius: "14px"}} >
                                        <Tree className=' m-2' size={65} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Soft wood</span>
                                    </div>
                                    <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                                        <TreeEvergreen className='m-2 ' size={65} weight="bold" color='var(--whitish-green)' />
                                        <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Hard wood</span>
                                    </div>
                                </Row>
                            </div>
                         </Row>
                        </Col>
                        <Col>
                        <Row></Row>
                         <Row></Row>
                        </Col>
        
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Dashboard