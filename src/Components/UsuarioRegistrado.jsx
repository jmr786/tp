import {Button} from "react-bootstrap"
import React from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router";
function UsuarioRegistrado() {
  const navigate = useNavigate()
  const handleClick= () =>{
      navigate("/login")
  }
  
  
  return (
    <>
      <Alert variant="success">
  <Alert.Heading>Usuario registrado</Alert.Heading>
  
  <hr />
  
   <Button variant="outline-primary" onClick={handleClick}>Iniciar sesión</Button>
  
</Alert>
    </>
  );
}
export default UsuarioRegistrado;
