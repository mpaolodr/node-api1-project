// implement your API here

// import express and db
const express = require("express");
const Users = require("./data/db.js");

// create server
const server = express();

// middleware
server.use(express.json());

// port
const port = 8000;
server.listen(port, () => {
  console.log(`\n ** Server listening on port: ${port} \n`);
});
