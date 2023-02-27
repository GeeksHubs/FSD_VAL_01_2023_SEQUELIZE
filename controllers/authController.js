const { User } = require('../models');

const authController = {};


authController.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await User.create(
            {
                name: name,
                email: email,
                password: password,
                role_id: 1
            }
        )

        return res.json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authController;