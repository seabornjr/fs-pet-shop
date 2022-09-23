'use strict';
//initalize the express package
//set up dependencies
const { response } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();
application.use(express.json())

//require the path directory
var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

//require the http module and create a port
const port = 8000

//handle the request with routes

app.get('/pets', (req, res) => {
    //logic 
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        if (err) {
            if (err) {
                console.log(err);
                response.status(500).
                response.send(err);
            }
        } else { 
        res.status(200);
        res.send(petsJSON);
        }
      });
});

app.get('/pets/0', (req, res) => {
    //logic 
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        if (err) {
            if (err) {
                console.log(err);
                response.status(500).
                response.send(err);
            }
        } else { 
        var pets = JSON.parse(petsJSON);
        var petsData = JSON.stringify(pets[0]);
        res.status(200);
        res.send(petsData);
        }
      });
});

app.get('/pets/1', (req, res) => {
    //logic 
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        if (err) {
            if (err) {
                console.log(err);
                response.status(500).
                response.send(err);
            }
        } else { 
        var pets = JSON.parse(petsJSON);
        var petsData = JSON.stringify(pets[1]);
        res.status(200);
        res.send(petsData);
        }
      });
});

//listen for calls to the server
app.listen(port, () => {
    console.log(`Listening for response on port ${port}`)
  })

  //present the server for testing
  module.exports = app;