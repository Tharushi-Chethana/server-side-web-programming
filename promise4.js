const fs = require('fs');

console.log("ABC");

//without promise
//this is asynchronuos. so take some times
// fs.readFile('Tharushi.txt', (err, data) => {
//     console.log(data.toString());
// });

console.log('XYZ');

//with promise
new Promise((resolve, reject) => {
    fs.readFile('Tharushi.txt', (err, data) => {
        if(err){
            reject(err);
        }
        else{
            resolve(data);
        }
    })
})

.then(data => {
    console.log(data.toString());
    return "Three";
})

.catch(error => {
    console.log(error)
})