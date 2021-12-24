import Order from '../model/Order';


const getAllOrders = async(req,res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
}
export default getAllOrders;