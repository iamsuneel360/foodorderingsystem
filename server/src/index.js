const express = require("express");
const app = express();
app.use(express.json());
const connection = require("./db/connection");
require("dotenv").config();
const port = process.env.PORT;
const userRoute = require("./routes/user");
app.use(userRoute);
connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
