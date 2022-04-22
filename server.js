// Import the dependencies
const express = require('express');

const PORT = process.env.PORT || 3001;

// Initialize the app
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // req.body  in post routes will be undefined

app.use(express.static('public'));


app.use(require("./route/api"));
app.use(require("./route/html"));

// Listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
