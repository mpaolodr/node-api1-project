// implement your API here

// import express and db
const express = require("express");
const Users = require("./data/db.js");

// create server
const server = express();

// middleware
server.use(express.json());

// view all users
server.get("/api/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json({ message: "No users found" });
    });
});

// port
const port = 8000;
server.listen(port, () => {
  console.log(`\n ** Server listening on port: ${port} \n`);
});
