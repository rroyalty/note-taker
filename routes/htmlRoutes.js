const express = require("express");
const router = express.Router();
const path = require("path");

router.get("../public/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(req);
    console.log(res);
})

// router.get("/notes.html", (req, res) => { });

// router.get("*", (req, res) => { })

module.exports = router;