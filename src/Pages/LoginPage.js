import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
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
import React from "react";
import Firebase from "../Config/Firebase";
import { useEffect } from "react";
import FrmGroup from "../Components/FrmGroup";
import MenuPublic from "../Components/MenuPublic";
import LoginImage from "../Components/Login/LoginImage";

function LoginPage() {
  const navigate = useNavigate();

  console.log("firebase", Firebase.firestore());
  function simulateNetworkRequest() {
    //PAra simular inicio de sesion
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [logueado, setLogueado] = useState(false); //Cuando el usuario se logueó correctamente
  const [isDisabled, setIsDisabled] = useState(false); //Hook para deshabilitar los inputs
  const [isError, setIsError] = useState(false)
  const [ingresando, setIngresando] = useState(false)
  const onSubmit = async (data) => {
    console.log("Inicio sesion", data);
     setIngresando(true)
        try{
            setIsDisabled(true)
            const responseUser = await Firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            if(responseUser.user.uid){
                const userInfo = await Firebase.db.collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                console.log("userInfo",userInfo.docs[0]?.data())
                setLogueado(true)
               
            }
        }catch(e){
            console.log("error",e)
            setIsDisabled(true)
            setIsError(true)
            setIngresando(false)

        }
  };

  useEffect(() => {
    if (logueado) {
      
     
        navigate("/logged"); // Una vez logueado ir a home page
      
    }
  }, [logueado]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container fluid="xs" >
        <MenuPublic/>
          <Navbar>
            <Container style={{borderBottom:"6px solid orange"}}>
              <Navbar.Brand ><h2>Ingresar al sistema</h2></Navbar.Brand>
            </Container>
          </Navbar>

          <Row style={{ border: "3px solid lightblue" ,  borderRadius: "10px", backgroundColor:"wheat"}}>
          <Row>
            <Col>
            <br />
            </Col>
          </Row>
          <Row >
            <Col md="auto">
              <LoginImage />
            </Col>
            <Col>
              <div>
                <FrmGroup
                  {...{
                    label: "@",
                    type: "email",
                    placeholder: "Email",
                    required: "true",
                    disabled:isDisabled,
                  }}
                  register={{ ...register("email") }}
                />
                <FrmGroup
                  {...{
                    label: "🔒",
                    type: "password",
                    minLength: "6",
                    required: "true",
                    placeholder: "Contraseña",
                    disabled:isDisabled,
                  }}
                  register={{ ...register("password") }}
                />
                <br />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-xl-center" >
            <Col>
            <Button variant="outline-primary" type="submit" disabled={isDisabled}>
              {ingresando ? (
                <span>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Ingresando...
                </span>
              ) : (
                "Ingresar"
              )}
            </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>
                Si no está registrado hágalo desde{" "}
                <Link to="/register">aquí</Link>{" "}
              </Form.Label>
            </Col>
          </Row>
          </Row>
        </Container>
      </Form>
      {isError? ( <Container>
      <Alert variant="danger" >
        <Alert.Heading>Error inicio de sesíon</Alert.Heading>
        <p>
          Usuario o contraseña incorrecta
        </p>
        <hr/>

        <Button variant="outline-primary" onClick={()=>{setIsDisabled(false); setIsError(false)}}>Entendido</Button>
      </Alert>
      </Container>):(<></>)}
    </>
  );
}
export default LoginPage;
