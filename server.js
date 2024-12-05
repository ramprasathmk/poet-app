const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const dotenv = require("dotenv");
const Poem = require('./models/poem');
const poemRoutes = require("./routes/poems");
const authRoutes = require("./routes/auth");

dotenv.config();

// Environment Variables
const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_LOCAL_URL;

// MongoDB Connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Passport Configuration
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Authentication logic here
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Find user by ID logic here
});

// Express Server
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/poems", poemRoutes);
app.use("/auth", authRoutes);

// Root route 
app.get('/', (req, res) => { 
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

// Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
}

// Listen to the PORT
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
