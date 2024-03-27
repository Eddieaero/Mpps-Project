// import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "./NavBar.css";
// import "./App.css"
import Mppslogo from "../../assets/Mppslogo.svg";

const NavBar = () => {

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
        <header className="bg-black">
            <div className="  " >
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between  ">
                 <div>
                    <a className=" ">
                        <img className="Logo " src={Mppslogo} alt="logo"></img>
                    </a>
                 </div>
                {/* <div className=" "> */}
                    {/* <ul className="hidden md:flex"> */}
                    <ul className=" hidden md:inline-flex text-lg ">
                        {NavItems.map(({path, link}) => (
                            <li key={link} className="px-2 py-1 text-black float-start">
                                <NavLink to={path} activeclassname=" active">{link}</NavLink>
                            </li>
                        ))}
                    </ul>
                {/* </div> */}
                {/* <div className="UserButtons ">
                    <ul>
                        <li>Sign Up</li>
                        <li>Sign In</li>
                    </ul>
                </div> */} 
            </nav>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            {/* <div className="flex flex-col">
                <div className=" ">
                        <img className="Logo" src={Mppslogo} alt="logo"></img>
                    </div>
                    <div>
                        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                            <li className="p-4 border-b border-gray-600">Home</li>
                            <li className="p-4 border-b border-gray-600">Features</li>
                            <li className="p-4 border-b border-gray-600">Products</li>
                            <li className="p-4 border-b border-gray-600">Team</li>
                        </ul>
                    </div>
                    <div className="UserButtons">
                        <ul>
                            <li>Sign Up</li>
                            <li>Sign In</li>
                        </ul>
                    </div>
            </div> */}
                
        </div>
        </header>
        

    )
}

export default NavBar