const fs = require('fs');
const util = require('util'); // Import the util module

//with promise
var read = util.promisify(fs.readFile);
Promise.all([
    read('Tharushi.txt'),
    read('Sanduni.txt'),
    read('Dedunu.txt'),
])

.then(data => {
    const [data1, data2, data3] = data;
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
    return "Three";
})

.catch(error => {
    console.log(error)
})