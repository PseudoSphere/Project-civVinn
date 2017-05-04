const express = require('express');

const port = 3000;
const app = express();

// Home Page
app.get('/', function(req, res) {
    res.send('Home Functionality Here!');
});

// Login Page
app.get('/login', function(req, res) {
    res.send('Login Functionality Here!');
});

// Forms Main Page
app.get('/input', function(req, res) {
    res.send('Forms And Such Here!');
});

//Data Main Page
app.get('/data', function(req, res) {
    res.send('Data Options And Functionality Here!');
});

// Port Setup
app.listen(port, function() {
    console.log('Listening on port ' + port);
});