import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-color ">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar-title">
            <img src={logo} alt="logo" />
            ExpertiseLink{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-section">
            <Link to="/HeroSection" className="navbar-elements">
              <h3>Home</h3>
            </Link>
            <Link to="/Skills" className="navbar-elements">
              <h3>Skills</h3>
            </Link>
            <Link to="/Contact" className="navbar-elements">
              <h3>Contact Us</h3>
            </Link>
            <Link to="/Documentation" className="navbar-elements">
              <h3>Documentation</h3>
            </Link>
          </Nav>
<<<<<<< HEAD
          <button className="btn navbar-btn">Login</button>
          <Link to="/Signup">
            <button className="btn navbar-btn">Signup</button>
          </Link>
=======
          <Link to="/Login"><button className="btn navbar-btn">Login</button></Link>
          <button className="btn navbar-btn">Signup</button>
          
>>>>>>> fa2807fc0edd87498f2e14a3b2e57be2ddf632aa
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
