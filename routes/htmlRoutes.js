const express = require("express");
const router = express.Router();

router.get("/index.html", (req, res) => { 
    console.log(req);
    console.log(res);
})

router.get("/notes.html", (req, res) => { });

router.get("*", (req, res) => { })

module.exports = router;