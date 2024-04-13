// import React from "react";


import '../../custom-colors.css';
import '../../App.css'; 

import FooterSpe from "../../components/Footer/FooterSpe";


import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
import SideNavBar from '../../components/SideNavBar/SideNavBar';

const Application = () => {

    return(
        <div>
            <NavBarPrivate/>
            <div>
                <SideNavBar/>
            </div>
            <div>
                
            </div>
            
            <FooterSpe/>
        </div>
    )
}

export default Application