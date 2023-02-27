const express = require('express');
const { Product, Comment } = require('./models/index')
const db = require('./db.js');
require('dotenv').config()

const productRoutes = require('./views/productRoutes');
const authRoutes = require('./views/authRoutes')

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(authRoutes);

const PORT = process.env.PORT || 4000;

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

app.post('/comments', async (req, res) => {
    try {
        //REcuperamos info a guardar
        const message = req.body.message;
        const productId = req.body.product_id;

        const newComment = await Comment.create({
            product_id: productId,
            message: message
        })

        return res.json(newComment);
    } catch (error) {
        return res.send(error.message);
    }
})

app.get('/comments/:id', async (req, res) => {
    const commentId = req.params.id;

    const comment = await Comment.findByPk(commentId, {
        include: {all: true}
    });

    return res.json(comment);
})



db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
