
import '../../custom-colors.css';

// imported icons
import { Cpu } from "@phosphor-icons/react";
import { Package } from "@phosphor-icons/react";
import { CubeTransparent } from "@phosphor-icons/react";
import { FingerprintSimple } from "@phosphor-icons/react";


import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

// imported pictures
import Truck from "../../assets/truckpic.svg";

// imported react bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Features = () => {
    return(
        <div className="Features">
            <NavBar/>
            <div className="flex  justify-content-center" >
              <Col lg={12} className=" " >
                <Row className=' '>
                    <div className="m-5 flex justify-content-center align-items-center d-flex" style={{position: "", width: "90%", height: "20%", borderRadius: "1px", overflow: "hidden" }}>
                            <img src={Truck} className='justify-content-center align-items-center'  style={{marginTop: "50px", width: "100%", height: "100%", borderRadius: "30px", objectFit: "cover"}}/>
                    </div>
                    <div className='flex m-1 p-2' style={{ position: "absolute",top: "250px",left: "90px", borderRadius: "22px", boxShadow: "-5px 50px 50px rgba(0, 0, 0, 0.1)", backgroundColor: "var(--next-white)", width: "18rem", height: "5.8rem"}}>
                            <h1 className='p-1' style={{fontSize: "30px", fontWeight: "bold", margin: "0px" }}>Features</h1>
                            <span className='p-1' style={{fontSize: "20px", fontWeight: "normal"}}>Home/Features</span>
                    </div>
               </Row>
                <Row className='m-3 '>
                    <p className=" text-center" style={{fontSize: "40px", fontWeight: "bold"}}>WHY CHOOSE US </p>
                    <div className='m-5 d-flex flex-wrap  justify-space-between align-items-center'>
                        <div className='m-5'>
                            <div className="d-flex p-2 justify-content-center align-items-center" style={{top: "70%",left: "3%", position: "absolute", backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                <Cpu style={{color:"var(--plain-white)", margin: "5px"}} size={70} weight="bold"  />
                            </div>
                            <div className='p-3' style={{ width: "30rem", height: "15rem", backgroundColor: "var(--next-white)", borderRadius: "30px" }}>
                                <h1 style={{marginLeft: "120px", fontSize: "25px ", fontWeight: "bold"}}>Integration</h1>
                                <h2 style={{marginLeft: "120px", fontSize: "12px ", fontWeight: "semibold"}}>Smooth connectivity</h2>
                                <p className="text-right" style={{ fontSize: "12px"}}>
                                    No manual data entry on multiple platforms. MPPS integrates with relevant systems for a smoother user experience and faster processing times.
                                </p> 
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className="d-flex p-2 justify-content-center align-items-center" style={{top: "70%",left: "50%", position: "absolute", backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                <CubeTransparent style={{color:"var(--plain-white)", margin: "5px"}} size={70} weight="bold"  />
                            </div>
                            <div className='p-3' style={{ width: "30rem", height: "15rem", backgroundColor: "var(--next-white)", borderRadius: "30px" }}>
                                <h1 style={{marginLeft: "120px", fontSize: "25px ", fontWeight: "bold"}}>Cost-effective</h1>
                                <h2 style={{marginLeft: "120px", fontSize: "12px ", fontWeight: "semibold"}}>Save Time, Save Money</h2>
                                <p className="text-right" style={{ fontSize: "12px"}}>
                                Eliminates the need for physical paperwork and unnecessary visits. This translates to reduced administrative costs and faster turnaround times
                                </p> 
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className="d-flex p-2 justify-content-center align-items-center" style={{top: "800px",left: "3%", position: "absolute", backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                <Package style={{color:"var(--plain-white)", margin: "5px"}} size={70} weight="bold"  />
                            </div>
                            <div className='p-3' style={{ width: "30rem", height: "15rem", backgroundColor: "var(--next-white)", borderRadius: "30px" }}>
                                <h1 style={{marginLeft: "120px", fontSize: "25px ", fontWeight: "bold"}}>Accessibility</h1>
                                <h2 style={{marginLeft: "120px", fontSize: "12px ", fontWeight: "semibold"}}>Apply for permits anytime, anywhere.</h2>
                                <p className="text-right" style={{ fontSize: "12px"}}>
                                Access the system online or through your mobile device to submit applications, track their status, and receive updates all at your fingertips.
                                </p> 
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className="d-flex p-2 justify-content-center align-items-center" style={{top: "800px",left: "50%", position: "absolute", backgroundColor: "var(--custom-white)", width: "10rem", height: "7rem", borderRadius: "22px"}}>
                                <FingerprintSimple style={{color:"var(--plain-white)", margin: "5px"}} size={70} weight="bold"  />
                            </div>
                            <div className='p-3' style={{ width: "30rem", height: "15rem", backgroundColor: "var(--next-white)", borderRadius: "30px" }}>
                                <h1 style={{marginLeft: "120px", fontSize: "25px ", fontWeight: "bold"}}>Security</h1>
                                <h2 style={{marginLeft: "120px", fontSize: "12px ", fontWeight: "semibold"}}>Data Security You Can Trust</h2>
                                <p className="text-right" style={{ fontSize: "12px"}}>
                                We implement industry-standard security measures to ensure the confidentiality and integrity of your information throughout the permit application process.
                                </p> 
                            </div>
                        </div>
                    </div>
                 </Row>
              </Col>  
            </div>
            <Footer/>
        </div>
    )
}
export default Features