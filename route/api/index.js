const app = require("express").Router();
const fs = require('fs');
const util = require('util');

let db = require("../../db/db.json");

// Handle processes (Asynchronous)
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.readFile);

app.get("/api/notes", (req, resp) => {
    db = JSON.pass
});