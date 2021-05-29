const mongoose = require("mongoose");

// connection
// create database
mongoose.connect("mongodb://localhost:27017/db_one", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// model
// create collection
const Product = mongoose.model("Product", ProductSchema);

// create document or insert
// const penProducts = new Product({
//   name: "pen",
//   qty: 10,
//   price: 20,
// });

// penProducts.save();

const document = async () => {
  try {
    const penProducts = new Product({
      name: "pencil",
      qty: 10,
      price: 20,
    });

    const result = await penProducts.save();
    console.log(result);
  } catch (err) {
    console.log("error found", err);
  }
};

document();

