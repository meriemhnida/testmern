import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = ({product}) => {

  return (
    <Card className='my-3 p-3 rounded'>
    <Card.Img variant="top" src={product.image} />
   
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        
        {product.description}
      </Card.Text>
      <Button variant="primary" href={"/product/"+product._id}>Add to card</Button>
    </Card.Body>
  </Card>
  )
}

export default Product