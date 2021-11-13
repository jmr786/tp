import React from "react";
import { Alert } from "react-bootstrap";

function NotFound() {
  return (
    <>
      <Alert variant="danger" >
        <Alert.Heading>404 Página no encontrada</Alert.Heading>
        <p>
          La página que está buscando no está disponible o no se encuetra
        </p>
      </Alert>
    </>
  );
}
export default NotFound;
