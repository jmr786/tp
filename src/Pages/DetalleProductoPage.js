import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Firebase from "../Config/Firebase";
import Button from "react-bootstrap/Button";
import FrmGroup from "../Components/FrmGroup";
import { useForm } from "react-hook-form";
import CardDetalleProducto from "../Components/CardDetalleProducto";
import { useNavigate } from "react-router";
import { Form, Container, Row, Col, Navbar, Spinner } from "react-bootstrap";
import Loading from "../Components/Loading";
import MenuUser from "../Components/MenuUser";

function DetalleProductoPage() {
  //Modificar producto
 const navigate = useNavigate()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    setGuardando(true);
    setIsDisabled(true);
    console.log("data", data);
    try {
      const document = await Firebase.db.doc("productos/" + id).set(data);
      console.log("modificar", document);
      setGuardado(true);
    } catch (e) {
      console.log("error", e.code);
    }
  };

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [eliminando, setEliminando] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [eliminado, setEliminado] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function request() {
      try {
        const response = await Firebase.db.doc("productos/" + id).get();
        if (response) {
          setProducto(response);
          setLoading(false);

          setValue("titulo", response.data().titulo);
          setValue("precio", response.data().precio);
          setValue("descripcion", response.data().descripcion);
        }
      } catch (e) {}
    }
    request();
  }, [id]);
  const handleDelete = async () => {
    setEliminando(true);
    setIsDisabled(true);
    try {
      const document = await Firebase.db.doc("productos/" + id).delete();
      console.log(document);
      setEliminado(true);
    } catch (e) {}
  };

  if (eliminado) {
    navigate("/logged/listaproductos")
  }

  if (guardado) {
    navigate("/logged/listaproductos")
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container fluid="xs">
            <MenuUser />
            <Navbar>
              <Container style={{ borderBottom: "6px solid orange" }}>
                <Navbar.Brand>
                  <h2>Modificar producto</h2>
                </Navbar.Brand>
              </Container>
            </Navbar>

            <Row
              style={{
                border: "3px solid IndianRed",
                borderRadius: "10px",
                backgroundColor: "#89ABBA",
              }}
            >
              <Row>
                <Col>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <CardDetalleProducto datos={producto.data()} />
                  <Button variant="danger" onClick={handleDelete}>
                    Eliminar
                  </Button>
                </Col>
                <Col>
                  <FrmGroup
                    {...{ label: "Nombre", required: true, type: "text" }}
                    register={{ ...register("titulo") }}
                    disabled={isDisabled}
                  />
                  <FrmGroup
                    {...{ label: "Precio", type: "text", required: "true" }}
                    register={{ ...register("precio") }}
                    disabled={isDisabled}
                  />
                  <FrmGroup
                    {...{
                      label: "Descripcion",
                      type: "text",
                      required: "true",
                    }}
                    register={{ ...register("descripcion") }}
                    disabled={isDisabled}
                  />
                </Col>
                <Row>
                  <Col className="justify-content-xl-center">
                    <Button type="submit" variant="outline-primary">
                      {guardando ? (
                        <span>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Guardando...
                        </span>
                      ) : (
                        "Guardar"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Row>
            {eliminando ? <Loading text="Eliminando..." /> : <></>}
            {guardando ? <Loading text="Guardando..." /> : <></>}
          </Container>
        </Form>
      </>
    );
  }
}
export default DetalleProductoPage;
