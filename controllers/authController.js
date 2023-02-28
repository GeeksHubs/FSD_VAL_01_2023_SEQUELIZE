const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {};


authController.register = async (req, res) => {
    try {
        //recuperar info de la peticion
        const { name, email, password } = req.body;

        // tratar esa informaion
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create(
            {
                name: name,
                email: email,
                password: encryptedPassword,
                role_id: 1
            }
        )

        return res.json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authController;