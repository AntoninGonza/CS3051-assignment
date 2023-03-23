const express = require('express'); //Set up the express module
const app = express();
const port = 10000;

const path = require('path') // bring in the path module to help locate files

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'fetch4.html'));  // res.sendFile sends the contents of a file
});

app.get('/me', function (req, res) {
    res.sendFile(path.join(__dirname, 'me.html'));
});

app.get('/like', function (req, res) {
    res.sendFile(path.join(__dirname, 'like.html'));
});

app.get('/site', function (req, res) {
    res.sendFile(path.join(__dirname, 'site.html'));
});

app.get('/lived', function (req, res) {
    res.sendFile(path.join(__dirname, 'lived.html'));
});


// return jpg images, html, css, and js files
app.get(['/*.jpg', '/*.css', '/*.html', '/*.js','/*.jpeg', '/*.png'], function (req, res) {
    res.sendFile(path.join(__dirname, req.path));
});

// Start listening for requests on the designated port
app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});