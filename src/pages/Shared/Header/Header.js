import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavItem,Button} from 'react-bootstrap';
import logo from '../../../images/logo/Online Health Service.png'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
    <NavItem>   <Link className="nav-link"   to="/"><img src={logo} width="100px" alt="" /></Link> </NavItem>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto">
      <NavItem >   <Link className="nav-link "   to="/home">Home</Link> </NavItem>
      <NavItem >   <Link className="nav-link "   to="/services">Our Services</Link> </NavItem >
      <NavItem >   <Link className="nav-link "   to="/doctors">Our Doctors</Link> </NavItem>
      <NavItem >   <Link className="nav-link "   to="/contact">Contact Us</Link> </NavItem>
        
      </Nav>
      <Nav className="ms-auto">
      <NavItem >   <Link className="nav-link "   to="/signup"><FontAwesomeIcon icon={faUser} /> Sign Up</Link> </NavItem>
      



      {user?.email ?
                            
                            <Button onClick={logOut} variant="light"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button> :
                            <Nav.Link as={Link} to="/signin"><FontAwesomeIcon icon={faUserCheck} /> Sign In</Nav.Link>}
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        <Navbar.Brand>
                            <img src={user.photoURL} width="40px" height="40px" className="rounded-circle" alt="" />
                        </Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;