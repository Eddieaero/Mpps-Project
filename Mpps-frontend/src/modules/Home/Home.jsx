// import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css'



const Home = () =>{
    return (
        <div className="Home">
            <NavBar className="NavBar"/>
            <HeroSection/>
            <h1>Home</h1>
            <p>Home page body content</p>


        </div>
    )


}

export default Home