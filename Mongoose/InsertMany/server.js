const mongoose = require("mongoose");

// create connection
// create database
mongoose
  .connect("mongodb://localhost:27017/db__02", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connection created successfully");
  })
  .catch((err) => {
    console.log("The connection err is ", err);
  });

// create schema for collections

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

// crete collection

const Product = mongoose.model("Product", productSchema);

// create document
const document = async () => {
  try {
    const prod1 = new Product({
      name: "book",
      qty: 20,
    });

    const prod2 = new Product({
      name: "pen",
      qty: 20,
    });

    const prod3 = new Product({
      name: "pencil",
      qty: 20,
    });

    const prod4 = new Product({
      name: "sharpner",
      qty: 20,
    });

    const prod5 = new Product({
      name: "rubber",
      qty: 20,
    });

    const prod6 = new Product({
      name: "copy",
      qty: 20,
    });

    const result = await Product.insertMany([
      prod1,
      prod2,
      prod3,
      prod4,
      prod5,
      prod6,
    ]);
    console.log(result);
  } catch (err) {
    console.log("The error of document is", err);
  }
};

document();
