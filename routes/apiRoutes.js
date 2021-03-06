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

// module.exports = (app) => {
//   app.get('/api/tables', (req, res) => res.json(tableData));

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

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
