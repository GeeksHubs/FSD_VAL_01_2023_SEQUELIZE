const commentController = require('../controllers/commentController');
const router = require('express').Router();

router.post('/comments', commentController.createComment)
router.get('/comments/:id', commentController.getCommentById)

module.exports = router;