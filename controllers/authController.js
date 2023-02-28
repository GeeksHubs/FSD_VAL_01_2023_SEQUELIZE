const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.send('Wrong Credentials')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send('Wrong Credentials')
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            }, 
            'secreto',
            { expiresIn: '2h'}
        );

        return res.json(token)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authController;