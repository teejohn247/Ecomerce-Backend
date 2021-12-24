import Cart from '../model/Cart';

const deleteCart = async(req,res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}
export default deleteCart;