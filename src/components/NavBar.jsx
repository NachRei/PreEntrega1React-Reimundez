import React from 'react'
import Logo from './img/optica-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant='light' expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className='logo' src={Logo} alt="Logo de Óptica Hawk" />
            Óptica Hawk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
              <NavDropdown title="Lentes" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/category/lentes de receta">Lentes de Receta</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/category/lentes de sol">Lentes de Sol</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/category/lentes de contacto">Lentes de Contacto</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar