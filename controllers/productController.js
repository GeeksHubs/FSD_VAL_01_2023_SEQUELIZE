const { Product } = require("../models");

const productController = {};

productController.createProduct = async (req, res) => {
    try {
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
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = productController;
