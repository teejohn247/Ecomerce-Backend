
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import User from '../model/User';
import utils from '../config/utils';
import bcrypt from 'bcrypt';



dotenv.config();

//REGISTER
const userRegister = async (req, res) => {

  try {
    const { username, email, password } = req.body;
    console.log(username, email, password)

    let user = await User.findOne({ email });
    console.log(user);

    if (user) {
        res.status(400).json({
            status: 400,
            error: 'This email address already exists'
        })
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    console.log(hashed)

    user = new User({
        username: username,
        email: email,
        password: hashed,
    });
    console.log(user);

    await user.save();
    const token = utils.encodeToken(user.id, user.name, user.email)
    console.log(token);
    res.status(201).json({
        status: 201,
        token,
        msg: "success"
    })
} catch (err) {
    res.status(500).json({
        status: 500,
        err: 'server error'
    })
}

}

export default userRegister;
