const app = require("express").Router();
const path = require('path');


// GET Route for homepage
app.get('/', (req, res) =>{
    console.log("GET index")
  res.sendFile(path.join(__dirname, '../../public/index.html'))
}
);

// GET Route for notes page
app.get('/notes', (req, res) => {
    console.log("GET")
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
}
);

// Redirecting to home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/index.html'))
);

module.exports = app;