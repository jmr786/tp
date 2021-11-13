import React from "react"
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
function CardProducto (props){
        const {datos} = props
        console.log(props.datos)
    
        return(
            
            <Card style={{ width:"22rem", marginLeft:"auto", marginRight:"auto"}} >
            
            <Card.Body>
              <Card.Title>{datos.titulo}</Card.Title>
              <Card.Text>
                {datos.descripcion}
              </Card.Text>
              <hr/>
              <h5>$ {datos.precio}</h5>
              <Button variant="outline-primary" as={Link} to={"/logged/producto/"+datos.id}>Ver detalle</Button>
            </Card.Body>
          </Card>
        )
      
    
    
    
}
export default CardProducto