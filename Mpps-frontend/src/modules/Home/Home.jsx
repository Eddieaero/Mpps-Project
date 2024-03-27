// import React from "react";
import '../../custom-colors.css';

import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";

// import Card from "../../components/Card/Card";
import Container from "react-bootstrap/Container";


import './Home.css'
import Card1 from '../../components/Card/Card1';



const Home = () =>{
    return (
        <div className="Home">
            <NavBar className="NavBar"/>

            <HeroSection/>
            
            <Container className='  '  style={{ backgroundColor: "var(--next-white)", borderRadius: "35px" }}>
                <Card1/>
                {/* </Card1> */}
            </Container>


        </div>
    )


}

export default Home