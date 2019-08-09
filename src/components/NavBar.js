import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import DropdownNav from './DropdownNav';

const NavBar = () =>{

    return(
  <Navbar bg="dark" expand="lg" variant ="dark">
      <div className="container">
    <Navbar.Brand to="/dashboard"><img src="/img/logo1.png" width="42" height="42"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
        <NavLink className="nav-link" to="/campaigns">Campaigns</NavLink>
        </Nav>
        <DropdownNav/>
    </Navbar.Collapse>
      </div>
 
</Navbar>
    )
}

export default NavBar;