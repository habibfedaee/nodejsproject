const express = require("express");

const server = express();

server.get("/hello", (req, res) => {
  res.json("hello, there");
});

const port = process.env.PORT || 9000; // to use whatever port# heroku gives

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
