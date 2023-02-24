const express = require('express');
const { Product } = require('./models/index')
const db = require('./db.js');
require('dotenv').config()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

app.post('/products', async(req, res) => {
    // Recuperamos la informacion a traves de la req
    // const name = req.body.name;
    // const description = req.body.description;
    // const price = req.body.price;

    const { name, description, price } = req.body;

    const newProduct = {
        name: name,
        description: description,
        price: price
    }

    // Guardar la informacion
    const product = await Product.create(newProduct)

    return res.json(product)
})

app.get('/products', async(req, res)=> {
    const products = await Product.findAll();

    return res.json(products);
})

app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findByPk(productId)

    return res.json(product);
})

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
