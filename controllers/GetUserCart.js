import Cart from '../model/Cart';

const GetUserCart = async(req,res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
      } catch (err) {
        res.status(500).json(err);
      }
}
export default GetUserCart;