import {Row, Col} from 'react-bootstrap'
import  Product  from '../components/Product'
import React, { useState, useEffect } from 'react'
import axios from "axios"


const ProductList = () => {
  const[products, setProducts]=useState([])
  useEffect(()=>
  {
  const fetchProducts= async ()=>{
  const {data}= await axios.get(('http://localhost:7000/list_products'))
  setProducts(data)
  }
  fetchProducts()
  },[])
  

  return (
    <>
    <Row>
    {products.map((product) => (
      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={product} />
      </Col>
    ))}
  </Row>

);
   </>
  )
}

export default ProductList 