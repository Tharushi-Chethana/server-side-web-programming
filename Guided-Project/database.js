var sqlite3 = require("sqlite3").verbose()
const dbSource = "db.sqlite3"

let db = new sqlite3.Database(dbSource, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log("Connected to the SQLite database");
        db.run(`CREATE TABLE IF NOT EXISTS customer (
            id integer PRIMARY KEY AUTOINCREMENT,
            name TEXT, 
            address TEXT,
            email TEXT,
            dateOfBirth TEXT,
            gender TEXT,
            age TEXT,
            cardHolderName TEXT,
            cardNumber TEXT,
            expirtyDate TEXT,
            cvv TEXT,
            timeStamp TEXT)`, (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("Table 'customer' created successfully");
                }
        });
    }
});

module.exports = db;
