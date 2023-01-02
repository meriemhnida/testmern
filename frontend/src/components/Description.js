import React from 'react'
import { Row, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import products from '../products_'
const Description = () => {
  const{id}= useParams()
  const product = products.find((p) => p._id === id)
  return (
    <>
    <Link className='btn btn-light my-3' to='/'> Go Back </Link>
    <Row>
        <Col><Image src={'../'+product.image} alt={product.name} fluid /></Col>
        <Col> 
        <ListGroup variant="flush">
                <ListGroup.Item>{product.name}</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
                <ListGroup.Item>{product.brand}</ListGroup.Item>
                <ListGroup.Item>{product.category}</ListGroup.Item>
                <ListGroupItem variant="danger"> {product.price}</ListGroupItem>
             
       </ListGroup></Col>
        <Col>
        <ListGroup>
             <ListGroup.Item>
                 <Row> 
                    <Col>Price:</Col>
                     <Col> 
                     <strong>{product.price} Dh</strong> 
                     </Col> 
                     </Row>
                     </ListGroup.Item> 
                     <ListGroup.Item> 
                        <Row>
                         <Col>Status:</Col> 
                         <Col> {(product.countInStock > 0) ? 'In Stock' : 'Out Of Stock'}  </Col>
                         </Row>
                         <Row>
                         <Col>Quantité:</Col> 
                         <Col> {product.countInStock}  </Col>
                         </Row>
                        </ListGroup.Item>
                        </ListGroup>
                        </Col>
                            
    </Row>
    </>
    

  )
}

export default Description