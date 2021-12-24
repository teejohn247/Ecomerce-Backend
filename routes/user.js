import express from 'express';
import editUser from '../controllers/EditUser';
import userLogin from '../controllers/userLogin';
import userRegister from "../controllers/userRegister";
import auth from '../middleware/auth';


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/edituser', auth, editUser);


export default router;