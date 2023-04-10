const express = require('express'); //Set up the express module
const app = express();
const port = 10000;
let x = 0;
let curlist = [];
const path = require('path') // bring in the path module to help locate files

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'main.html'));  // res.sendFile sends the contents of a file
});


// This code reads the word list into the wordlist array
// You can read in enwords.txt for English, frwords.txt for French, or spwords.txt for Spanish
// You need the 'uft8' argument to get the words as text, not binary
const fs = require('fs');
let wordlist = [];

fs.readFile(path.join(__dirname, 'enwords.txt'), 'utf8', function (err, data) {
    wordlist = data.split('\n');
    console.log(wordlist);
});

// return jpg images, html, css, and js files
app.get(['/*.jpg', '/*.css', '/*.html', '/*.js','/*.jpeg', '/*.png', '/*.txt'], function (req, res) {
    res.sendFile(path.join(__dirname, req.path));
});

app.get("/next", function (req, res){
    res.json(next());
});

app.get("/previous", function (req, res){
    res.json(previous());
});


function next(){
    curlist = [];

    for(let i = x; i < x +20; i++){
        curlist.push(wordlist[i]);        
    }
    x = x+20;
    return curlist;
}

function previous(){
    curlist = [];
    if(x != 0){
        for(let i = x-21; i > x -41; i--){
        
            curlist.push(wordlist[i]); 
    
        }
        x = x-20;
        curlist.reverse();
       }
       return curlist;
    }
    


// This is the code that starts the server listening for requests
let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});


