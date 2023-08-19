import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">CTF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Scoreboard</Nav.Link>
                <NavDropdown title="Challenges" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Web</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Crypto</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Network</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Misc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Pwnable</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Register</Nav.Link>
                <Nav.Link href="#">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;