import express from 'express';
import DeleteUser from '../controllers/DeleteUser';
import editUser from '../controllers/EditUser';
import getAllUsers from '../controllers/getAllUsers';
import getUser from '../controllers/getUser';
import userLogin from '../controllers/userLogin';
import userRegister from "../controllers/userRegister";
import adminAuth from '../middleware/adminAuth';
import auth from '../middleware/auth';


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.put('/edituser', auth, editUser);
router.delete('/userdelete/:id', adminAuth, DeleteUser);
router.get('/user/:id', auth, getUser);
router.get('/users', auth, getAllUsers);





export default router;