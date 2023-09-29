const express = require("express");
const app = express();

//app.METHOD(PATH, HANDLER)
app.get("/a/cool/route/path", function(req, res) {
    // console.log("The user visited /a/cool/route/path PATH")
    res.send("The user visited /a/cool/route/path PATH")
})

app.listen(3000);