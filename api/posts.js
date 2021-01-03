// all users related work will be routed to users.js
// here we need to take a router object
// but to get the router object we need to an express module?
const express = require("express");

const router = express.Router();
// we rcvd router object

// @route GET api/users/test
// @Desc tests the users route
// @access public

router.get("/test", (req, res) => {
  res.json({ msg: "hello from posts" });
});

module.exports = router;
