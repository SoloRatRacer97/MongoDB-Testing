const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: true,
            min: 0
      },
      catagory: {
            type: String,
            lowercase: true,
            enum: ['fruit', 'vegtables', 'dairy', 'fungi']
      }
})


const Product = mongoose.model('Product', productsSchema)

module.exports = Product;
