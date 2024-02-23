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
/* 
const newDocument = new Mouse({
  name: "Razer Iskur",
  line: "iskur",
  model: "iskur",
  image:
    "https://assets3.razerzone.com/y453D_RMc62OvR6krHZwpN0WBqo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh49%2Fh92%2F9151223103518%2Fiskur-black-500x500.png",
  images: [
    "https://assets3.razerzone.com/Jrd00_GtpNo3aGJJmxd-n0M2tBc=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh45%2Fh7a%2F9198275526686%2Fiskurblack-gallery-1500x1000-rsl5-1.jpg",
    "https://assets3.razerzone.com/3VvDifHliiskCvUKEjO6O1zjeow=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0d%2Fh70%2F9198275821598%2Fiskurblack-gallery-1500x1000-rsl5-2.jpg",
    "https://assets3.razerzone.com/zu7_aD_sMtRz3HSeRLkdipsju0s=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh54%2Fh80%2F9198275395614%2Fiskurblack-gallery-1500x1000-rsl5-3.jpg",
    "https://assets3.razerzone.com/bhDGuPs84s3u_7kIoHvt53VGg90=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhad%2Fh7d%2F9198275428382%2Fiskurblack-gallery-1500x1000-rsl5-4.jpg",
  ],
  color: "Black",
  description: "Gaming Chair with Built-in Lumbar Support",
  descriptions: [
    "Fully sculpted lumbar support ",
    "Multi-layered synthetic leather ",
    "High density foam cushions",
  ],
  category: "Chairs",
  price: 449.0,
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
app.get("/audio", async (req, res) => {
  try {
    const data = await Mouse.find({ category: "Audio" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/keyboards", async (req, res) => {
  try {
    const data = await Mouse.find({ category: "Keyboards" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/chairs", async (req, res) => {
  try {
    const data = await Mouse.find({ category: "Chairs" });
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

app.get("/products", async (req, res) => {
  const query = req.query.q;
  const products = await Mouse.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
      { color: { $regex: query, $options: "i" } },
    ],
  });
  res.json(products);
});

app.listen(20387, () => {
  console.log(`Serwer działa na porcie 20387`);
});
