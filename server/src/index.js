const express = require("express");
const app = express();
app.use(express.json());
const connection = require("./db/connection");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/user");
app.use(userRoute);
const roomRouter = require("./routes/room")
app.use(roomRouter)
connection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
