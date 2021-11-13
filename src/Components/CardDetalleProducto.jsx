import React from "react"
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
function CardDetalleProducto (props){
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
              
            </Card.Body>
          </Card>
        )
      
    
    
    
}
export default CardDetalleProducto