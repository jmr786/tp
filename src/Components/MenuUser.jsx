import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import MiLogo from "./MiLogo";

function MenuUser() {
  return (
    <>
      <Navbar expand="xl">
        <Navbar.Brand href="/">
          <MiLogo sizes="60px" /> Trabajo práctico{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/logged/listaproductos">
              Lista de productos
            </Nav.Link>
            <Nav.Link as={Link} to="/logged/altaproducto">
              Alta de producto
            </Nav.Link>
            
           
           
             
            
          </Nav>
          <Nav>
          <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/">Cerrar sesión</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default MenuUser;
