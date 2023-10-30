/**
 * @fileoverview This file is the entry point for the application.
 */

// Setup Routes for express.
const routes = require('./routes');


// Import the express module.
const express = require('express'); 
// Create an instance of express.
const app = express();
// Get the environment variable for port.
const port = process.env.PORT || 3000;

// Start the server.
app.listen(port, () => console.log('App Started...'));

app.use('/', routes);

module.exports = app;