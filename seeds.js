const mongoose = require("mongoose");
const Product = require("./models/products");

mongoose
  .connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO has started");
  })
  .catch((err) => { 
    console.log("On no, a MONGO error");
    console.log(err);
  });


// const p = new Product({
//       name: 'Ruby grapefruit',
//       price: 1.99,
//       catagory: 'fruit'
// })

const seedProducts =  [
      {
            name: 'Apple',
            price: 1,
            catagory: 'fruit'
      },
      {
            name: 'Bannana',
            price: 3,
            catagory: 'fruit'
      },
      {
            name: 'Squash',
            price: 1.5,
            catagory: 'fruit'
      },
      {
            name: 'Watermelon',
            price: 6,
            catagory: 'fruit'
      },
      {
            name: 'Potatos',
            price: 1,
            catagory: 'vegtables'
      },
      {
            name: 'Carrots',
            price: 2,
            catagory: 'vegtables'
      },
      {
            name: 'Milk',
            price: 2,
            catagory: 'dairy'
      },
      {
            name: 'Milk with extra milk',
            price: 2,
            catagory: 'dairy'
      },
]

Product.insertMany(seedProducts)
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

