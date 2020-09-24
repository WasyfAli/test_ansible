const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "APP WORKING FINE" });
});

app.listen(3000, () => console.log(`Server is running at port 3000`));
