import dotenv from 'dotenv';
import User from '../model/User';

const DeleteUser = async(req, res) => {
    try{
        await User.deleteOne({_id: req.params.id});
        res.status(200).json({
            status:200,
            id: req.params.id,
            msg:'User Deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default DeleteUser;