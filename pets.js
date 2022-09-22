//import process from 'node.process';
// import {exit} from 'node.exit';
//import { fs } from 'node.fs';


// function read (index) {
//    var info = require('./pets.json')
//    return info[index]
// }
// //
// //lookup switch funciton
// console.log(read(0))

const fs = require('fs');


let command = process.argv[2];
let index = process.argv[3];
let kind = process.argv[4];
let name = process.argv[5];
//console.log(process.argv);
if (command == 'read' && typeof index == 'string') {
    fs.readFile("./pets.json", 'utf8', function (error, data) {
        
        if( JSON.parse(data)[index] === undefined) {
            console.log('Usage: node pets.js read INDEX')
            process.exit(1);
        } else {
          console.log(JSON.parse(data)[index]);

        }

    })
} else if(command == 'read'){
    fs.readFile("./pets.json", 'utf8', function (error, data) {
        
        if(error) {
            console.error(error);
        } else {
          console.log(JSON.parse(data));

        }

    })
} else if(command === 'create') {
    fs.readFile("./pets.json", 'utf8', function (error, data) {
         let arr = JSON.parse(data)
         let obj = {'age': parseInt(index), 'kind': kind, 'name': name};
         arr.push(obj)
         var petsJSON = JSON.stringify(arr);
         fs.writeFile('pets.json',petsJSON, error => { if(error) {
            console.log('Usage: create AGE KIND NAME')
        }})
    })
}
 else {
    console.log('Usage: node pets.js [read | create | update | destroy]')
    process.exit(1);
}
   

