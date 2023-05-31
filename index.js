const express = require("express");

const server = express();

const port = process.env.port || 9000; // to use whatever port# heroku gives

server.get("/hello", (req, res) => {
  res.json("hello, there");
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
