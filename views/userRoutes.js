const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/users/favorites/:id', userController.getUserFavorites)

module.exports = router;