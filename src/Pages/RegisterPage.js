import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";


import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Spinner,
  Navbar,
 Alert,
} from "react-bootstrap";
import firebase from "../Config/Firebase";

import FrmGroup from "../Components/FrmGroup";
import MenuPublic from "../Components/MenuPublic";
import LoginImage from "../Components/Login/LoginImage";
import UsuarioRegistrado from "../Components/UsuarioRegistrado";
function RegisterPage() {
  

  console.log("firebase", firebase.firestore());
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registrado, setRegistrado] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false); //Hook para deshabilitar los inputs
  const [registrando, setRegistrando] = useState(false);
  const [passwordError, setPasswordError] = useState(false)
  const onSubmit = async (data) => {
    console.log("Registro", data);
    setIsDisabled(true);
    setRegistrando(true);
    console.log("data", data);
    if (data.password != data.repassword) {
      setPasswordError(true)
      setRegistrando(false)
      setIsDisabled(true)
      return
    }
    

    try {

      const responseUser = await firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      if (responseUser.user.uid) {
        setRegistrado(true);

        const document = await firebase.db.collection("usuarios").add({
          nombre: data.nombre,
          apellido: data.apellido,
          userId: responseUser.user.uid,
         
        });
        console.log(document)
      }
    } catch (e) {
      console.log("error", e.code);

      if (e.code === "auth/email-already-in-use") {
        setRegistrando(false);
        alert("El email esta registrado");
      }
    }
  };

  
    
 

  if (registrado) {
    return(
     <>
        <UsuarioRegistrado/>

    </>
    )
  } else {
    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <MenuPublic/>
          <Container fluid="xs">
            <Navbar>
              <Container style={{ borderBottom: "6px solid orange" }}>
                <Navbar.Brand>
                  <h2>Registro</h2>
                </Navbar.Brand>
              </Container>
            </Navbar>

            <Row
              style={{
                border: "3px solid lightblue",
                borderRadius: "10px",
                backgroundColor: "Thistle",
              }}
            >
              <Row>
                <Col>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <LoginImage />
                </Col>
                <Col>
                  <div>
                    <FrmGroup
                      {...{
                        label: "Nombre",
                        type: "text",
                        placeholder: "Su nombre",
                        required: "true",
                        disabled:isDisabled,
                       
                      }}
                     
                      register={{ ...register("nombre") }}
                    />
                    <FrmGroup
                      {...{
                        label: "Apellido",
                        type: "text",
                        placeholder: "Su apellido",
                        required: "true",
                        disabled:isDisabled,
                        
                      }}
                     
                      register={{ ...register("apellido") }}
                    />

                    <FrmGroup
                      {...{
                        label: "Email",
                        type: "email",
                        minLength: "6",
                        required: "true",
                        placeholder: "Email",
                        disabled:isDisabled,
                       
                      }}
                     
                      register={{ ...register("email") }}
                    />

                    <FrmGroup
                      {...{
                        label: "Contraseña",
                        type: "password",
                        minLength: "6",
                        required: "true",
                        placeholder: "Contraseña",
                        disabled:isDisabled,
                        
                      }}
                    
                      register={{ ...register("password") }}
                    />
                    <FrmGroup
                      {...{
                        label: "Repita Contraseña",
                        type: "password",
                        minLength: "6",
                        required: "true",
                        placeholder: "Contraseña",
                        disabled:isDisabled,
                      
                      }}
                    
                      register={{ ...register("repassword") }}
                    />
                    <br />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-xl-center">
                <Col>
                  <Button variant="outline-primary" type="submit" disabled={isDisabled}>
                    {registrando ? (
                      <span>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Registrando...
                      </span>
                    ) : (
                      "Registrarse"
                    )}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Container>
        </Form>
        {passwordError? ( <Container>
      <Alert variant="danger" >
        <Alert.Heading>Las contraseñas no coinciden</Alert.Heading>
        <hr/>

        <Button variant="outline-primary" onClick={()=>{setIsDisabled(false); setPasswordError(false)}}>Entendido</Button>
      
      </Alert>
      </Container>):(<></>)}
      </>
    );
  }
}
export default RegisterPage;
