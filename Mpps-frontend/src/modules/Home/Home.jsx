// import React from "react";
import '../../custom-colors.css';

import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";

// import Card from "../../components/Card/Card";
import Container from "react-bootstrap/Container";


import './Home.css'
import Card1 from '../../components/Card/Card1';
import Card2 from '../../components/Card/Card2';
import Card3 from '../../components/Card/Card3';



const Home = () =>{
    return (
        <div className="Home align-items-center">
            <NavBar className="NavBar"/>

            <HeroSection/>
            
            <Container className='  '  style={{ backgroundColor: "var(--next-white)", margin: "1rem", padding: "1rem", maxWidth: "78rem",  borderRadius: "35px" }}>
                <Card1/>
                <Card2/>
                <Card3/>
            </Container>


        </div>
    )


}

export default Home