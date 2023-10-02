// SQLite database
var sqlite3 = require("sqlite3").verbose()

const dbSource = "db.sqlite3"

let db = new sqlite3.Database(dbSource, (err) => {
    if(err){
        console.error(err.message);
        throw err;
    }
    else{
        console.log("COnnected to the SQLite database");
    }
});

module.exports = db;