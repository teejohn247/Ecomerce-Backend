import express from 'express';
import createProducts from '../controllers/CreateProducts';
import deleteProduct from '../controllers/deleteProduct';
import DeleteUser from '../controllers/DeleteUser';
import editUser from '../controllers/EditUser';
import getAllProducts from '../controllers/getAllProducts';
import getAllUsers from '../controllers/getAllUsers';
import GetProduct from '../controllers/GetProduct';
import getUser from '../controllers/getUser';
import stats from '../controllers/Stats';
import updatedProduct from '../controllers/updateProduct';
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
router.get('/stats', auth, stats);
router.post('/createproduct', auth, createProducts);
router.put('/editproduct/:id', auth, updatedProduct);
router.delete('/deleteproduct/:id', auth, deleteProduct);
router.get('/allproducts', auth, getAllProducts);
router.get('/getproduct/:id', auth, GetProduct);












export default router;