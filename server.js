"use strict";

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const crypto = require('crypto');
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
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example Apps listen at http://%s:%s", host, port);
});

//Route for Users
app.route('/users').get(userController.getAllUser);
app.route('/register').post(userController.addUser);
app.route('/users/:uid').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);
app.route('/useremail/:uid').put(userController.updateUseremail);
app.route('/username/:uid').put(userController.updateUsername);
app.route('/password/:uid').put(userController.updateUserpw);

/* app.route('/login').post(passport.authenticate('local', {
    successRedirect: '/pages/vault.html',
    failureRedirect: '/pages/signup.html'
})); */








/* passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
      if (err) { return cb(err); }
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
      crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, row);
      });
    });
  }));
 */


