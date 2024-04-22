// import React from "react";
// import "./style.css"

import '../../custom-colors.css';

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";


// import Eddie from  "../../assets/20221223_125407_remastered.jpg";
import hellen from  "../../assets/hellen.jpg";

import Dashboardline from "../../assets/dashboardLine.svg";


import Truck from "../../assets/truckpic.svg";


// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Team = () => {

    return(
        <div>
            <NavBar/>
            <div>
                <Col>
                    <Row>
                        {/* <div> */}
                        <div className="m-5 flex justify-content-center align-items-center d-flex" style={{position: "", width: "90%", height: "20%", borderRadius: "1px", overflow: "hidden" }}>
                            <img src={Truck} className='justify-content-center align-items-center'  style={{marginTop: "50px", width: "100%", height: "100%", borderRadius: "30px", objectFit: "cover"}}/>
                        </div>
                        <div className='flex m-1 p-2' style={{ position: "absolute",top: "250px",left: "90px", borderRadius: "22px", boxShadow: "-5px 50px 50px rgba(0, 0, 0, 0.1)", backgroundColor: "var(--next-white)", width: "18rem", height: "5.8rem"}}>
                                <h1 className='p-1' style={{fontSize: "30px", fontWeight: "bold", margin: "0px" }}>Team</h1>
                                <span className='p-1' style={{fontSize: "20px", fontWeight: "normal"}}>Home/Team</span>
                        </div>
                        {/* </div> */}
                    </Row>
                    <Row>
                        <p className=" text-center" style={{fontSize: "40px", fontWeight: "bold"}}>Our Team </p>
                        <div className='p-3 m-5 d-flex flex-wrap  justify-space-between align-items-center'>
                            <Col className='justify-content-center' style={{}}>
                                <div  style={{ position: "absolute", width: "8rem", height: "8rem", borderRadius: "50%", overflow: "hidden" }}>
                                    <img  src={hellen} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
                                </div>
                                <div className='m-3 ' style={{backgroundColor: "var(--plain-white)", width: "20rem", height: "15rem", boxShadow: "5px -50px -50px rgba(0, 0, 0, 0.02)", borderRadius: "30px"}}>
                                    <div className=' p-2' style={{backgroundColor: "var(--darkish-green)", borderRadius: "30px 30px 0px 30px"}}>
                                    <h2 className='m-2 text-end' style={{ color: "var(--whitish-green)", fontSize: "25px"}}>
                                        Hellen Mziray
                                     </h2>
                                     <h3 className=' text-end' style={{color: "var(--whitish-green)", fontSize: "20px"}}>Software designer</h3>
                                     {/* <h3 className='m-2 p-0 text-end'>designer </h3> */}
                                     {/* <img className='m-4' src={Dashboardline}/> */}
                                     <p></p>
                                    </div>
                                 </div>
                            </Col>
                            <Col className='justify-content-center'>
                                <div  style={{ position: "absolute", width: "8rem", height: "8rem", borderRadius: "50%", overflow: "hidden" }}>
                                    <img  src={hellen} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
                                </div>
                                <div className='m-3 ' style={{backgroundColor: "var(--plain-white)", width: "20rem", height: "15rem", boxShadow: "5px -50px -50px rgba(0, 0, 0, 0.02)", borderRadius: "30px"}}>
                                    <div className=' p-2' style={{backgroundColor: "var(--darkish-green)", borderRadius: "30px 30px 0px 30px"}}>
                                    <h2 className='m-2 text-end' style={{ color: "var(--whitish-green)", fontSize: "25px"}}>
                                        Hellen Mziray
                                     </h2>
                                     <h3 className=' text-end' style={{color: "var(--whitish-green)", fontSize: "20px"}}>Software designer</h3>
                                     {/* <h3 className='m-2 p-0 text-end'>designer </h3> */}
                                     {/* <img className='m-4' src={Dashboardline}/> */}
                                     <p></p>
                                    </div>
                                 </div>
                            </Col>
                            <Col className='justify-content-center'>
                                <div  style={{ position: "absolute", width: "8rem", height: "8rem", borderRadius: "50%", overflow: "hidden" }}>
                                    <img  src={hellen} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
                                </div>
                                <div className='m-3 ' style={{backgroundColor: "var(--plain-white)", width: "20rem", height: "15rem", boxShadow: "5px -50px -50px rgba(0, 0, 0, 0.02)", borderRadius: "30px"}}>
                                    <div className=' p-2' style={{backgroundColor: "var(--darkish-green)", borderRadius: "30px 30px 0px 30px"}}>
                                    <h2 className='m-2 text-end' style={{ color: "var(--whitish-green)", fontSize: "25px"}}>
                                        Hellen Mziray
                                     </h2>
                                     <h3 className=' text-end' style={{color: "var(--whitish-green)", fontSize: "20px"}}>Software designer</h3>
                                     {/* <h3 className='m-2 p-0 text-end'>designer </h3> */}
                                     {/* <img className='m-4' src={Dashboardline}/> */}
                                     <p></p>
                                    </div>
                                 </div>
                            </Col>
                        </div>
                    </Row>
                </Col>

            </div>
            <Footer/>

        </div>
    )
}

export default Team