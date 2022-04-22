const app = require("express").Router();
const fs = require('fs');
const util = require('util');

let db = require("../../db/db.json");

// Handle processes (Asynchronous)
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.readFile);

app.get("/api/notes", (req, res) => {
    // db = JSON.parse(fs.readFileSync("./db/db.json"))  || [] //or operator
    console.log("GET",db);
    res.json(db);
});

app.post("/api/notes", (req, res) => {
    const getNotes = {
        id: Math.floor(Math.random()* 1000),
        title: req.body.title,
        text: req.body.text
    }
    db.push(getNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
        if (err) {
            throw err
        }
    })
    console.log("need debugging");
    res.json(db);
});

app.delete("/api/notes/:id", (req, res) => {
  let notesList = [];
   db.forEach(ele => {
       if(ele.id != req.params.id) {
        notesList.push(ele)
       }
   })
   db = notesList;

    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
        if (err) {
            throw err
        }
    })
    console.log("need debugging");
    res.json(db);
});


module.exports = app;