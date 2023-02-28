const productController = require('../controllers/productController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

router.post('/products', verifyToken,productController.createProduct)
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProductById)
router.delete('/products/:id', verifyToken, productController.deleteProductById)
router.put('/products/:id', verifyToken, productController.updateProductById)

module.exports = router;