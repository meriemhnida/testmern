const express= require('express')
const products= require('./data/products')
const  Product = require("./model/Product");
const bodyParser = require('body-parser');
const app= express()
var cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/save', (req, res) => {
  const data = req.body;
  console.log(data);
    res.send({ message: 'Product saved successfully' });
  });

app.get('/list_products',(req,res)=>
{
   // Select all products
Product.find((error, products) => {
    if (error) {
      console.error(error);
    } else {
      console.log(products);
    }
  });
    res.json(products)
})

app.get('/product/:id', (req,res)=>{

    const product= products.find((p)=> p._id== req.params.id)
    res.json(product)
})

app.listen(7000,()=>{
    console.log("Server started and running in port 7000")
})