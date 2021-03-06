const express = require("express");
const router = express.Router();
const path = require("path");
const dbData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    res.readFile(path.join(__dirname, "../db/db.json"));
});

module.exports = router;

// // ROUTING
//   app.get('/api/tables', (req, res) => res.json(tableData));


//   app.post('/api/tables', (req, res) => {
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     } else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
