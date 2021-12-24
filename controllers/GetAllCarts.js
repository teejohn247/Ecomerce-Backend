import Cart from '../model/Cart';

const getAllCarts = async(req,res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch (err) {
        res.status(500).json(err);
      }
}
export default getAllCarts;