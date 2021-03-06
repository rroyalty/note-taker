const express = require("express");
const router = express.Router();
const path = require("path");
const dbData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    res.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) console.log(err);
        console.log(data);
    });

    // fs.readFile(path.join(__dirname,'./data/notesData.json'), 'utf-8', (err, data) => {
    //     let newnotes = JSON.parse(data)
    //     // console.log(activeNote)
    //     // change this to 'newnotes' for delete to work properly.
    //     // delete works fine with 'newnotes' in the res.json on the LOCAL environment.. 
    //     // on heroku delete works as it should, BUT when you click 'save' to enter a new note - then all the 'deleted' notes re-populate.
    //     res.json(activeNote)
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
