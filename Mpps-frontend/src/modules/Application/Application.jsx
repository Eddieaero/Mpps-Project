import React from "react";
import { useState, useEffect } from "react";
import '../../custom-colors.css';
import '../../App.css'; 
import FooterSpe from "../../components/Footer/FooterSpe";
import {MapPin, CalendarPlus, UserCircleGear, Truck, Plus, Rainbow, ArrowLineDown} from "@phosphor-icons/react";
import NavBarPrivate from "../../components/NavBar/NavBarPrivate";
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/esm/Button';





const Application = () => {
const [expandedWoodType, setExpandedWoodType] = useState(null);
const [showForm, setShowForm] = useState(false); // State to manage form visibility
const toggleFormVisibility = () => setShowForm(!showForm); // Function to toggle form visibility
const toggleWoodType = (woodType) => {
    if (expandedWoodType === woodType) {
        setExpandedWoodType(null); // Collapse if already expanded
    } else {
        setExpandedWoodType(woodType); // Expand if collapsed
    }
}    
const [startDate, setStartDate] = useState(new Date());
const [destinations, setDestinations] = useState([]);
const [searchTermStart, setSearchTermStart] = useState('');
const [searchResultsStart, setSearchResultsStart] = useState([]);
const [showSearchResultsStart, setShowSearchResultsStart] = useState(true);
const [searchTermEnd, setSearchTermEnd] = useState('');
const [searchResultsEnd, setSearchResultsEnd] = useState([]);
const [showSearchResultsEnd, setShowSearchResultsEnd] = useState(true); 
const woodTypes = [
{ name: 'HandWood' },
{ name: 'SoftWood' },
{ name: 'WoodPile' },
{ name: 'WoodTimber' },
// Add other wood types here
]

const handleClearForm = () => {
    setSearchTermStart('');
    setSearchTermEnd('');
    // Clear other state variables related to form inputs
};


const handleSaveForm = async () => {
    const formData = {
        startingPoint: searchTermStart,
        endingPoint: searchTermEnd,
        // Add other form data properties here as needed
    };

    try {
        const response = await fetch('http://example.com/api/save-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to save form data');
        }

        // Optionally handle success response from the server
        const responseData = await response.json();
        console.log('Form data saved successfully:', responseData);

        // Clear form inputs after successful submission
        setSearchTermStart('');
        setSearchTermEnd('');
        // Clear other state variables related to form inputs
    } catch (error) {
        console.error('Error saving form data:', error.message);
        // Handle errors here (e.g., show error message to the user)
    }
};


