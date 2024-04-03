// import React from "react";

import '../../custom-colors.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import { Leaf } from "@phosphor-icons/react";
import { TreePalm } from "@phosphor-icons/react";
import { Tree } from "@phosphor-icons/react";
import { TreeEvergreen } from "@phosphor-icons/react";


const Card2 = () => {
 return (
    <div>
      <Container className=' mb-5 '>
         <Row>
            <div className=" flex  text-center p-3">
               <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>Products</p>
               <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>Our supported products</h1>
               <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>See what products we consider on application</p>
            </div>
            <div className='m-4'>
               <Row className=' '>
                  <Col>
                     <Card className= "d-flex align-items-center flex justify-content-center  p-2" style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.1)", borderRadius: "22px", width: "24rem", height: "24rem"}}>
                        <Row className='m-0'>
                           <div className=' align-items-center  m-4 ' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                              <Leaf className=' m-2 ' size={65} weight="bold" style={{ color: 'var(--whitish-green)'}}  />
                              <span className='m-2 text-center ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Wood pile</span>
                            </div>
                           <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--primary-green)", borderRadius: "14px"}} >
                              <TreePalm className='m-2 ' size={65} weight="bold" color='var(--whitish-green)' />
                              <span className='m-3  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Timber</span>
                           </div>
                        </Row>
                        <Row className='m-0'>
                           <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--dark-blue)", borderRadius: "14px"}} >
                              <Tree className=' m-2' size={65} weight="bold" color='var(--whitish-green)' />
                              <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Soft wood</span>
                           </div>
                           <div className='align-items-center  m-4' style={{ width: "7rem", height: "7rem", backgroundColor: "var(--darkish-green)", borderRadius: "14px"}} >
                              <TreeEvergreen className='m-2 ' size={65} weight="bold" color='var(--whitish-green)' />
                              <span className='m-1  ' style={{ fontWeight: "bold", color: "var(--whitish-green)", fontSize: "15px"}}>Hard wood</span>
                           </div>
                        </Row>
                     </Card>                   
                  </Col>
                  <Col className='m-5 p-3'>
                     <div>
                        <Row>
                           <h1 style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "30px"}}>Get Permit For</h1>
                        </Row>
                        <Row>
                           <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "20px"}}>
                              All species of wood and plantation products including wood piles, timber together with hard and soft wood
                           </p>
                           <Button className="m-2 " style={{ borderRadius: "50px", border: " 2px solid var(--primary-green)", backgroundColor: "var(--darkish-green)", color: "var(--whitish-green)", width: "10.25rem", height: "38px"}}>
                              See details
                           </Button>
                        </Row>
                     </div>
                   </Col>
               </Row>
            </div>
          </Row>
      </Container>

    </div>
 )

}

export default Card2