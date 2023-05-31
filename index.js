const express = require("express");

const server = express();

server.use(express.json());

server.get("/hello", (req, res) => {
  res.json("hello, there");
});

server.use("*", (req, res) => {
  res.json({
    message: "API is UP!",
  });
});

const port = process.env.PORT || 9000; // to use whatever port# heroku gives

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
