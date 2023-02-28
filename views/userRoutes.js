const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/users/favorites', verifyToken, userController.getUserFavorites)
router.post('/users/favorites', verifyToken, userController.createFavorites)

module.exports = router;