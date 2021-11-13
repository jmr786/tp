import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FrmGroup from "../Components/FrmGroup";
import Button from "react-bootstrap/Button";
import Firebase from "../Config/Firebase";
import { Form, Container, Row, Col, Navbar, Spinner } from "react-bootstrap";
import MenuUser from "../Components/MenuUser";
import { useNavigate } from "react-router";
import Loading from "../Components/Loading";
function AltaProductoPage() {
  //console.log(firebase.db)
  
 const navigate = useNavigate()

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState(false);



  const onSubmit = async (data) => {
    console.log("data", data);
    setGuardando(true);
    setIsDisabled(true);
    try {
      const document = await Firebase.db.collection("productos").add(data);
      console.log(document);
      setGuardando(false)
      setGuardado(true)
    } catch (e) {
      console.log("error", e.code);
    }
  };



  if (guardado) {
    
      navigate("/logged/listaproductos")
  } 
  
  return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container fluid="xs">
            <MenuUser />

            <Navbar>
              <Container style={{ borderBottom: "6px solid orange" }}>
                <Navbar.Brand>
                  <h2>Alta de producto</h2>
                </Navbar.Brand>
              </Container>
            </Navbar>

            <Row
              style={{
                border: "3px solid lightblue",
                borderRadius: "10px",
                backgroundColor: "#DDE9C9",
              }}
            >
              <Row>
                <Col>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FrmGroup
                    {...{
                      label: "Titulo",
                      type: "text",
                      placeholder: "Título que tendrá el producto",
                      required: "true",
                      disabled: isDisabled,
                    }}
                    register={{ ...register("titulo") }}
                  />
                  <FrmGroup
                    {...{
                      label: "Precio",
                      type: "text",
                      placeholder: "Precio del producto",
                      required: "true",
                      disabled: isDisabled,
                    }}
                    register={{ ...register("precio") }}
                  />
                  <FrmGroup
                    {...{
                      label: "Descripcion",
                      type: "text",
                      placeholder: "Describa el producto",
                      required: "true",
                      disabled: isDisabled,
                    }}
                    register={{ ...register("descripcion") }}
                  />
                  <Row className="justify-content-xl-center">
                    <Col>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        disabled={isDisabled}
                      >
                        {guardando ? (
                          <span>
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{" "}
                            Guardando...
                          </span>
                        ) : (
                          "Guardar"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
            {guardando ? <Loading text="Guardando..." /> : <></>}
          </Container>
        </Form>
      </div>
    );
  }

export default AltaProductoPage;
