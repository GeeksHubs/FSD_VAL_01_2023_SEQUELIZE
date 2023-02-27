const { Comment } = require('../models/index');

const commentController = {}

commentController.createComment = async (req, res) => {
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
}

commentController.getCommentById = async (req, res) => {
    const commentId = req.params.id;

    const comment = await Comment.findByPk(commentId, {
        include: {all: true}
    });

    return res.json(comment);
}

module.exports = commentController;

