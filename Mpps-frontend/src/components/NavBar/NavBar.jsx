// import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "./NavBar.css";
import Mppslogo from "../../assets/Mppslogo.png";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

    return(
        <div className="NavBar flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white" >
            <img className="Logo" src={Mppslogo} alt="logo"></img>
            <div className="NavLinks">
                <ul className="hidden md:flex">
                    <li className="p-4">Home</li>
                    <li className="p-4">Features</li>
                    <li className="p-4">Products</li>
                    <li className="p-4">Team</li>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <div>Logo</div>
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Features</li>
                    <li className="p-4 border-b border-gray-600">Products</li>
                    <li className="p-4 border-b border-gray-600">Team</li>
                </ul>
            <div className="UserButtons">
                <ul>
                    <li>Sign Up</li>
                    <li>Sign In</li>
                </ul>
            </div>

        </div>

    )
}

export default NavBar