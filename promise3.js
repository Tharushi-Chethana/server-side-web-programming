Promise.resolve("Success")
    .then(value => {
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