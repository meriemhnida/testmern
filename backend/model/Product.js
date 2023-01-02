const mongoose = require("mongoose");  
//test

// Se connecter à la base de données
const mongoDB="mongodb://127.0.0.1:27017/Ecommerce";
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;


//product schema 
const productSchema = new mongoose.Schema({

    name: String,
    image: String,
    description:  String,
    brand: String,
    category:  String,
    price: String,
    countInStock: String,
    rating: String,
    numReviews: String

})

const Product= new mongoose.model("Product", productSchema)
module.exports =Product