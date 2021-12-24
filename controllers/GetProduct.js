import Product from '../model/Product';

const GetProduct = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
}
export default GetProduct;