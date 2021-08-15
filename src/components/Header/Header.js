import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../images/2.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" style={{height: '140px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/offers">Offers</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;