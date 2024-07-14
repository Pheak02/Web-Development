
//Chansovannmony Yoeun & Saing Sopheak
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

require("./routes/index")(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
