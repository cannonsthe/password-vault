"use strict";

var db = require('../db-connection');

class userDB{
    getAllUser(callback){
        var sql = "SELECT * from seniors_project.users";
        db.query(sql, callback);
    }

    addUser(email, username, password, callback){
        var sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
        db.query(sql, [email, username, password], callback);
    }

    updateUseremail(email, uid, callback){
        var sql = "UPDATE users SET email = ? WHERE uid = ?";
        return db.query(sql, [email, uid], callback);
    }

    updateUsername(username, uid, callback){
        var sql = "UPDATE users SET username = ? WHERE uid = ?";
        return db.query(sql, [username, uid], callback);
    }

    updateUserpw(password, uid, callback){
        var sql = "UPDATE users SET password = ? WHERE uid = ?";
        return db.query(sql, [password, uid], callback);
    }

    deleteUser(uid, callback){
        var sql = "DELETE from users WHERE uid = ?";
        return db.query(sql, [uid], callback);
    }

    loginUser(password, uid, username, callback){
        var sql = "SELECT password, uid from seniors_project.users WHERE username = ?";
        return db.query(sql, [password, uid, username], callback);
    }

    /* pploginUser(username, password, callback){
        var sql = "SELECT * from seniors_project.users WHERE username = ?";
        return db.query(sql, [username, password], callback);
    } */

    
}

module.exports = userDB;