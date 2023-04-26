const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Mouse = require("./models/Mouse");

require("dotenv").config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Witaj na moim serwerze!");
});

mongoose.connect(
  "mongodb+srv://blackweeeed:Mm4ktgVVr30SK18X@cluster0.qx1myqy.mongodb.net/test"
);
// mongoose.connect(process.env.MONGO_URL);

/* const newDocument = new Mouse({
  name: "Razer Mouse Bungee V3",
  line: "mouse bungee",
  model: "mouse bungee v3",
  image:
    "https://assets3.razerzone.com/nLQsh-gbVYjI883qfAqrw7X0_OI=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe2%2Fh93%2F9094272483358%2FMouse%20Bungee%20V3%20-%20500x500.png",
  images: [
    "https://assets3.razerzone.com/1V7QwK-DYqU_lVm3mFzLuiDk41g=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhdf%2Fh95%2F9094274514974%2Fmouse-bungee-v3-1500x1000-5-20201022.jpg",
    "https://assets3.razerzone.com/K8u_wpSJk7ecCszl9WEN7Z_88Ds=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh85%2Fh98%2F9094274482206%2Fmouse-bungee-v3-1500x1000-6-20201022.jpg",
    "https://assets3.razerzone.com/A00Dw0Zy08Y_HNOf4me-9RV5faI=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh76%2Fh92%2F9094274613278%2Fmouse-bungee-v3-1500x1000-7-20201022.jpg",
  ],
  color: "Standard",
  description: "Ergonomic MMO Gaming Mouse for Left-Handed Users",
  descriptions: [
    "Drag-free cord control",
    "Rust-resistant spring arm",
    "Weighted base for stability",
  ],
  category: "Accessories",
  price: 39.99,
  new: false,
  exclusive: false,
});

(async () => {
  try {
    await newDocument.save();
    console.log("Dokument został zapisany do bazy danych");
  } catch (error) {
    console.log(error);
  }
})(); */

app.get("/getData", async (req, res) => {
  try {
    const data = await Mouse.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/mice", async (req, res) => {
  try {
    const data = await Mouse.find({ category: "Mice" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/accessories", async (req, res) => {
  try {
    const data = await Mouse.find({ category: "Accessories" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/getData/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Mouse.findById(id));
});

app.listen(4000);
