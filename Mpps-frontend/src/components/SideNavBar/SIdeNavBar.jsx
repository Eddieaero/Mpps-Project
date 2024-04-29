// import React from "react";
import { useState } from "react";


import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import Mppslogo from "../../assets/Mppslogo.svg";

// import NavItem from "react-bootstrap/esm/NavItem";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/esm/NavLink";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

import  { SideBarData } from './SideBarData';


// import Dashboard from "../../modules/Dashboard/Dashboard";



const SideNavBar = () => {
const [activeItem, setActiveItem] = useState(null);
const [isExpanded, setIsExpanded] = useState(false);
const [sidebarWidth, setSidebarWidth] = useState('80px');
const [navItemWidth, setnavItemWidth] = useState("0px");

    return(
        <div className="flex-column d-flex " >
            <Navbar bg="light" expand="lg" fixed="left" className="me-auto  container-fluid flex-column " style={{width: sidebarWidth, height: "100%"}} >
            <div 
                className={`sidebar ${isExpanded ? 'expanded ' : ''}`} 
            >
              <Col className="m-2">
              <div>
              <img
                    src={Mppslogo}
                    width="40"
                    height="40"
                    className=" m-2 align-top"
                    alt="Mpps logo"
                />
              </div>
            <div className=""> 
              <div className="  " style={{ color: "var(--plain-black)"}}>
              <div onMouseEnter={() => {
                              setIsExpanded(true);
                              setSidebarWidth('250px');
                              setnavItemWidth('200px');

                            }}
                            onMouseLeave={() => {
                              setIsExpanded(false);
                              setSidebarWidth('80px');
                              setnavItemWidth('200px');
                            }}>
                {SideBarData.map((item, index) => {
                    return (
                        <Nav.Link
                            key={index}
                            as={Link}
                            to={item.path}
                            className={`nav-link ${activeItem === item.title ? 'active ' : ''}`}
                            
                        >
                            <div className="mb-4 d-flex align-items-center navButton-wrapper">
                                <span className="m-1 navIcon" 
                                      > {item.icon}</span>
                                {isExpanded && <span style={{fontSize: "20px"}} className=" ">{item.title}</span>}
                            </div>
                        </Nav.Link>
                    )
                })}
            </div>
            </div>
            </div>
            </Col>
            </div>
             </Navbar>
            {/* </nav> */}
        </div>
    )
}

export default SideNavBar