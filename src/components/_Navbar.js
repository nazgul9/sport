import React from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function _Navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img width={50} style={{borderRadius:"30px"}} src='https://static.izde.kg/service/236/201901100628512.jpg'/></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Barba">
                Эркин курош</Nav.Link>
            <Nav.Link as={Link} to="/FoodHall">Футзал</Nav.Link>
            <Nav.Link as={Link} to="/Aikido">Айкидо</Nav.Link>
            <Nav.Link as={Link} to="/Fitnes">Фитнес</Nav.Link>
            <Nav.Link as={Link} to="/BaleiBool">Волейбол</Nav.Link>
            <Nav.Link as={Link} to="/Address">Адрес</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default _Navbar;