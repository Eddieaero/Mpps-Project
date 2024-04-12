import React from "react";
import PropTypes from 'prop-types';


// import './custom-colors.css';
import '../../custom-colors.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from "react-icons/bi";

import "./NavBar.css";
// import "./App.css"
import Mppslogo from "../../assets/Mppslogo.svg";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';





const NavBarPrivate = ( ) => {

    const [nav, setNav] = useState(false);

    const NavItems = [
        {path: '/', link: 'Home'},
        {path: '/features', link: 'Features'},
        {path: '/products', link: 'Products'},
        {path: '/team', link: 'Team'}
    ]

    const handleNav = () => {
      setNav(!nav);
    };


    return(
      <Navbar className='p-3 mb-5 ' style={{backgroundColor: 'var(--whitish-green )', boxShadow: 'none' }} data-bs-theme="light">
        <Container >
          <Navbar.Brand href="/">
            {/* <img
              src={Mppslogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            Dashboard
          </Navbar.Brand>
          
          <div className=" p-5 d-flex  ">
            <div className="m-2 align-items-center justify-items-center" style={{ width: "35px", height: "35px", borderRadius: "50px", backgroundColor: "var(--darkish-green)"}}>
                <BiUser className="p-1 align-items-center justify-items-center" size={35}/>
            </div>
            <p className="m-2 align-items-center justify-items-center" style={{color: "var(--plain-black)", fontSize: "20px", fontWeight: "normal"}}>
                profile 
            </p>
          </div>
        </Container>
      </Navbar>

    )

}

export default NavBarPrivate