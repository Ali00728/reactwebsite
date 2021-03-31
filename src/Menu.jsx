import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  const [men, setmen] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setmen(true)
    }
    else {
      setmen(false)
    }

  }
  window.addEventListener('scroll', changeColor);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar className={men ? "p-0 fixed-top col-lg-10 mx-auto menu active1" : "p-0 fixed-top col-lg-10 mx-auto menu"} expand="lg">
              <Navbar.Brand  ><img src="images/logo.png" className="img-fluid " width="130" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <NavLink exact to="/" activeClassName="menuactive" className="nav-link ">Home</NavLink>
                  <NavLink to="/services"  activeClassName="menuactive" className="nav-link">Services</NavLink>
                  <NavLink to="/marketing" activeClassName="menuactive" className="nav-link">Marketing</NavLink>
                  <NavLink to="/about" activeClassName="menuactive" className="nav-link">About Us</NavLink>
                  <NavLink to="/contact" activeClassName="menuactive" className="nav-link">Contact</NavLink>

                </Nav>

              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>

    </>

  )
}
export default Menu