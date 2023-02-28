const { User, Favorite } = require("../models")

const userController = {};

userController.getUserFavorites = async (req, res) => {
    try {
        const userId = req.userId;

        const userFavorites = await User.findByPk(
            userId,
            {
                attributes: {
                    exclude: ["password"]
                },
                include: {
                    all: true
                }
            }
        );

        if (!userFavorites) {
            return res.send('User Not found')
        }

        return res.json(userFavorites);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

userController.createFavorites = async (req, res) => {
    try {
        const { product_id } = req.body;
        const user_id = req.userId;

        const newProdutFavorite = await Favorite.create(
            {
                product_id: product_id,
                user_id: user_id
            }
        )

        return res.json(newProdutFavorite);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.userId

        const updateUSer = await User.update(
            {
                name: name
            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUSer) {
            return res.send('User not updated')
        }

        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;