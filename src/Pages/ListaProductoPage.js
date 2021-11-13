import React, { useState, useEffect } from "react";
import CardProducto from "../Components/CardProducto";
import { Container, Row, Spinner, Col, Navbar, Modal } from "react-bootstrap";
import Firebase from "../Config/Firebase";
import MenuUser from "../Components/MenuUser";

import Loading from "../Components/Loading";
function ListaProductoPage() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function request() {
      try {
        const querySnapshot = await Firebase.db.collection("productos").get();
        if (querySnapshot.docs) {
          setProductos(querySnapshot.docs);
          setLoading(false);
        }
      } catch (e) {}
    }
    request();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Container fluid="xs">
          <MenuUser />

          <Navbar>
            <Container style={{ borderBottom: "6px solid orange" }}>
              <Navbar.Brand>
                <h2>Listado de productos</h2>
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Row
            style={{
              border: "3px solid lightblue",
              borderRadius: "10px",
              backgroundColor: "wheat",
            }}
          >
            <Row>
              <Col>
                <br />
              </Col>
            </Row>

            {productos.map((producto) => (
              <>
                <Row>
                  <Col>
                    <br />
                  </Col>
                </Row>

                <Row>
                  <Col className="justify-content-xs-center">
                    <CardProducto
                      datos={{ ...producto.data(), id: producto.id }}
                    />
                  </Col>
                </Row>
              </>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default ListaProductoPage;
