const express = require('express');
const cors = require('cors');
const db = require('./db.js');
require('dotenv').config()

const productRoutes = require('./views/productRoutes');
const authRoutes = require('./views/authRoutes')
const commentRoutes = require('./views/commentRoutes')
const userRoutes = require('./views/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRoutes);
app.use(authRoutes);
app.use(commentRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    return res.send("Bienvenido a mi app")
})

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
