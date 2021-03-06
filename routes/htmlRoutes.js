const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

// router.get("/notes.html", (req, res) => { });

// router.get("*", (req, res) => { })

module.exports = router;