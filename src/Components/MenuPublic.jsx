import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import MiLogo from "./MiLogo"

function MenuPublic (){
   
   
        return(
            <>
                <Navbar expand="xl">
                    
                        <Navbar.Brand href="/"><MiLogo sizes="60px"/> Trabajo práctico </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                            <Nav.Link as={Link} to="/register">Registro</Nav.Link>
                            

                           
                        
                        </Nav>
                        </Navbar.Collapse>
                    
                    </Navbar>
               
            </>
        )
      
    
    
    
}
export default MenuPublic