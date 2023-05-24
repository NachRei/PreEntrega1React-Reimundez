import React from 'react'
import Logo from './img/optica-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { FormGroup } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src={Logo} alt="Logo de Óptica Hawk" />
            Óptica Hawk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Lentes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Lentes de Receta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Lentes de Sol</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lentes de Contacto</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Accesorios</Nav.Link>
              <Nav.Link href="#home">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar