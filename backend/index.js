const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: 'running',
  });
});

app.listen("3000");
