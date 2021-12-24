import User from '../model/User';

const getAllUsers = async(req,res) => {
    try{
        const user = await User.find().select('-password');
        if(!user){
            res.status(404).json({
                status:404,
                msg:'No user Found'
            })
            return
        }
        res.status(200).json(
            user
        )
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }

}
export default getAllUsers;