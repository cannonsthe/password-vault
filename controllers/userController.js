"use strict";

const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var userDB = new UserDB();
var secret = "seniorsproject"
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(function verify(username, password, callback) {
    // check provided username and password against values stored in the database
    if (username === 'admin' && password === 'admin') {
      // credentials are valid - return user object
      return callback(null, { username: 'admin' });
    } else {
      // credentials are invalid - return error object
      return callback(null, false, { message: 'Incorrect username or password' });
    }
  }));

function getAllUser(request, respond) {
    userDB.getAllUser(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

function addUser(request, respond) {

    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password
    password = bcrypt.hashSync(password, 10)

    userDB.addUser(email, username, password, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}



function deleteUser(request, respond) {
    var uid = request.params.uid;
    userDB.deleteUser(uid, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function loginUser(request, respond) {
    // var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password

    userDB.loginUser(username, password, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            //give back password only
            console.log(result[0].password)
            //compare passwords validity here
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if (flag) {
                var token = jwt.sign(username, secret)
                respond.json({ result: token });
            }
            else {
                respond.json({ result: "invalid" });
            }
        }
    })
}

/* function loginUser1(request, respond) {
    // var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password


    passport.use(new LocalStrategy(function verify(username, password, callback) {
        userDB.pploginUser(username, password, function (error, result) {
            if (error) {
                respond.json(error);
            }
            if (!result) {
                return callback(null, false, { message: "incorrect username or password" })
            }
            else {
                //give back password only
                console.log(result[0].password)
                //compare passwords validity here
                crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
                    if (error) { return callback(error); }
                    if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                        return callback(null, false, { message: 'Incorrect username or password.' });
                    }
                    return callback(null, row);
                });
                respond.json(result);
            }
        })
    }))

} */

// Update Functions

function updateUseremail(request, respond) {

    var email = request.body.email;
    var token = request.body.token;
    var uid = request.params.uid;

    try {
        var decoded = jwt.verify(token, secret);
        userDB.updateUseremail(email, uid, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }

}

function updateUsername(request, respond) {

    var username = request.body.username;
    var token = request.body.token;
    var uid = request.params.uid;

    try {
        var decoded = jwt.verify(token, secret);
        userDB.updateUsername(username, uid, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid" });
    }

}

function updateUserpw(request, respond) {

    var password = request.body.password;
    var token = request.body.token;
    var uid = request.params.uid;
    password = bcrypt.hashSync(password, 10)

    try {
        var decoded = jwt.verify(token, secret);
        userDB.updateUserpw(password, uid, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid" });
    }

}
module.exports = { getAllUser, addUser, deleteUser, loginUser, updateUseremail, updateUsername, updateUserpw };