const productController = require('../controllers/productController');
const router = require('express').Router();

router.post('/products', productController.createProduct)

module.exports = router;