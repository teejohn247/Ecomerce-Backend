import express from 'express';
import createCart from '../controllers/CreateCart';
import createOrder from '../controllers/CreateOrder';
import createProducts from '../controllers/CreateProducts';
import deleteCart from '../controllers/DeleteCart';
import deleteOrder from '../controllers/DeleteOrder';
import deleteProduct from '../controllers/deleteProduct';
import DeleteUser from '../controllers/DeleteUser';
import editUser from '../controllers/EditUser';
import getAllCarts from '../controllers/GetAllCarts';
import getAllOrders from '../controllers/GetAllOrders';
import getAllProducts from '../controllers/getAllProducts';
import getAllUsers from '../controllers/getAllUsers';
import getOrder from '../controllers/GetOrder';
import GetProduct from '../controllers/GetProduct';
import getUser from '../controllers/getUser';
import GetUserCart from '../controllers/GetUserCart';
import monthlyIncome from '../controllers/MonthlyIncome';
import stats from '../controllers/Stats';
import updateCart from '../controllers/UpdateCart';
import updateOrder from '../controllers/UpdateOrder';
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
router.post('/createproduct', adminAuth, createProducts);
router.put('/editproduct/:id', adminAuth, updatedProduct);
router.delete('/deleteproduct/:id', adminAuth, deleteProduct);
router.get('/allproducts', auth, getAllProducts);
router.get('/getproduct/:id', auth, GetProduct);
router.get('/getusercart/:id', auth, GetUserCart);
router.get('/getallcart', auth, getAllCarts);
router.post('/createcart', auth, createCart);
router.delete('/deletecart', auth, deleteCart);
router.put('/updatecart/:id', auth, updateCart);
router.post('/createorder', auth, createOrder);
router.delete('/deleteorder', auth, deleteOrder);
router.get('/getallorder', auth, getAllOrders);
router.get('/getorder/:id', auth, getOrder);
router.get('/monthlyIncome', auth, monthlyIncome);
router.get('/updateorder', auth, updateOrder);









export default router;