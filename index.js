const express = require('express');
const db = require('./db.js');
require('dotenv').config()

const productRoutes = require('./views/productRoutes');
const authRoutes = require('./views/authRoutes')
const commentRoutes = require('./views/commentRoutes')

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(authRoutes);
app.use(commentRoutes);

const PORT = process.env.PORT || 4000;

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
