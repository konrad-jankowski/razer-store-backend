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
  name: "Razer BlackWidow V4 Pro ESL Edition",
  line: "blackwidow",
  model: "blackwidow v4",
  image:
    "https://assets3.razerzone.com/f_2bKVQ203wpJz8F-gzw8TkjuyI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhcf%2Fh0e%2F9479906000926%2Fbw-v4-pro-500x500.png",
  images: [
    "https://assets3.razerzone.com/dlZMD3KWQ5AhP3C1v6Fi4pe4rw0=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh74%2Fh37%2F9477488148510%2F230216-bw-v4-pro-1500x1000-1.jpg",
    "https://assets3.razerzone.com/dPp5HqughEV64GTDk8rFf2Vozms=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0a%2Fh37%2F9477488181278%2F230216-bw-v4-pro-1500x1000-2.jpg",
    "https://assets3.razerzone.com/-bA8X-KMwDK7nyyONuf8afhd4ps=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhcc%2Fh37%2F9477488115742%2F230216-bw-v4-pro-1500x1000-3.jpg",
    "https://assets3.razerzone.com/S8G6AHaWve7Tsh4NOLc-qMuqZ9U=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc9%2Fh3a%2F9477488050206%2F230216-bw-v4-pro-1500x1000-4.jpg",
  ],
  color: "Green Switch",
  description: "Mechanical Gaming Keyboard with Razer Chroma™ RGB",
  descriptions: [
    "Razer™ Green Mechanical Switches (Clicky)",
    "Immersive Underglow and Per-Key Lighting",
    "Razer™ Command Dial and 8 Dedicated Macro Keys",
  ],
  category: "Keyboards",
  price: 229.99,
  new: true,
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
