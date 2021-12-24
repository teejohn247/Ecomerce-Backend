import Order from '../model/Order';


const getOrder = async(req,res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
}
export default getOrder;