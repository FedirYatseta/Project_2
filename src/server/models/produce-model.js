const {Schema, model} = require('mongoose')


const ProductsSchema = new Schema({
    artNo: {type:String, unique:true, required:true},
    price: {type:Number, required: true},
    oldPrice: {type: Number },
    size: {type: Number},
    amount: {type: Number},
    color:{type: String}
})


module.exports = model("Product", ProductsSchema);