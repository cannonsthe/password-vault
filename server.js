"use strict";

const express = require("express");
/* const passport = require("passport");
const LocalStrategy = require("passport-local");
const crypto = require('crypto'); */
const bodyParser = require("body-parser");


const userController = require('./controllers/userController')

var app = express();
var host = "127.0.0.1";
var port = 8080;
var cors = require('cors');

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("./"));
app.use(cors());

//To get inputs sent in the body of the request, we need to use the body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//This app starts a server and listens on port 8080 for connection
const start = async () => {
  try {
    await app.listen(8080);
    console.log('Server listening on http://127.0.0.1:8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
//Route for Users
app.route('/users').get(userController.getAllUser);
app.route('/register').post(userController.addUser);
app.route('/users/:uid').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);
app.route('/useremail/:uid').put(userController.updateUseremail);
app.route('/username/:uid').put(userController.updateUsername);
app.route('/password/:uid').put(userController.updateUserpw);
