const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const userRoute = require("./routes/user");
app.use(userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
