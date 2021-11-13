import React from "react";
import {Modal, Spinner} from "react-bootstrap"
function Loading(props) {
  const {text} = props
  return (
    <>
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <p style={{ margin: "20px auto 20px auto", height: "50px" }}>
          {" "}
          <Spinner animation="border" /> { text || "Cargando..."}
        </p>
      </Modal>
    </>
  );
}
export default Loading;
