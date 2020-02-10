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
      res.status(500).json({
        errorMessage: "The users information could not be retrieved."
      });
    });
});

// view user by id
server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "The user information could not be retrieved." });
    });
});

// create user
server.post("/api/users", (req, res) => {
  const userData = req.body;

  if (userData.bio && userData.name) {
    Users.insert(userData)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "There was an error while saving the user to the database"
        });
      });
  } else {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

// port
const port = 8000;
server.listen(port, () => {
  console.log(`\n ** Server listening on port: ${port} \n`);
});
