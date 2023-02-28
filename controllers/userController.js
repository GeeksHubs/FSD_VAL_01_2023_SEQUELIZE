const { User } = require("../models")

const userController = {};

userController.getUserFavorites = async (req, res) => {
    try {
        const userId = req.params.id;

        const userFavorites = await User.findByPk(
            userId,
            {
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

module.exports = userController;