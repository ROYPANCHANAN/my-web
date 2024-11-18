
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





export const NavigationBar = () => (
  <Navbar expand='lg' className='bg-primary' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='/'   style={{fontSize:'20px',padding:'10px 0 0 25px'}}>
          <Container style={{width:'50px',height:'50px',padding:'10% 0 0 7px'}}>
            <img src='img/25.jpeg' alt='img' style={{height:'45px',width:'45px',borderRadius:'100%'}}/>
          </Container></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                  <Nav.Item>
                    <Nav.Link href='/' style={{fontSize:'17px',textDecoration:'none'}}>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/about'   style={{fontSize:'17px',textDecoration:'none'}}>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/service'   style={{fontSize:'17px',textDecoration:'none'}}>Service</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/contact'   style={{fontSize:'17px',textDecoration:'none'}}>Contact</Nav.Link>
                  </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar> 
)

export default NavigationBar
