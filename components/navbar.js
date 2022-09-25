import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar className="nav-bar" bg="white" expand="lg" sticky="top">
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
              <img
                className="navbar-icon"
                src="/linkedin-nav.png"
                alt="linkedin icon"
              />
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/abdulwadoodfaazli"
            >
              <img
                className="navbar-icon"
                src="/github-nav.png"
                alt="github icon"
              />
            </Nav.Link>
            <Nav.Link
              className="navbar-link"
              rel="noopener noreferrer"
              href="mailto: abwadood01@gmail.com, awaf2001@connect.hku.hk"
            >
              <img
                className="navbar-icon"
                src="/mail-nav.png"
                alt="mail icon"
              />
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
