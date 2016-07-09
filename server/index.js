/**
 * By H.
 */

var express = require('express');
var app = express();
var getColors = require("get-image-colors");
var multipart = require('connect-multiparty');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(multipart({
    uploadDir: ''
}));

app.post('/getColors', function (req, res) {

    getColors(req.files.file.path, function(err, colors){
        res.send(colors.map(color => color.hex()));
    })

});

app.listen(8080, function () {
    console.log("listening on port 8080");
});