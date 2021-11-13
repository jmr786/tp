
import { InputGroup, FormControl } from "react-bootstrap";
import React from "react";
function FrmGroup(props) {
  const pr = props;

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{pr.label}</InputGroup.Text>
        <FormControl aria-describedby="basic-addon2" {...pr} {...pr.register} />
      </InputGroup>

      {/*} <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{pr.label}</Form.Label>
                    <Form.Control
                      {...pr}
                      {...pr.register}
                      
                    />
</Form.Group> */}
    </>
  );
}
export default FrmGroup;
