// import React from "react";
import './Home.css'
import '../../custom-colors.css';

import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";

// import Card from "../../components/Card/Card";
import Container from "react-bootstrap/Container";



import Card1 from '../../components/Card/Card1';
import Card2 from '../../components/Card/Card2';
import Card3 from '../../components/Card/Card3';
import Card4 from '../../components/Card/Card4';
import Card5 from '../../components/Card/Card5';
import Footer from '../../components/Footer/Footer';



const Home = () =>{
    return (
        <div className="Home align-items-center">
            <NavBar className="NavBar"/>

            <HeroSection/>
            
            <Container className=' mt-3 mb-3  '  style={{ backgroundColor: "var(--next-white)", margin: " ",  maxWidth: "78rem",  borderRadius: "35px" }}>
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
            </Container>

            <Footer/>



        </div>
    )


}

export default Home