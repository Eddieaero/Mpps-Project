// import React from "react";


import '../../custom-colors.css';
import '../../App.css'; 

import Footer from "../../components/Footer/Footer";


import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
import SideNavBar from '../../components/SideNavBar/SideNavBar';

const Application = () => {

    return(
        <div>
            <NavBarPrivate/>
            <SideNavBar/>
            <Footer/>
        </div>
    )
}

export default Application