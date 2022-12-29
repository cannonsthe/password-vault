"use strict";
var db = require('../db-connection');
const User = require('../models/User');

class userDB {

    LoginUser(request, respond) {

        //var email = request.body.usernamepassword;
        var username = request.body.username;
        var password = request.body.password;
        var msg = "";

        var sql = "SELECT password FROM seniors_project.users where username = ?";

        db.query(sql, [username], function (error, result) {
            if (error) {
                throw error;
            }
            else {
                if (result.length > 0) {
                    if (password == result[0].password) {
                        msg = "SUCCESS!"
                        /* var token = jwt.sign(username, secret);
                        respond.json({result:token}); */
                        console.log(msg);
                    }
                    else {
                        msg = "FAIL!";
                        var value1 = false;
                        respond.json({result:value1})
                        console.log(msg);
                    }
                }
                else {
                    msg = "USER NOT FOUND!";
                    console.log(msg);
                }
            }
        });
    }

    adduser(request, respond) {
        /* var now = new Date(); */

        var userObject = new User(request.params.uid, request.body.email,request.body.username, request.body.password);
        var sql = "INSERT INTO seniors_project.users (email, username, password) VALUES(?,?,?)";

        var values = [userObject.getEmail(), userObject.getUserName(), userObject.getPassword()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    getAllUsers(request, respond) {
        var sql = "SELECT user_id, username, date_joined,profile_pic FROM restaurant.user";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }

    updateUserFirstName(request, respond) {

        var userObject = new User(request.params.user_id, request.body.username);

        var sql = "UPDATE restaurant.user SET username = ? WHERE user_id = ?";
        var values = [userObject.getUserName(), userObject.getUserId()];
        var token = request.body.token;
        try {
            var decoded = jwt.verify(token,secret);
            db.query(sql, values, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        } catch (error) {
            respond.json({result:"Invalid"});
        }
        
    }

    updatePassword(request, respond) {
        var userObject = new User(request.params.user_id, request.body.username, request.body.password);

        var sql = "UPDATE restaurant.user SET password = ? WHERE user_id = ?";
        var values = [userObject.getPassword(), userObject.getUserId()];
        var token = request.body.token;
        try {
            var decoded = jwt.verify(token, secret);
            db.query(sql, values, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        } catch (error) {
            respond.json({result:"Invalid"});
        }
        
    }
    deleteuser(request, respond) {
        var userid = request.params.user_id;
        var sql = "DELETE from restaurant.user WHERE user_id = ?";
        var token = request.body.token;
        try {
            var decoded = jwt.verify(token, secret);
            db.query(sql, userid, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        } catch (error) {
            respond.json({result:"Invalid"});
        }
        
    }

    updateuser(request, respond) {

        var userObject = new User(request.params.user_id, request.body.username, request.body.password);

        var sql = "UPDATE restaurant.user SET username = ?, password = ? WHERE user_id = ?";

        var values = [userObject.getUserName(), userObject.getPassword(), userObject.getUserId()];
        var token = request.body.token;
        try {
            db.query(sql, values, function (error, result) {
                var decoded = jwt.verify(token, secret);
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        } catch (error) {
            respond.json({result:"Invalid"});
        }
        
    }

}
function prepareMessage(msg) {
    var obj = { "message": msg };
    return obj;
}

module.exports = userDB;