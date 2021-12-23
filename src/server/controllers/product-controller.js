const Product = require('../models/produce-model')

class ProductController {
    async getProduct(req, res, next) {
        try {
          const productSave = new Product({artNo:121212, price: 121212})
          await productSave.save();
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ProductController();