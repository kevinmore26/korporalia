import { Navbar,Container,Nav } from "react-bootstrap";
import React from 'react'

export default function NavTop() {

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Korporalia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
