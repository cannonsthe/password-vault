"use strict";

const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt');

var userDB = new UserDB();

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

function updateUser(request, respond) {

    var email = request.body.username;
    var username = request.body.username;
    var password = request.body.password

    userDB.updateUser(email, username, password, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
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
            respond.json(result);
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


module.exports = { getAllUser, updateUser, addUser, deleteUser, loginUser };