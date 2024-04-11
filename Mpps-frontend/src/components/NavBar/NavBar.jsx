  import React from "react";
  import PropTypes from 'prop-types';
  // import './custom-colors.css';
  import '../../custom-colors.css';
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
  import "./NavBar.css";
  // import "./App.css"
  import Mppslogo from "../../assets/Mppslogo.svg";

  import Navbar from 'react-bootstrap/Navbar';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Button from 'react-bootstrap/Button';





  const NavBar = ({ renderButtons = true }) => {

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
        <Navbar className='p-3 mb-5 ' style={{backgroundColor: 'var(--custom-white )', boxShadow: 'none' }} data-bs-theme="light">
          <Container >
            <Navbar.Brand href="/">
              <img
                src={Mppslogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto justify-center">
              <Nav.Link >
                {NavItems.map(({path, link}) => (
                    <li  key={link} className="px-2 py-1 text-black float-start">
                        <NavLink style={{ color: 'black' }} to={path} activeclassname=" active">{link}</NavLink>
                    </li>
                ))}
              </Nav.Link>
            </Nav>
            {renderButtons && 
              <div className="">
              
              <Button className="" style={{  border: " 2px solid var(--whitish-green)", backgroundColor: "var(--plain-white)", color: "var(--primary-green)" }} >
                  <NavLink style={{   color: "var(--primary-green)" }} to="/login">Login</NavLink>
              </Button>
              <Button className=" m-2"  style={{  border: " 2px solid var(--light-green)", textColor: "var(--plain-black)", backgroundColor: "var(--whitish-green)", color: "var(--plain-black)" }} >
                  <NavLink style={{   color: "var(--plain-black)"  }} to="/signup">Sign Up</NavLink>
              </Button>
            </div>
            }
            


          </Container>
        </Navbar>

      )

  }

  export default NavBar