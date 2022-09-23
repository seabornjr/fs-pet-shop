'use strict';

//require the path directory
var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

//require the http module and create a port
var http = require('http');
var port = process.env.PORT || 8000;


//create the server instance
var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(petsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(petsJSON);
      var guestJSON = JSON.stringify(pets[0]);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(guestJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(petsJSON);
      var guestJSON = JSON.stringify(pets[1]);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(guestJSON);
    });
  }
  else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});

//make the file available for export
module.exports = server;




// var returnPets = {

//     startServer: function() {
//         //require the path directory
//         var fs = require('fs');
//         var path = require('path');
//         var petsPath = path.join('pets.json');

//         //require the http module and create a port
//         var http = require('http');
//         var port = process.env.PORT || 8000;

//         var server = http.createServer(function(req, res) {
//                 var string = req.url;
//                 const petRegExp = /^\/pets\/(.*)$/;
//                 var matches = string.match(petRegExp);
//                 console.log(matches);
//                 var index = matches[0].charAt(6);
//                 if (req.method === 'GET' && matches[0].charAt(5) === '/' && index === null) {      
                   
//                     fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
//                         if (err) {
//                             console.error(err.stack);
//                             res.statusCode = 500;
//                             res.setHeader('Content-Type', 'text/plain');
//                             return res.end('Internal Server Error');
//                         }
//                         else {
//                         res.setHeader('Content-Type', 'application/json');
                        
//                         res.statusCode = 200;
//                         console.log(petsJSON);
//                         res.end(petsJSON);
//                         }
//                      });
//                 }

//                 else if (req.method === 'GET' && index ) {
//                     fs.readFile(petsPath, 'utf8', function(err, petsJSON) { 
//                     var pets = JSON.parse(petsJSON);
//                     var guestJSON = JSON.stringify(pets[index]);
            
//                     res.setHeader('Content-Type', 'application/json');
//                     console.log('hi');
//                     res.statusCode = 200;
//                     res.end(guestJSON);
//                     });
//                 } 
                   
//                 else {
//                     res.setHeader('Content-Type', 'text/plain');
//                     res.statusCode = 404;
//                     res.end('Not found');
//                 }
                 
//             })
//             
//     }
// }



// init();
// function init() {
//     returnPets.startServer();
// };






