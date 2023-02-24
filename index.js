const express = require('express');
const db = require('./db.js');
require('dotenv').config()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

db.then(()=>{
    //Starting server
        app.listen(PORT, ()=> console.log("Server on port " + PORT));
    })
    .catch((err)=> console.log(err.message));   
