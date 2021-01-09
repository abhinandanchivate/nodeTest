// all users related work will be routed to users.js
// here we need to take a router object
// but to get the router object we need to an express module?
const express = require("express");

const router = express.Router();

// when we will collect the data in our router with post
// method then that data should be stored to the DB.

const User = require("../model/UserModel");
// we rcvd router object

// @route GET api/users/test
// @Desc tests the users route
// @access public

router.get("/test", (req, res) => {
  res.json({ msg: "hello from users" });
});

// register user
// this post method should bring the data from client using
// request object

router.post("/register", (req, res) => {
  console.log("user register called successfully");
  res.json({ msg: "user registered successfully" });
});
// login user

// get current user details

module.exports = router;
