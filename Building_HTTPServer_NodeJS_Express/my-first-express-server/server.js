const express = require("express");
var db = require("./database")
const app = express();

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log("Server runing on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", (req, res) => {
    res.send("Getting some data")
})

app.post("/", (req, res) => {
    res.send("Posting some data")
})

app.put("/", (req, res) => {
    res.send("Putting some data")
})

app.delete("/", (req, res) => {
    res.send("Deleting some data")
})