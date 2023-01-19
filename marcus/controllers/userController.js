"use strict";

const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var userDB = new UserDB();
var secret = "seniorsproject"
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { request } = require('express');
const { get } = require('jquery');

passport.use(new LocalStrategy(function verify(username, password, callback) {
    // check provided username and password against values stored in the database
    if (username === request.body.username && password === request.body.password) {
        // credentials are valid - return user object
        return callback(null, { username: request.body.username });
    } else {
        // credentials are invalid - return error object
        return callback(null, false, { message: 'Incorrect username or password' });
    }
}));

function loginUser(request, respond) {
    // Get the username and password
    var username = request.body.username;
    var password = request.body.password;
    var uid;

    // Validate the username and password
    if (!username || !password) {
        respond.json({ error: "Please enter a username and password" });
        return;
    }
    if (username.length < 5) {
        respond.json({ error: "Username must be at least 5 characters long" });
        return;
    }
    if (password.length < 5) {
        respond.json({ error: "Password must be at least 5 characters long" });
        return;
    }
    if (/[^a-zA-Z0-9]/.test(username) || /[^a-zA-Z0-9]/.test(password)) {
        respond.json({ error: "Username and Password must only contain alphanumeric characters" });
        return;
    }

    else {
        // Check if the username and password are valid
        userDB.loginUser(username, uid, password, function (error, result) {
            if (error) {

                respond.json({ error: "Account does not exist" });
            }
            else {
                // Compare passwords for validity
                if (result.length > 0) { // Checks if there is a user from the username
                    console.log(result)
                    try { //If user exist
                        const hash = result[0].password; //Grabbing password from db query
                        const uid = result[0].uid;
                        var flag = bcrypt.compareSync(password, hash); //Compare db password to input 
                        if (flag) { //If password matches, give a token
                            var token = jwt.sign(username, secret);
                            respond.json({ result: token, uid });
                        }
                        else { //If password does not match, return invalid
                            respond.json({ result: "invalid" });
                        }
                    } catch (error) { //If user doesnt exist too
                        console.log(error)
                    }
                }
                else { //If user doesnt exist
                    respond.json({ result: "Account does not exist" });
                }

            }
        });
    }

}

function getAllUser(request, respond) { //no need for this
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
    var uid;
    password = bcrypt.hashSync(password, 10)
    try {
        userDB.checkuniqueUser(username, email, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                if (result.length > 0) { // Checks if there is a user from the username or email
                    try { //If user exist
                        respond.json({ result: "Username or Email is already in use", status: "unsuccessful" });                    
                    } catch (error) { //If user doesnt exist too
                        console.log(error)
                    }
                } else {
                    userDB.addUser(email, username, password, function (error, result) {
                        if (error) {
                            respond.json(error);
                        }
                        else {
                            respond.json(result);
                        }
                    })
                }
            }
        });

    } catch (error) {
        console.log(error)
    }
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

// Update Functions


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
module.exports = { getAllUser, addUser, deleteUser, loginUser, updateUserpw };