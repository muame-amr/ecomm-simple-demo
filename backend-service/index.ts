import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Product } from "./product";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce", {
    authSource: "admin",
    user: "root",
    pass: "root",
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.post("/product/", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  const savedProduct = await Product.create(newProduct);
  res.send(eval(savedProduct));
  console.log("Product saved to the database!");
});

app.get("/product/", async (req, res) => {
  const productList = await Product.find();
  // res.send(JSON.stringify(productList));
  res.send(eval(productList));
});

app.put("/product/:id", async (req, res) => {
  const product_id = req.params.id;
  const updatedProduct = await Product.findByIdAndUpdate(product_id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  res.send(eval(updatedProduct));
  console.log("Product updated successfully!");
});

app.delete("/product/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndDelete(product_id);
  res.send("Product deleted!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
