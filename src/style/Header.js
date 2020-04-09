import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Logo from "./edusys-logo.png";

class Header extends Component {
    constructor(props){
        super(props);
    }
     render() {
        return (
           <Navbar collapseOnSelect expand="lg" fixed={this.props.position}>
               <img className="App-logo" src={Logo}/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto header-links">
                    {/*<Nav.Link href="#school">School</Nav.Link>
                    <Nav.Link href="#class">Class</Nav.Link>
                    <Nav.Link href="#teacher">Teacher</Nav.Link>
                    <Nav.Link href="#student">Student</Nav.Link>
                    <Nav.Link href="#course">Course</Nav.Link>*/}
                    {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                */}</Nav>
                <Nav>
                    <Nav.Link href="#my-account">Account</Nav.Link>
                    <Nav.Link eventKey={2} href="#sign-out">
                        Sign out
          </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }

}

export default Header;