useEffect(() => {
    const loadDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5173/src/modules/Application/points.json'); // Adjust the path as needed
        const data = await response.json();
        const destinationsLists = data[0].destination
        // const destinationsArray = Array.isArray(data.destination) ? data.destination : [];
        setDestinations(destinationsLists);
        // console.log(destinationsArray);
        // console.log(data[0].destination);   
      } catch (error) {
        console.error('Failed to load destinations:', error);
        // console.error(error);
      }
    };
    loadDestinations();
  }, []);


  const handleSelectDestinationStart = (name) => {
    setSearchTermStart(name);
    setSearchResultsStart([]);
    setShowSearchResultsStart(false);
};

  useEffect(() => {
    const results = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTermStart.toLowerCase())
    );
    setSearchResultsStart(results);
  }, [searchTermStart, destinations]);


  const handleSelectDestinationEnd = (name) => {
    setSearchTermEnd(name);
    setSearchResultsEnd([]);
    setShowSearchResultsEnd(false);
};

  useEffect(() => {
    const results = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTermEnd.toLowerCase())
    );
    setSearchResultsEnd(results);
  }, [searchTermEnd , destinations]);


    return(
        <div>
            <NavBarPrivate/>
            <div>
                <SideNavBar/>
            </div>
            <div className='flex p-2' style={{borderRadius: "15px", margin: "100px 100px 100px 100px ",width: "90%", height: "3%"}}>
                <Row className='flex p-2' style={{borderRadius: "15px", backgroundColor: "var(--custom-white)"}}>
                    <Col lg={11}><p className="p-2 m-1">New Application</p></Col>
                    <Col lg={1}>
                        <Button className="m-1 align-items-right" style={{backgroundColor: "var(--whitish-green)", color: "var(--darkish-green)", border: " 2px solid var(--darkish-green)"}} onClick={toggleFormVisibility}>
                            Apply
                        </Button>
                    </Col>
                </Row> 
                <Row className="m-2">
                    <Col className="align-items-center text-center" lg={12} style={{Color:"var(--custom-white)"}}>
                        <p className="p-2 m-1">
                            View Saved Applications
                        </p>
                    </Col>
                </Row> 
                {/* <Row style={{borderRadius: "15px", backgroundColor: "var(--custom-white)"}}>
                    <Col className="align-items-center text-center" lg={12} style={{borderRadius: "15px",  Color:"var(--custom-white)"}}>
                        <p className="p-2 m-1" >
                            No Data
                        </p>
                    </Col>
                </Row> */}
                <Row className=" flex p-2" style={{borderRadius: "15px", backgroundColor: "var(--custom-white)"}}>
                    <Col lg={1} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            1   
                        </p>
                    </Col>
                    <Col lg={2} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            T-EDD-350
                        </p>
                    </Col>
                    <Col lg={2} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            Dar - Mtwara
                        </p>
                    </Col>
                    <Col lg={2} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            7 checkpoints
                        </p>
                    </Col>
                    <Col lg={2} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            Exp : 24-06-2024
                        </p>
                    </Col>
                    <Col lg={2} className="m-2" style={{borderRadius: "10px", backgroundColor: "var(--next-white)"}}>
                        <p className="p-1 m-1 text-center" >
                            Document
                            <ArrowLineDown style={{marginLeft: "10px"}} size={25} />
                        </p>          
                    </Col>
                </Row>
            </div>
            {showForm && 
                (<div className='flex p-5 align-items-center overlayBackdrop' onClick={() => setShowForm(false)} style={{ marginLeft: "80px", width: "100%", height: "100%"}}>
                 <div className='flex p-5 ' onClick={(e) => e.stopPropagation()} style={{borderRadius: "30px", marginLeft: "100px",marginTop: "50px", backgroundColor: "var(--custom-white)",width: "80%", height: "80%"}}>
                <h2 style={{fontSize: "30px", fontWeight: "bold" }}>
                    Transit Pass Application Form</h2>
                <p>Fill the form with all information for your route details</p>
                <Row>
                    <Form className='d-flex formContainer'  >
                        <Col lg={6} className='m-1'>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Starting point</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <MapPin size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                        <Form.Control 
                                            // id="inlineFormInputGroup" 
                                            placeholder="" 
                                            value={searchTermStart}
                                            onChange={(e) => setSearchTermStart(e.target.value)}
                                        />
                                        {showSearchResultsStart && searchTermStart && (
                                           <ul className="searchResultsList">
                                                {searchResultsStart.slice(0, 10).map(destination => (
                                                    <li key={destination.name} 
                                                        style={{cursor: "pointer", padding: "5px 10px"}} 
                                                        onClick={() => handleSelectDestinationStart(destination.name)}
                                                        >
                                                        {destination.region} - {destination.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize: "18px", fontWeight: "bold"}}>Start Date</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>
                                        <CalendarPlus size={20} color="#00000a" weight="bold" />
                                        </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className="form-control"
                                            dateFormat="MMMM d, yyyy"
                                        />
                                    <Form.Control id="inlineFormInputGroup" placeholder="September 19, 2024" />
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
                                        <Form.Control 
                                            id="inlineFormInputGroup" 
                                            placeholder="" 
                                            value={searchTermEnd}
                                            onChange={(e) => setSearchTermEnd(e.target.value)}
                                            />
                                          {showSearchResultsEnd && searchTermEnd && (
                                                <ul className="searchResultsList">
                                                {searchResultsEnd.slice(0, 10).map(destination => (
                                                    <li key={destination.name} 
                                                        style={{cursor: "pointer", padding: "5px 10px"}} 
                                                        onClick={() => handleSelectDestinationEnd(destination.name)}
                                                        >
                                                        {destination.region} - {destination.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
                            
                            <Row className='d-flex m-4 p-1 justify-content-center align-content-center'>
                                <Button className='m-1' onClick={handleClearForm} style={{border: "1px solid var(--darkish-green)", width: "9rem", borderRadius: "22px", color: "var(--darkish-green)", backgroundColor: "var(--next-white)"}}>clear</Button>
                                <Button className='m-1' onClick={handleSaveForm} style={{border: "0px", width: "9rem", borderRadius: "22px", color: "var(--whitish-green)", backgroundColor: "var(--darkish-green)"}}>Save</Button>
                            </Row>
                         </Col>
                    </Form>
                 </Row>
                </div>
            </div>
            )}
            {/* <FooterSpe/> */}
        </div>
    )
}

export default Application
















