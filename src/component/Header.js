import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    const handlePayment = () => {
        console.log("" + "is working");
    };
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg xs md" collapseOnSelect>
        <Navbar.Brand>
          <img src="images/image2.png" className="logo_nav"/> 
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <NavDropdown title="Pages">
              <NavDropdown.Item href="#pages/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="#pages/eventsdetails">
                Events Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#pages/joinus">Join Us</NavDropdown.Item>
            </NavDropdown>
            <div className="style-button">
            <Button variant="danger" size="md" active className="donate-button" onClick={handlePayment}>
                 Make A Donation
            </Button>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
