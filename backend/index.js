const app = require("express")();
const cors = require("cors");
require('dotenv').config();
const connectDB = require('./db')

app.use(cors());

connectDB()

app.get("/", (req, res) => {
  res.json({
    status: 'running',
  });
});

app.listen("3000");
