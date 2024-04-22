// imoprt React


import sectionline from  "../../assets/Line29.svg";


import '../../custom-colors.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


import Eddie from  "../../assets/20221223_125407_remastered.jpg";
import hellen from  "../../assets/hellen.jpg";
// import george from  "../../assets/george.jpg";


const Card3 = () => {

    return(
        <div className='' >
            <Container className=' mb-5 '>
                <Row className=' mb-5 '>
                <div className=" flex  text-center p-3">
                    <p className=" d-flex justify-content-center text-center " style={{ fontSize: "15px", fontWeight: "bold" }}>Team</p>
                    <h1 className=" d-flex justify-content-center text-center " style={{ fontSize: "40px", fontWeight: "bold" }}>Meet Our Supportive team</h1>
                    <p className=" d-flex justify-content-center text-center " style={{ fontSize: "12px", fontWeight: "normal" }}>Innovative and creative minds to impact fast growing businesses </p>
                </div>
                <div className= "d-flex  justify-content-center   ">
                    <Card className= " justify-content-center " style={{ border: "3px solid var(--plain-white)", backgroundColor: "var(--next-white)", boxShadow: "5px 50px 50px rgba(0, 0, 0, 0.02)", borderRadius: "22px", width: "65rem", height: "20rem"}}>
                        <Row className='m-1 align-items-center '>
                            <Col className='d-flex flex-column align-items-center justify-content-center p-5 m-2'>
                                <div className='m-1' style={{ width: "9.8rem", height: "9.8rem", borderRadius: "50%", overflow: "hidden" }}> <img  src={hellen} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                <h1 style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}> Hellen Mziray</h1>
                                <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> Software Developer </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center p-5 m-2'>
                                <div className='m-1' style={{ width: "9.8rem", height: "9.8rem", borderRadius: "50%", overflow: "hidden" }}> <img  src={Eddie} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                <h1 style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}> Edson Kuzengwa</h1>
                                <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> Software Developer </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center p-5 m-2'>
                                <div className='m-1' style={{ width: "9.8rem", height: "9.8rem", borderRadius: "50%", overflow: "hidden" }}> <img  src={Eddie} alt="" className="  " style={{ width: "100%", height: "100%", objectFit: "cover"}}/> </div>
                                <h1 style={{ fontWeight: "bold", color: "var(--darkish-green)", fontSize: "20px"}}> George Mollel</h1>
                                <p style={{ fontWeight: "normal", color: "var(--darkish-green)", fontSize: "15px"}}> Software Developer </p>
                            </Col>
                        </Row>
                    </Card>
                </div>
                </Row>
                <Row className="mb-5">
                    <img  src={sectionline} alt="" className="sectionline  "/>
                </Row>

            </Container>

        </div>
    )

}

export default Card3