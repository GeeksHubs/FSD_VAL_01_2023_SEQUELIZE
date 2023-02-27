const productController = require('../controllers/productController');
const router = require('express').Router();

router.post('/products', productController.createProduct)
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProductById)

module.exports = router;