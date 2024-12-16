const path = require('node:path')
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require('compression');
const dotenv = require("dotenv");
const Poem = require('./models/poem');
const poemRoutes = require("./routes/poems");

dotenv.config();

// Environment Variables
const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URI;

// MongoDB Connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Express Server
const app = express();
app.use(compression());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");


app.use("/poems", poemRoutes);

// Root Route 
app.get('/', (req, res) => { 
  res.render('index'); 
});

// Home Route
app.get('/home', (req, res) => { 
  res.render('index'); 
});

// Search route
app.get("/search", async (req, res) => {
  const query = req.query.query;
  try {
    const poemsByTitle = await Poem.find({ title: new RegExp(query, "i") });
    const poemsByAuthor = await Poem.find({ author: new RegExp(query, "i") });
    res.render("search", { query, poemsByTitle, poemsByAuthor });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// Listen to the PORT
const server = app.listen(PORT, () => {
  console.log(`Server is running on port \`${PORT}\``);
});

module.exports = { app, server };
