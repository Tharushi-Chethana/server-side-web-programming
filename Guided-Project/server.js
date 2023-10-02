var express = require("express");
var app = express();

var db = require("./database.js");
var bodyParser = require("body-parser")

const {req, res} = require("express");

app.use(bodyParser.json());

let HTTP_PORT = 8080;

app.listen(HTTP_PORT, () => {
    console.log("Server is running on %PORT%".replace("%PORT%",HTTP_PORT));
})

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidCreditCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{12}$/;
    return cardNumberRegex.test(cardNumber);
}

app.post("/api/register",(req, res,next) => {

    try{

        var errors = [];

        if(!req.body){
            errors.push("An valid input");
        }
    
        const {
            name,
            address,
            email,
            dateOfBirth,
            gender,
            age,
            cardHolderName,
            cardNumber,
            expirtyDate,
            cvv,
            timeStamp
        } = req.body;

        if (!isValidEmail(email)) {
            res.status(400).json({ "error": "Invalid email address" });
            return;
        }

        if (!isValidCreditCardNumber(cardNumber)) {
            res.status(400).json({ "error": "Invalid credit card number" });
            return;
        }

        var sql = `INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expirtyDate, cvv, timeStamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        var params = [name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expirtyDate, cvv, timeStamp];

   // console.log(params)
        db.run(sql,params,function(err, result){
            if(err){
                res.status(400).json({"error":err.message})
                return;
            }
            else{
                res.json({
                    "message": `customer ${req.body.name} has registered`,
                    "customerId": this.lastID
    
                })
            }
        })    
    }
    catch(err){
        res.status(400).send(E);
    }
})

app.get("/api/products",(req, res, next)=>{
    try{
        var sql = "select * from products"
        var params = []
        db.all(sql, params, (err, rows) => {
            if(err){
                res.status(400).json({"error" :err.message})
                console.log("Tharushi")
                return;
            }
            else{
                res.json({
                    "message": "success",
                    "data": rows
                })
            }
        })
    }
    catch(error){
        res.status(400).send(error)
    }
})

app.put("/api/products", (req, res, next) => {
    try{
        const {
            id,
            productName,
            description,
            quantity
        } = req.body;
    
        db.run(`UPDATE products SET productName = ?, description = ?, quantity = ? WHERE id = ?`,
            [productName, description, quantity, id], function (err, result) {
                if (err) {
                    res.status(400).json({ "error": err.message });
                    return;
                }
                res.status(200).json({ updated: this.changes });
            });
    }
    catch(error){
        res.status(400).send(error)
    }
});

app.delete("/api/products/delete/:id", (req, res, next) => {
    try{
        db.run(`delete from products where id = ? `,
        req.params.id,
        function(err,result){
            if(err){
                res.status(400).json({ "error": res.message });
                return;               
            }
            else{
                res.json({"message": "deleted",rows:this.changes})
            }
        })
    }
    catch(error){
        res.status(400).send(error)
    }
});
