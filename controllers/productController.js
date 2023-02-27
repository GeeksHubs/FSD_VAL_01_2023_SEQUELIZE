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

productController.getProducts = async(req, res)=> {
    const products = await Product.findAll();

    return res.json(products);
}

productController.getProductById = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findByPk(productId, {
        // solo nos trae las relaciones con comment
        // include: Comment,
        include: {all: true}
    });

    return res.json(product);
}

productController.deleteProductById = async(req, res) => {
    const productId = req.params.id;
    
    const deleteProduct = await Product.destroy({where: { id: productId}})

    return res.json(deleteProduct);
}

productController.updateProductById = async (req, res) => {
    const productId = req.params.id;

    const name = req.body.name;

    const updateProduct = await Product.update({name: name}, {where: {id: productId}})

    return res.json(updateProduct);
}

module.exports = productController;
