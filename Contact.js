import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import './style.css';




export const Contact = () => {
  return (
    <section id='contact'>
      <Container fluid>
        <Row>
          <Col lg={4} style={{height:'300px',padding:'0rem'}}>
            <img src='img/22.jpeg' alt='img' style={{height:'300px',width:'100%'}} />
          </Col>
          <Col lg={8} style={{height:'300px',padding:'0rem'}}>
            <center>
              <h1 style={{color:'gray',paddingTop:'5%'}}>
                Just Touch Us <br></br> & <br></br> Book Your an Appointment
              </h1>
              <br></br>
              <p style={{color:'gray',fontSize:'25px'}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              </p>
            </center>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col lg={4} style={{height:'auto'}}>
            <Container fluid style={{height:'auto',padding:'0rem'}}>
              <center>
                <h2 style={{color:'gray'}}>Our Address:-</h2>
                <br></br>
                <h5 style={{color:'gray'}}>
                  Contact Us Directly:-
                </h5> 
                <br></br>
                <Stack gap={4}>
                  <div className='p-1' style={{color:'gray',fontSize:'15px'}}>
                    <FaMapMarkerAlt style={{color:'gray',fontSize:'2rem',marginRight:'1rem'}} />
                    12A S.N. Road,<br></br> Kol-12, W.B. INDIA.
                  </div>
                  <div className='p-2'  style={{color:'gray',fontSize:'15px'}}>
                    <FaPhoneVolume style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/>+91 2323232323
                  </div>
                  <div className='p-3'  style={{color:'gray',fontSize:'15px'}}>
                    <FaEnvelope  style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/>test@gmail.com
                  </div>
                  <div className='p-4'   style={{color:'gray',fontSize:'15px'}}>
                  <CgWebsite style={{color:'gray',fontSize:'1.5rem',marginRight:'1rem'}}/>www.web.com
                  </div>
                </Stack> </center>
            </Container>
          </Col>
          <Col lg={8} style={{height:'auto'}}>
            <Container fluid style={{height:'auto'}}>
              <form action="http://192.168.1.104:3001/action_page.php" 
              method="POST" 
              encType="application/x-www-form-urlencoded">
                <label htmlFor='name'>Name:-</label>
                <input type='text' id='name' name='name' placeholder='Your name...'/>
                <label htmlFor='phone'>Phone No:-</label>
                <input type='text' id='phone' name='phone' placeholder='Your phone number...' />
                <label htmlFor='email'>E-mail:-</label>
                <input type='text' id='email' name='email' placeholder='Your email...'  />
                <label htmlFor='time'>Select Time:-</label>
                <select id='time' name='time' style={{width:'100%',padding:'8px',marginBottom:'15px',border:'1px solid #ccc',borderRadius:'5px'}}>
                  <option value='10 am - 12 noon'>
                    10 am - 12 noon
                  </option>
                  <option value='10 am - 12 noon'>
                    12 noon - 15 pm
                  </option>
                  <option value='10 am - 12 noon'>
                    15 pm - 17 pm
                  </option>
                </select>
                ​<label htmlFor="date">Appointment date:</label>
                <input type="date" id="date" name="date" 
                  style={{width:'100%',padding:'12px',border:'1px solid gray',resize:'vertical'}}
                />
                 ​<label htmlFor="comment">Type of Appointment:</label>
                <textarea  id="comment" name="comment" rows='5'
                  style={{width:'100%',padding:'12px',border:'1px solid gray',resize:'vertical'}}
                ></textarea>
                <br></br>
                <input type='submit' value='Submit' style={{background:'blue',color:'white',padding:'12px 20px',border:'none',
                  borderRadius:'4px',cursor:'pointer',marginTop:'1rem',borderRadius:'5px'}} class='hover-bg-dark text-light'/>
              </form>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{padding:'2rem'}}>
        <center>
          <h2 style={{color:'gray'}}>Our Location</h2>
          <br></br>
          <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
              className='w-100'
              style={{ border: '0',height:'400px' }}
              loading='lazy'
            >
            </iframe>
        </center>
      </Container>
    </section>
  )
}

export default Contact;
