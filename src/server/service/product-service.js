const productModel = require('../models/produce-model')

class ProductService {

    async getProduct() {
        try {
         productModel.getProduct.create(artNo, price, oldPrice, size, amount, color) 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ProductService
