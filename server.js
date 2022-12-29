"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

const userController = require('./controllers/userController')

var app = express();
var host = "127.0.0.1";
var port = 8080;

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("./"));
app.use(cors());

//To get inputs sent in the body of the request, we need to use the body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userController.routeUsers(app);

//This app starts a server and listens on port 8080 for connection
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example Apps listen at http://%s:%s", host, port);
});
