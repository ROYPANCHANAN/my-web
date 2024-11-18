import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';


export const Service = () => {
  return (
    <section id='service'>
      <Container fluid style={{height:'400px',backgroundImage:'url(img/16.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <center>
          <h1 style={{color:'white',paddingTop:'5rem',fontSize:'6rem'}}>Our Service</h1>
          <div class='content' style={{color:'white',display:'inline-block'}}>
            <a href='#' style={{color:'white',textDecoration:'none',margin:'0 1rem auto'}}>Home <FaArrowRightLong 
            style={{marginLeft:'1rem'}}/></a>
             <a href='#' style={{color:'white',textDecoration:'none',margin:'0 1rem auto'}}>About<FaArrowRightLong 
              style={{marginLeft:'1rem'}}/></a>
            <a href='/contact'  style={{color:'white',textDecoration:'none'}}>Contact</a>
          </div>
        </center>
       </Container>
       <Container fluid style={{height:'auto',backgroundImage:'url(img/17.jpg)',backgroundSize:'cover',backgroundPosition:'center',
          backgroundAttachment:'fixed',marginTop:'0rem'}}>
          <h2 style={{color:'gray',textAlign:'center'}}>Our Offer</h2>
          <h4 style={{color:'gray',textAlign:'center',fontStyle:'italic'}}>for service your whole family member(s)</h4>
          <br></br>
           <Stack gap={3}>
            <Container fluid style={{height:'auto'}}>
              <Row>
                <Col lg={4} style={{height:'auto'}}>
                  <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'white'}}/>
                    Full-service dentistry
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
                <Col lg={4} style={{height:'auto'}}>
                  <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'pink'}}/>
                    Accepted Insuranc
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
                <Col lg={4} style={{height:'auto'}}> 
                <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'skyblue'}}/>
                    Care Fast
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container fluid style={{height:'auto'}}>
              <Row>
                <Col lg={4} style={{height:'auto'}}>
                  <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'white'}}/>
                    Expert Doctor(s)
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
                <Col lg={4} style={{height:'auto'}}>
                  <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'indigo'}}/>
                    Modern Technology
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
                <Col lg={4} style={{height:'auto'}}> 
                <div className='p-2' style={{fontSize:'2rem',color:'white'}}>
                    <TbDental style={{fontSize:'2rem',color:'skyblue'}}/>
                    Science-based
                    <br></br>
                    <p style={{color:'gray',fontSize:'15px'}}>
                      Lorem ipsum dolor sit aconsectetur adipisicing elit, 
                      sed do eiusmod te mpor incididaliqua. Ut enim ad minim 
                      veniam suis sa dolor eius utas.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Stack>            
          <div className='content' style={{height:'auto',marginTop:'2rem'}}>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4} style={{height:'auto'}}>
                <div class='content' style={{height:'6rem',display:'inline-block',paddingLeft:'6rem',width:'100%'}}>
                  <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                  <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                  <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                  <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                  <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStarHalf /></a>
                </div>
                <h4 style={{color:'white',textAlign:'center'}}>More than 700 four & half star Smile</h4>
                <div class='content-title- underline' style={{height:'2px',backgroundColor:'white'}}></div>
              </Col>
              <Col lg={4}></Col>
            </Row>
          </div>
        </Container>
        <Container fluid style={{height:'300px',backgroundImage:'url(img/15.jpg)',backgroundPosition:'center',backgroundSize:'cover',
           marginTop:'0rem'}}>
          <h2 style={{textAlign:'center',paddingTop:'10%',color:'white',fontSize:'4rem'}}>We can back your <strong>W</strong>hite <strong>S</strong>mile again !</h2>
        </Container>
    </section>
  );
}

export default Service;