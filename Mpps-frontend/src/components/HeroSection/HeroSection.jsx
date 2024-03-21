// import React from "react";

import herocard from "../../assets/herocard.png";






const HeroSection = () => {

    return (
        <div className="MainDiv">
            <div className="Minidiv">
                <div  className="Div1">
                    <img src={herocard} alt="herocard" className="HeroCard"></img>
                </div>
                <div  className="Div2">
                    <h1 className="HeroHeading">Transit Pass Application</h1>
                    <p className="HeroText">Instant</p>
                    <h3 className="HeroText2">Everything is Simplified, transfer forest products faster and easier with less paperworks</h3>
                    <div>
                        
                    </div>
                    <div>
                        <button className="HeroText3">Apply now</button>
                        <button className="HeroText4">See details</button>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default HeroSection