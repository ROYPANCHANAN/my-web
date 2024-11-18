import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { TbDental } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import { FaArrowRightLong } from "react-icons/fa6";


export const Home = () => {

  const tags = [
    
  ];

  return (
    <section id='home'>
      <div id='diagonal'
        style={{
          width:'60%',
          height:'700px',
          backgroundImage:'url(img/1.jpg)',
          float:'right',
          borderLeft:'200px solid white',
          borderTop:'700px solid transparent',
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundAttachment:'fixed',
        }}></div>
        <Row>
          <Col lg={12}>
            <Container style={{height:'700px',float:'left',paddingTop:'6rem'}}>
              <center>
                <h2 style={{color:'gray'}}>DENTAL CURE CENTER</h2>
                <br></br>
                <div class='content' style={{color:'gray',display:'inline-block'}}>
                  <a href='#' style={{color:'gray',textDecoration:'none',margin:'0 1rem auto'}}>Home <FaArrowRightLong 
                  style={{marginLeft:'1rem'}}/></a>
                  <a href='/about'  style={{color:'gray',textDecoration:'none'}}>About</a>
                </div>
                </center>
                <br></br>
                <p style={{color:'gray',marginTop:'2rem'}}>
                  Lorem ipsom dolor dit amet, consectetur adipisicing elit.
                  Quis similique architecto ea dolorum quasi nemo placeat
                  saepe fugit doloreim modi inventore dolore nesciunt
                  repellendus, enim suscipit odit doloribus, hic maiorese
                  fuga sapiente tempora at! Ex, recusandae dicta nisi 
                  necessitatibus, vitae eos, labore dolorum dolore laborum
                  laoriosam magni hic similique excepturi?
                </p>
              <Button variant="primary">Get Start</Button>
            </Container>
          </Col>
        </Row>
        <br></br>
      <Container fluid style={{height:'auto',backgroundImage:'url(img/8.jpg)',backgroundSize:'cover',backgroundPosition:'center',
        width:'100%'}}>
          <div className='content' style={{width:'150px',height:'150px',borderRadius:'100%',float:'left',border:'2px solid lightblue',
          padding:'1.5rem'}}>
             <img src='img/7.jpg' alt='img' style={{height:'100px',width:'100px'}}/>
          </div>
          
          <div class="content" style={{height:'100px',width:'100px',borderRadius:'100%',backgroundColor:'lightgrey',float:'right',padding:'15px'}}>
            <p style={{textAlign:'center',fontSize:'12px'}}>LOOK AHEAD TO THE DENTIST!</p>
          </div>
          <br></br>
          <Container fluid   style={{height:'auto',width:'100%',marginTop:'4rem'}}>
            <Row>
              <Col lg={4} style={{height:'auto'}}>
                <img src='img/9.jpg' alt='img' style={{height:'100%',width:'250px',rotate:'-12deg'}} />
              </Col>
              <Col lg={4} style={{height:'auto'}}>
                <img src='img/4.jpg' alt='img' style={{height:'100%',width:'250px',rotate:'15deg'}} />
              </Col>
              <Col lg={4} style={{height:'auto'}}>\
                <img src='img/15.jpg' alt='img' style={{height:'100%',width:'250px',rotate:'45deg'}} />
              </Col>
            </Row>
          </Container>
          
          <Container fluid style={{height:'auto',width:'100%'}}>
            <Row>
              <Col lg={6}>
               <img src='img/14.jpg' alt='img' style={{height:'100%',width:'80%',rotate:'15deg'}} />
              </Col>
              <Col lg={6}>
                 <img src='img/6.jpg' alt='img' style={{height:'250px',width:'70%',rotate:'25deg'}} />
              </Col>
            </Row>
          </Container>
          
          <Container fluid style={{height:'auto',width:'100%',marginTop:'2rem'}}>
          <Row>
            <Col lg={4} style={{height:'auto'}}>
              <img src='img/10.jpg' alt='img' style={{height:'200px',rotate:'-2deg',width:'80%'}} />
            </Col>
            <Col lg={4} style={{height:'auto'}}> 
               <img src='img/11.jpg' alt='img' style={{height:'200px',rotate:'0deg'}} />
            </Col>
            <Col lg={4} style={{height:'auto'}}>
               <img src='img/12.jpg' alt='img' style={{height:'200px',rotate:'-5deg'}} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{height:'auto',backgroundImage:'url(img/17.jpg)',backgroundSize:'cover',backgroundPosition:'center',
        backgroundAttachment:'fixed',marginTop:'4rem'}}>
        <h2 style={{color:'gray',textAlign:'center'}}>Our Offer</h2>
        <h4 style={{color:'gray',textAlign:'center',fontStyle:'italic'}}>for service your whole family member(s)</h4>
        <br></br>
        <Stack direction='horizontal' gap={3}>
          <div className='p-2' style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'white',marginRight:'1.5rem'}}/>
            Full-service dentistry
            <br></br>
            <p style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
          <div className='p-2'  style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'pink',marginRight:'1.5rem'}}/>
            Accepted Insurance
            <br></br>
            <p   style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
          <div className='p-2' style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'lightblue',marginRight:'1.5rem'}}/>Care fast
            <p   style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
        </Stack>
        <Stack direction='horizontal' gap={3}>
          <div className='p-2' style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'green',marginRight:'1.5rem'}}/>
                Expert Doctor(s)
            <br></br>
            <p style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
          <div className='p-2'  style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'indigo',marginRight:'1.5rem'}}/> Modern technology
            <br></br>
            <p   style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
          <div className='p-2' style={{color:'white',fontSize:'2rem'}}>
            <TbDental style={{fontSize:'2rem',color:'skyblue',marginRight:'1.5rem'}}/> Science-based
            <p   style={{fontSize:'16px'}}>
              Lorem ipsum dolor sit aconsectetur<br></br> adipisicing elit, 
              sed do eiusmod te mpor incididaliqua.<br></br> Ut enim ad minim 
              veniam suis sa dolor eius utas.
            </p>
          </div>
        </Stack>
        <br></br>
        <div className='content' style={{height:'auto'}}>
          <Row>
            <Col lg={4}></Col>
            <center>
            <Col lg={4} style={{height:'auto'}}>
              <div class='content' style={{height:'4rem',display:'inline-block',paddingLeft:'0rem',width:'100%'}}>
                <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStar /></a>
                <a  style={{fontSize:'2rem',color:'yellowgreen',marginRight:'1rem'}}><FaStarHalf /></a>
              </div>
              <br></br>
              <h4 style={{color:'white'}}>More than 700 four & half star Smile</h4>
              <div class='content-title- underline' style={{height:'2px',backgroundColor:'white'}}></div>
            </Col>
            </center>
            <Col lg={4}></Col>
          </Row>
        </div>
      </Container>

      <br></br>
      <Container fluid style={{height:'auto',backgroundImage:'url(img/14.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
        <h2 style={{textAlign:'center',color:'gray',paddingTop:'2rem'}}>OUR DENTAL BLOGS ARE SAYS !</h2>
        <br></br>
        <Container fluid style={{height:'auto',padding:'1rem'}}>
          <Row>
            <Col lg={3} style={{height:'auto'}}>
              <Card style={{height:'auto',width:'100%'}}>
                <Card.Body>
                  <center>
                    <img src='img/9.jpg' style={{height:'150px'}} />
                  </center>
                  <br></br>
                    <a class='bg-primary text-light' variant='light' style={{marginTop:'1rem',textDecoration:'none'}}>
                      16 JUNE 2023
                    </a>
                    <br></br>
                    <h5 style={{color:'gray'}}>Our Hilight: Three reasons to Consider Dental Impliments.</h5>
                    <br></br>
                    <p  style={{color:'gray'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididaliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.
                    </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} style={{height:'auto'}}>
              <Card style={{height:'auto'}}>
                <Card.Body>
                  <center>
                    <img src='img/1.jpg' style={{height:'150px'}} />
                  </center>
                  <br></br>
                  <a href="#" class='bg-primary text-light' variant='light' style={{marginTop:'1rem',textDecoration:'none'}}>
                    16 JUNE 2022
                  </a>
                  <br></br>
                  <h5 style={{color:'gray'}}>Dental Implements - Restore an entire <strong>Smile</strong> in
                        One Day!
                  </h5>
                  <br></br>
                  <p  style={{color:'gray'}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      sed do eiusmod tempor incididaliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} style={{height:'auto'}}>
              <Card style={{height:'auto'}}>
                <Card.Body>
                  <center>
                    <img src='img/39.jpeg' style={{height:'150px'}} />
                  </center>
                  <br></br>
                  <a href="#" class='bg-primary text-light' variant='light' style={{marginTop:'1rem',textDecoration:'none'}}>
                    24 JULY 2024
                  </a>
                  <br></br>
                  <h5 style={{color:'gray'}}>In 5 Way improve your Dental <strong>Hygen</strong> Routine.
                  </h5>
                  <br></br>
                  <p  style={{color:'gray'}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      sed do eiusmod tempor incididaliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} style={{height:'auto'}}>
              <Card style={{height:'auto'}}>
                <Card.Body>
                  <center>
                    <img src='img/32.jpeg' style={{height:'150px'}} />
                  </center>
                  <br></br>
                  <a href="#" class='bg-primary text-light' variant='light' style={{marginTop:'1rem',textDecoration:'none'}}>
                    24 JULY 2024
                  </a>
                  <br></br>
                  <h5 style={{color:'gray'}}>Know your <strong>Interdental</strong> brush.
                  </h5>
                  <br></br>
                  <p  style={{color:'gray'}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      sed do eiusmod tempor incididaliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container fluid style={{height:'400px',backgroundImage:'url(img/15.jpg)',backgroundPosition:'center',backgroundSize:'cover',
        marginTop:'0.5rem'}}>
        <h2 style={{textAlign:'center',paddingTop:'10%',color:'white',fontSize:'4rem'}}>We can back your <strong>W</strong>hite 
        <strong>S</strong>mile again !</h2>
      </Container>
      <br></br>
      <div>
        <img src='img/1.jpg' alt="AI-generated image of a digital art" style={{width:'100%'}}/>
        <div className='tags' style={{backgroundColor:'#e0e0e0',padding:'4px 8px',margin:'4px',borderRadius:'4px',fontSize:'0.9rem'}}>
          {tags.map((tag, index) => (
            <span key={index} className='tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
