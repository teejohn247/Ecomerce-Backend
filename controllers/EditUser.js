import dotenv from 'dotenv';
import User from '../model/User';
import bcrypt from 'bcrypt';




dotenv.config();

const editUser = async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.payload.id })

        if (!user) {
            res.status(404).json({
                status: 404,
                error: 'No user Found'
            })
            return
        }
        console.log(req.body)
        await user.updateOne({
            username: req.body.username,
            email: req.body.email,
        }, user);
        res.status(200).json({
            status: 200,
            msg: "success"
        })
    }

    catch (err) {
        res.status(500).json({
            status: 500,
            err: 'server error'
        })
    }
}
export default editUser;