import Order from '../model/Order';


const deleteOrder = async(req,res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      } 
}
export default deleteOrder;