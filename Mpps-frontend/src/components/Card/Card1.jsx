// import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { Cpu } from "@phosphor-icons/react";
import { Package } from "@phosphor-icons/react";
import { CubeTransparent } from "@phosphor-icons/react";
import { FingerprintSimple } from "@phosphor-icons/react";

const Card1 = () => {
    return(
        <div>
            <Container className="justify-content-center">
                <Row>
                    <div className=" flex justify-content-center text-center p-3">
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>Core Benefits</p>
                        <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>WHY CHOOSE US</h1>
                        <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>We are cost-effective for your business</p>
                    </div>
                    <div >
                        <Card style={{backgroundColor: "var(--next-white)", border: "3px solid var(--plain-white)", borderRadius: "30px", width: "28rem", height: "9.5rem" }} >
                            <div className="d-flex col-4 justify-content-center align-items-center" style={{ backgroundColor: "var(--custom-white)", width: "11.625rem", height: "8rem", borderRadius: "22px"}}>
                                <FingerprintSimple style={{color:"var(--plain-white)", margin: "10px"}} className=" " size={100} weight="bold" />   
                            </div>
                            <div className="d-flex col-8" >
                                <h1>Security</h1>
                                <h2>Data Security You Can Trust</h2>
                                <p>
                                    We implement industry-standard security measures to ensure the confidentiality and integrity of your information throughout the permit application process.
                                </p>
                            </div>
                        </Card>
                        <Card>
                            <div>
                                <Package size={32} weight="bold" />
                            </div>
                            <div>
                                <h1>Accessibility</h1>
                                <h2>Apply for permits anytime, anywhere.</h2>
                                <p>
                                Access the system online or through your mobile device to submit applications, track their status, and receive updates all at your fingertips.</p>
                            </div>
                        </Card>
                    </div>
                    <div>    
                        <Card>
                            <div>
                                <CubeTransparent size={32} weight="bold" />
                            </div>
                            <div>
                                <h1>Cost-effective</h1>
                                <h2>Save Time, Save Money</h2>
                                <p>
                                    Eliminates the need for physical paperwork and unnecessary visits. This translates to reduced administrative costs and faster turnaround times
                                </p>                        
                            </div>
                        </Card>
                        <Card>
                            <div>
                                <Cpu size={32} weight="bold" />
                            </div>
                            <div>
                                <h1>Cost-effective</h1>
                                <h2>Save Time, Save Money</h2>
                                <p>
                                    Eliminates the need for physical paperwork and unnecessary visits. This translates to reduced administrative costs and faster turnaround times
                                </p>                        
                            </div>
                        </Card>
                    </div>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>

    )
}

export default Card1