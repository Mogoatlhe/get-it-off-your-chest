var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "sample message 1",
    user: "sampleUser1",
    added: new Date(),
  },
  {
    text: "sample message 2",
    user: "sampleUser2",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "GIOYC", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

module.exports = router;
