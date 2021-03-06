const express = require("express");
const router = express.Router();
const path = require("path");
const dbData = require('../Assets/db/db.json');
const { v4: uuidv4 } = require('uuid');
const { fstat } = require("fs");

router.get("/notes", (req, res) => {
    res.json(dbData);
    });

router.post("/notes", (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    dbData.push(newNote);
    });

module.exports = router;
