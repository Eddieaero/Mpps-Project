// import React from "react";

import '../../custom-colors.css';
import '../../App.css'; 

// imported icons
import {SealWarning, PlusCircle} from "@phosphor-icons/react";

// imported user-defined components
import FooterSpe from "../../components/Footer/FooterSpe";
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import NavBarPrivate from "../../components/NavBar/NavBarPrivate";

// react bootstrap classes
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/esm/Button';

const Verify = () => {
    return(
        <div>
            <NavBarPrivate/>
            <div>
                <SideNavBar/>
            </div>
            <div className='flex p-5' style={{borderRadius: "30px", margin: "100px 100px 100px 100px ",backgroundColor: "var(--custom-white)",width: "85%", height: "100%"}}>
                <Row>
                    <Col lg={6}>
                    <h2 style={{fontSize: "30px", fontWeight: "bold" }}>Verify your business License</h2>
                        <p>submit the business license for your company here and become verified to apply for transit pass in our system</p>
                        <div className='p-2 ' style={{borderRadius: "20px", backgroundColor: "var(--darkish-green)",width: "23rem", height: "5.34rem"}}>
                            <Row className='p-1 '>
                                <Col lg={9} className=''>
                                    <p className='' style={{color: "var(--whitish-green)"}}>
                                        Current Verification Status
                                        <p className='' style={{fontWeight: "bold", color: "var(--whitish-green)"}}>Not Verified</p>
                                    </p>
                                 </Col>
                                <Col lg={3} className='align-items-center justify-content-center'>
                                    <SealWarning size={60} color="var(--whitish-green)" weight="bold" />
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                   
                    <Col lg={6} className='flex'>
                        <Row className='p-4 flex align-items-center justify-content-center' style={{backgroundColor: "var(--darkish-green)", width: "30rem", height: "10.75rem", borderRadius: "30px"}}>
                            <PlusCircle className=" "size={70} color="var(--whitish-green)" weight="bold" />
                            <p className='text-center' style={{ color: "var(--whitish-green)"}}>Upload here</p>
                        </Row>
                        <Row className='p-4 d-flex justify-content-end'>
                            <Button className=' ' style={{border: "0px", width: "7rem", borderRadius: "22px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>
                                Submit
                            </Button>
                        </Row>
                    </Col>

                </Row>
            </div>
            <FooterSpe/>
        </div>
    )
}
export default Verify