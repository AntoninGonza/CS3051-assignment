const express = require('express'); //Set up the express module
const app = express();
const port = 9000;

const path = require('path') // bring in the path module to help locate files
const urls= ["https://media.istockphoto.com/id/508030340/photo/sunny-cat.jpg?s=612x612&w=0&k=20&c=qkz-Mf32sbJnefRxpB7Fwpcxbp1fozYtJxbQoKvSeGM=","https://www.rd.com/wp-content/uploads/2021/04/GettyImages-138468381-scaled-e1619028416767.jpg","https://www.humanesociety.org/sites/default/files/2022-07/kitten-playing-575035.jpg","https://valevets.com/wp-content/uploads/2014/08/kitten1.jpg","https://expertphotography.b-cdn.net/wp-content/uploads/2019/11/Cute-Kitten-Picture-group.jpg"];

// Return an HTML file to a request to the domain's URL
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'randimg.html'));  // res.sendFile sends the contents of a file
});

// Return a fixed string to a /textresponse GET request
app.get('/imageresponse', function (req, res) {
    let num = Math.floor(Math.random()*urls.length);
    curr = urls[num]
    res.send(curr);
});

app.get('/me', function (req, res) {
    res.sendFile(path.join(__dirname, 'me.html'));
});

app.get('/like', function (req, res) {
    res.sendFile(path.join(__dirname, 'like.html'));
});

app.get('/sites', function (req, res) {
    res.sendFile(path.join(__dirname, 'sites.html'));
});

app.get('/lived', function (req, res) {
    res.sendFile(path.join(__dirname, 'lived.html'));
});


// return jpg images, html, css, and js files
app.get(['/*.jpg', '/*.css', '/*.html', '/*.js','/*.jpeg'], function (req, res) {
    res.sendFile(path.join(__dirname, req.path));
});

// Start listening for requests on the designated port
app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});