import React from "react";
import { useState } from "react";


import '../../custom-colors.css';
import '../../App.css'; 

import FooterSpe from "../../components/Footer/FooterSpe";


import {MapPin, CalendarPlus, UserCircleGear, Truck, Plus, Rainbow} from "@phosphor-icons/react";

import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
import SideNavBar from '../../components/SideNavBar/SideNavBar';

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/esm/Button';

const Application = () => {
const [expandedWoodType, setExpandedWoodType] = useState(null);
// const [isPressed, setIsPressed] = useState(false);
        
const toggleWoodType = (woodType) => {
    if (expandedWoodType === woodType) {
        setExpandedWoodType(null); // Collapse if already expanded
    } else {
        setExpandedWoodType(woodType); // Expand if collapsed
    };
}            

const woodTypes = [
{ name: 'HandWood' },
{ name: 'SoftWood' },
{ name: 'WoodPile' },
{ name: 'WoodTimber' },
// Add other wood types here
]

// const onhandlePress = () => {
//     setIsPressed(true);
//     // You can perform any other action here when the button is pressed
//   };

//   const onhandleRelease = () => {
//     setIsPressed(false);
//     // You can perform any other action here when the button is released
//   };

    return(
        <div>
            <NavBarPrivate/>
            <div>
                <SideNavBar/>
            </div>
            <div className='flex p-5' style={{borderRadius: "30px", margin: "100px 100px 100px 100px ",backgroundColor: "var(--custom-white)",width: "80%", height: "100%"}}>
                <h2 style={{fontSize: "30px", fontWeight: "bold" }}>Transit Pass Application Form</h2>
                <p>Fill the form with all information for your route details</p>
                <Row>
                    <Form className='d-flex'>
                        <Col lg={6} className='m-1'>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Starting point</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <MapPin size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" placeholder="" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Start Date</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <CalendarPlus size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Driver name</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <UserCircleGear size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Payment number</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <UserCircleGear size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                                    </InputGroup>
                                </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Ending point</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text>
                                            <MapPin size={20} color="#00000a" weight="bold" />
                                            </InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" placeholder="" />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>End Date</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text>
                                            <CalendarPlus size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                                    </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Vehicle number</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text>
                                                <Truck size={20} color="#00000a" weight="bold" />
                                                </InputGroup.Text>
                                                <Form.Control id="inlineFormInputGroup" placeholder="" />
                                            </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} className='flex' >
                            <h2 style={{fontSize: "20px", fontWeight: "bold"}}> Cargo type </h2>
                            <Row className='m-3 p-1' style={{borderRadius: "22px", backgroundColor: "var(--next-white)"}}>
                               <Col className='m-1'>
                                    <Button className='m-2' onClick={() => toggleWoodType('HardWood')} style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--whitish-green)"}}>
                                        Hard wood 
                                        <Plus size={20} weight="bold" color="#00000a" />
                                    </Button>
                                    <Button className='m-2' onClick={() => toggleWoodType('WoodPile')} style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--whitish-green)"}}>
                                        Wood Pile 
                                        <Plus size={20} weight="bold" color="#00000a" />
                                    </Button>
                                    
                               </Col>
                               
                               <Col className='m-1'>
                                    <Button className='m-2' onClick={() => toggleWoodType('SoftWood')} style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--whitish-green)"}}>
                                        Soft wood 
                                        <Plus size={20} weight="bold" color="#00000a" />
                                    </Button>
                                    <Button className='m-2' onClick={() => toggleWoodType('WoodTimber')} style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--whitish-green)"}}>
                                        Wood timber 
                                        <Plus size={20} weight="bold" color="#00000a" />
                                    </Button>
                               </Col>
                            </Row>
                            {expandedWoodType === 'WoodPile' && (
                                        <Row className='m-3  p-1' style={{borderRadius: "22px", backgroundColor: "var(--next-white)"}}>
                                            <Col className='m-3'>
                                                <Form.Group controlId="specie">
                                                    <Form.Label>Specie</Form.Label>
                                                    <Form.Control style={{borderRadius: "22px"}} type="text" placeholder="Enter Specie" />
                                                </Form.Group>
                                            </Col>
                                            <Col className='m-3'>
                                            <Form.Group controlId="quantity">
                                                    <Form.Label>Quantity</Form.Label>
                                                    <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Quantity" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    )}
                            {expandedWoodType === 'HardWood' && (
                                <Row className='m-3 p-1' style={{borderRadius: "22px", backgroundColor: "var(--next-white)"}}>
                                    <Col className='m-3'>
                                        <Form.Group controlId="specie">
                                            <Form.Label>Specie</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="text" placeholder="Enter Specie" />
                                        </Form.Group>
                                        <Form.Group controlId="length">
                                            <Form.Label>Length (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Length" />
                                        </Form.Group>
                                    </Col>
                                    <Col className='m-3'>
                                        <Form.Group controlId="width">
                                            <Form.Label>Width (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Width" />
                                        </Form.Group>
                                        <Form.Group controlId="quantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Quantity" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            )}
                            {expandedWoodType === 'SoftWood' && (
                                <Row className='m-3 p-1' style={{borderRadius: "22px", backgroundColor: "var(--next-white)"}}>
                                    <Col className='m-3'>
                                        <Form.Group controlId="specie">
                                            <Form.Label>Specie</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="text" placeholder="Enter Specie" />
                                        </Form.Group>
                                        <Form.Group controlId="length">
                                            <Form.Label>Length (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Length" />
                                        </Form.Group>
                                    </Col>
                                    <Col className='m-3'>
                                        <Form.Group controlId="width">
                                            <Form.Label>Width (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Width" />
                                        </Form.Group>
                                        <Form.Group controlId="quantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Quantity" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            )}
                            
                            {expandedWoodType === 'WoodTimber' && (
                                <Row className='m-3 p-1' style={{borderRadius: "22px", backgroundColor: "var(--next-white)"}}>
                                    <Col className='m-3'>
                                        <Form.Group controlId="specie">
                                            <Form.Label>Specie</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="text" placeholder="Enter Specie" />
                                        </Form.Group>
                                        <Form.Group controlId="length">
                                            <Form.Label>Length (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Length" />
                                        </Form.Group>
                                        <Form.Group controlId="width">
                                            <Form.Label>Width (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Width" />
                                        </Form.Group>
                                    </Col>
                                    <Col className='m-3'>
                                        <Form.Group controlId="breadth">
                                            <Form.Label>Breadth (m)</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Breadth" />
                                        </Form.Group>
                                        <Form.Group controlId="quantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control style={{borderRadius: "22px"}} type="number" placeholder="Enter Quantity" />
                                        </Form.Group>
                                    </Col>
                                </Row>    
                            )}
                            
                            <Row className='d-flex m-5 p-1 justify-content-center align-content-center'>
                                <Button className='m-1' style={{border: "1px solid var(--darkish-green)", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--next-white)"}}>clear</Button>
                                <Button className='m-1' style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>Save</Button>
                            </Row>
                         </Col>
                    </Form>
                 </Row>
            </div>
            <FooterSpe/>
        </div>
    )
}

export default Application
















