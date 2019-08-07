import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

import DropdownNav from './DropdownNav';

const NavBar = () =>{

    return(
  <Navbar bg="dark" expand="lg" variant ="dark">
      <div className="container">
    <Navbar.Brand href="/dashboard"><img src="/img/logo1.png" width="42" height="42"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
        <Nav.Link href="/campaigns">Campaigns</Nav.Link>
        </Nav>
        <DropdownNav/>
    </Navbar.Collapse>
      </div>
 
</Navbar>
    )
}

export default NavBar;