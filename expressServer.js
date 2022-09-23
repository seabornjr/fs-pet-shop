'use strict';


//initalize the express package
//set up dependencies
const { response } = require('express');

const express = require('express');
const app = express();
app.use(express.json())

//require the path directory
var fs = require('fs');
const { request } = require('http');
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

app.get('/pets/:id', (req, res) => {
    console.log("here's a way", req.params, req.query)
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        var pets = JSON.parse(petsJSON);
        if (err) {
                console.log(err);
                res.status(500)
                res.send(err);
        }     
        else if (!pets[req.params.id]){
                res.status(404)
                res.send(err);
        }
        else {
            var petsData = JSON.stringify(pets[req.params.id]);
            res.status(200);
            res.send(petsData);
        }
    });
});

app.post('/pets', (req, res) => {
    console.log("here's a way", req.body)
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        var pets = JSON.parse(petsJSON);
        if (err) {
                console.log(err);
                res.status(500)
                res.send(err);
        }     
        else if (!pets[req.params.id]){
                res.status(404)
                res.send(err);
        }
        else {
            pets.push(req.body);
            res.status(200);
            res.send(pets);
        }
    });
});
//listen for calls to the server
app.listen(port, () => {
    console.log(`Listening for response on port ${port}`)
  })

  //present the server for testing
  module.exports = app;