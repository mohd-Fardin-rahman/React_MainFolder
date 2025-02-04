import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ShopZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Cars">Cars</NavDropdown.Item>
              <NavDropdown.Item href="/bikes">Bikes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ ">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/Shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/watches">Watches</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
