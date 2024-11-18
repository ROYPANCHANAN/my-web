 import React from 'react';
 import {Container, Row, Col, Button} from 'react-bootstrap';
 import { FaYoutube } from "react-icons/fa6";
 import { FaFacebookF } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa6";
 import { FaTwitter } from "react-icons/fa6";
 import { FaLinkedinIn } from "react-icons/fa6";



 export const Footer = () => {
          return (
            <section id='Footer'>
             <Container fluid  id='footer' style={{height:'300px',padding:'2rem',border:'1px solid gray'}}>
               <Row>
                <Col lg={3} style={{height:'auto'}}>
                  <h4 style={{color:'gray'}}>Contact Us :-</h4>
                  <h3 style={{color:'gray'}}>Ph :- +91 7890654321 </h3>
                  <a href='#top' style={{color:'gray'}}>info@demo.com</a>
                  <br></br>
                  <br></br>
                    <a href='#youtube'><FaYoutube style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/></a>
                    <a href='#facebook'><FaFacebookF style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/></a>
                    <a href='#instagram'><FaInstagram style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/></a>
                    <a href='#twitter'><FaTwitter style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/></a>
                    <a href='#in'><FaLinkedinIn style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/></a>
                </Col>
                <Col lg={3} style={{height:'auto'}}>
                 
                  <h4 style={{color:'gray'}}>Our Address :-</h4>
                  <h6 style={{color:'gray'}}>
                    12/A S.B. Line, Kol:-12
                  </h6>
                  <h6 style={{color:'gray'}}>
                    W.B. -  INDIA
                  </h6>
                </Col>
                <Col lg={3} style={{height:'auto'}}>
                  <h4 style={{color:'gray'}}>Consulting hours</h4>
                  <h6 style={{color:'gray'}}>On 10 a.m - 5.00 p.m. Weekdays</h6>
                  <h6 style={{color:'gray'}}>On 10 a.m - 12 noon Saturday</h6>
                </Col>
                <Col lg={3} style={{height:'auto'}}>
                  <h4 style={{color:'gray'}}>Subscribe Our Newsletter</h4>
                  <p>
                  Stay up to date with our latest news, updates and special offers.
                  </p>
                  <div class='container' style={{height:'auto'}}>
                    <form action='action_page.php' method='post'>
                        <label for='label'></label>
                        <input type='email' id='email' placeholder='Your email address.' style={{border:'1px solid gray',marginBottom:'10px'}}></input>
                        <br></br>
                      <Button variant="light" type='submit' value='submit'>Submit</Button>
                    </form>
                  </div>
                </Col>
               </Row>
            </Container>
            </section>
          )
 }

 export default Footer;

 