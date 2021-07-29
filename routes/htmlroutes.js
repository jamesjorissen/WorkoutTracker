const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/exercises", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});




module.exports = router;


