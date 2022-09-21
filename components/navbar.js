import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import github from "/public/github.png";
import linkedin from "/public/linkedin.png";
import mail from "/public/mail.png";

function BasicExample() {
  return (
    <Navbar className="navbar" variant="light" bg="danger" expand="lg" sticky="top">
      <Container fluid>
      <Navbar.Brand className="navbar-text" href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbar-text" href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navbar-text" href="/education">
              Education
            </Nav.Link>
            <Nav.Link className="navbar-text" href="/projects">
              Projects
            </Nav.Link>
          </Nav>
          <Nav className="me-auto-2">
            <Nav.Link
              className="navbar-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/abdulwadood-faazli/"
            >
              <Image
                className="navbar-icon"
                src={linkedin}
                alt="linkedin icon"
                width="20px"
                height="20px"
              />
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/abdulwadoodfaazli"
            >
              <Image
                className="navbar-icon"
                src={github}
                alt="github icon"
                width="20px"
                height="20px"
              />
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              rel="noopener noreferrer"
              href="mailto: abwadood01@gmail.com, awaf2001@connect.hku.hk"
            >
              <Image
                className="navbar-icon"
                src={mail}
                alt="mail icon"
                width="20px"
                height="20px"
              />
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
