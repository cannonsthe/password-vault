import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="info" expand="bg">
      <Navbar.Brand as={Link} to="/">
      <h5 className="text-center mb-1">Your Personal File storage</h5>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
        <h5 className="text-center mb-1">Profile</h5>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
