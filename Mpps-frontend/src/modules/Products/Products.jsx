// import React from "react";
// import "./style.css"
import '../../custom-colors.css';

// imported icons
import { TreePalm, Leaf, Tree, TreeEvergreen } from "@phosphor-icons/react";

// imported user-defined components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// imported pictures
import Truck from "../../assets/truckpic.svg";

// imported react bootstrap components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Products = () => {

    return(
        <div>
            <NavBar/>
            <div className="flex  justify-content-center" >
              <Col lg={12} className=" " >
                <Row className=' '>
                    <div className="m-5 flex justify-content-center align-items-center d-flex" style={{position: "", width: "90%", height: "20%", borderRadius: "1px", overflow: "hidden" }}>
                            <img src={Truck} className='justify-content-center align-items-center'  style={{marginTop: "50px", width: "100%", height: "100%", borderRadius: "30px", objectFit: "cover"}}/>
                        </div>
                        <div className='flex m-1 p-2' style={{ position: "absolute",top: "250px",left: "90px", borderRadius: "22px", boxShadow: "-5px 50px 50px rgba(0, 0, 0, 0.1)", backgroundColor: "var(--next-white)", width: "18rem", height: "5.8rem"}}>
                                <h1 className='p-1' style={{fontSize: "30px", fontWeight: "bold", margin: "0px"}}>Products</h1>
                                <span className='p-1' style={{fontSize: "20px", fontWeight: "normal"}}>Home/Products</span>
                        </div>
                   </Row>
                <Row className='m-3 d-flex'>
                    <p className=" text-center" style={{fontSize: "40px", fontWeight: "bold"}}>Our supported products </p>
                   <Row className='p-2 m-2 d-flex flex ' style={{backgroundColor: "var(--plain-white)", borderRadius: "22px"}}>
                        <Col lg={2} className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderLeft: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--primary-green)", borderRadius: "14px"}} >
                            <TreePalm className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                            <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                        </Col>
                        <Col lg={10} className='text-start  p-4'>
                            <p>wood pile</p>
                        </Col>
                    </Row>
                    <Row className='p-2 m-2 d-flex flex ' style={{backgroundColor: "var(--plain-white)", borderRadius: "22px"}}>
                        <Col lg={2} className=' align-items-center  m-2 ' style={{ width: "5rem", height: "5rem", borderBottom: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                            <Leaf className=' m-1 ' size={45} weight="bold" style={{ color: 'var(--whitish-green)'}}  />
                            <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                        </Col>
                        <Col lg={10} className='text-start  p-4'>
                            <p>timber</p>
                        </Col>
                    </Row>
                    <Row className='p-2 m-2 d-flex flex ' style={{backgroundColor: "var(--plain-white)", borderRadius: "22px"}}>
                        <Col lg={2} className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderBottom: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--dark-blue)", borderRadius: "14px"}} >
                            <Tree className=' m-1' size={45} weight="bold" color='var(--whitish-green)' />
                            <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                        </Col>
                        <Col lg={10} className='text-start  p-4'>
                            <p>soft wood</p>
                        </Col>
                    </Row>
                    <Row className='p-2 m-2 d-flex flex ' style={{backgroundColor: "var(--plain-white)", borderRadius: "22px"}}>
                        <Col lg={2} className='align-items-center  m-2' style={{ width: "5rem", height: "5rem", borderRight: "0px solid var(--whitish-green)",boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                            <TreeEvergreen className='m-1 ' size={45} weight="bold" color='var(--whitish-green)' />
                            <span className='m-0  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "11px"}}>Soft wood</span>
                        </Col>
                        <Col lg={10} className='text-start  p-4'>
                            <p>hard wood</p>
                        </Col>
                    </Row>
                 </Row>
              </Col>  
            </div>
            <Footer/>
        </div>
    )
}

export default Products











