import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa6";



export const About = () => {
  return (
    <section id='about'>
      <Container fluid style={{height:'400px',backgroundImage:'url(img/34.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
      <center>
          <h1 style={{color:'white',paddingTop:'5rem',fontSize:'4rem',fontFamily: 'Arial, Helvetica, sans-serif'}}>About Us</h1>
          <div class='content' style={{color:'white',display:'inline-block'}}>
            <a href='#' style={{color:'white',textDecoration:'none',margin:'0 1rem auto'}}>Home <FaArrowRightLong 
            style={{marginLeft:'1rem'}}/></a>
            <a href='#' style={{color:'white',textDecoration:'none',margin:'0 1rem auto'}}>About <FaArrowRightLong 
            style={{marginLeft:'1rem'}}/></a>
            <a href='/service'  style={{color:'white',textDecoration:'none'}}>Service</a>
          </div>
        </center>
      </Container>
      <Container fluid style={{height:'auto'}}>
        <Row>
          <Col lg={6} style={{height:'auto',padding:'1rem'}}>
            <img src='img/34.jpg' style={{height:'360px',width:'100%'}}/>
          </Col>
          <Col lg={6} style={{height:'auto',padding:'2rem'}}>
            <center>
              <h3 style={{color:'gray',fontFamily:' "Lucida Console", "Courier New", monospace'}}>Some About Us</h3>
            </center>
               <p  style={{color:'gray',fontFamily:' "Lucida Console", "Courier New", monospace',padding:' 0 4rem'}}>
                   Lorem ipsum dolor sit amet, consectetur adip iscing elit. Ut wisi
                    enim ad minim veniam, qui laore nostrud ctetur adipiscing elit,
                     sed do eiusmod exerci tation wisi enim met cins.
               </p>
               <h5  style={{color:'gray',fontFamily:' "Lucida Console", "Courier New", monospace',fontStyle:'italic'}}>By <br></br>
                 Royal
               </h5>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{height:'auto'}}>
        <Row>
          <Col lg={4} style={{height:'auto',padding:'1rem'}}>
            <img src='img/32.jpeg' style={{height:'100%',width:'100%'}} />
          </Col>
          <Col lg={4} style={{height:'400px',padding:'1rem'}}>
             <img src='img/35.jpeg' style={{height:'100%',width:'100%'}} />
          </Col>
          <Col lg={4} style={{height:'auto'}}>
             <h2 style={{color:'gray',textAlign:'center'}}>Our Services</h2>
              <Stack gap={3} style={{padding:'2rem'}}>
                <div className='p-2'><FaRegStar  style={{fontSize:'1.5rem',color:'skyblue',marginRight:'5px'}} />
                Professional dental services 24/7
                </div>
                <div className='p-2'><FaRegStar  style={{fontSize:'1.5rem',color:'skyblue',marginRight:'5px'}} />
                Oral and maxillofacial surgery
                </div>
                <div className='p-2'><FaRegStar  style={{fontSize:'1.5rem',color:'skyblue',marginRight:'5px'}} />
                  Cosmetic dentistry Services
                </div>
                <div className='p-2'><FaRegStar  style={{fontSize:'1.5rem',color:'skyblue',marginRight:'5px'}} />
                   Dental public health Insuranc
                </div>
              </Stack>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid style={{height:'auto'}}>
        <Row>
          <Col lg={4} style={{height:'auto'}}>
            <Container fluid style={{height:'75px',width:'75px'}}>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}  style={{paddingTop:'2rem'}}>
                  <FaTooth style={{color:'skyblue',fontSize:'2rem'}}/>
                </Col>
                <Col lg={4}></Col>
              </Row>
            </Container>
            <h4 style={{textAlign:'center',color:'gray'}}>
              Daily Prevention
            </h4>
            <p style={{textAlign:'center',color:'gray'}}>
               Lorem ipsum dolor sit aiet wisi enim adit minim veniam
            </p>
          </Col>
          <Col lg={4} style={{height:'auto'}}>
          <Container fluid style={{height:'75px',width:'75px'}}>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}  style={{paddingTop:'2rem'}}>
                  <FaTooth style={{color:'skyblue',fontSize:'2rem'}}/>
                </Col>
                <Col lg={4}></Col>
              </Row>
            </Container>
            <h4 style={{textAlign:'center',color:'gray'}}>
              Teeth Whitening
            </h4>
            <p style={{textAlign:'center',color:'gray'}}>
               Lorem ipsum dolor sit aiet wisi enim adit minim veniam
            </p>
          </Col>
          <Col lg={4} style={{height:'auto'}}>
          <Container fluid style={{height:'75px',width:'75px'}}>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}  style={{paddingTop:'2rem'}}>
                  <FaTooth style={{color:'skyblue',fontSize:'2rem'}}/>
                </Col>
                <Col lg={4}></Col>
              </Row>
            </Container>
            <h4 style={{textAlign:'center',color:'gray'}}>
              Teeth Braces
            </h4>
            <p style={{textAlign:'center',color:'gray'}}>
               Lorem ipsum dolor sit aiet wisi enim adit minim veniam
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
