import { Image, Container, Row, Col } from "react-bootstrap";
import MiLogo from "../Components/MiLogo";
import MenuUser from "../Components/MenuUser";
import React from "react";
function HomePage() {
  return (
    <div>
      <Container fluid="md">
      <MenuUser/>
        <Row>
          <Col><MiLogo/></Col>
        </Row>
        <Row className="justify-content-xl-bottom" style={{paddingTop:"30px"}}>
            <Col>
               <h4>Trabajo práctico Módulo 3, Unidad 2</h4>
            </Col>
        </Row>
      </Container>
    
    </div>
  );
}
export default HomePage;
