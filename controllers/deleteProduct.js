import Product from '../model/Product';

const deleteProduct = async(req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}
export default deleteProduct;