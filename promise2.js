const promise = new Promise((resolve, reject) => {
    resolve('Success');
    // reject('Failure')
})

    .then(value => {
        throw "Error Ocured"; //error is occured. so go catch block
        console.log(value);
        return "One";
    })

    .then(value => {
        console.log(value);
        return "Two";
    })

    .then(value => {
        console.log(value);
        return "Three";
    })

    .catch(error => {
        console.log(error)
    })