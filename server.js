const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

// Home Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

// Login Page
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});

// Forms Main Page
app.get('/input', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/input.html'));
});

//Data Main Page
app.get('/data', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/data.html'));
});

// Port Setup
app.listen(port, function() {
    console.log('Listening on port ' + port);
});