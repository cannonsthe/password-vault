"use strict";

const { request } = require('express');
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
    updateUser(email, username, password, callback){
        var sql = "UPDATE users SET email = ?, username = ?, password = ? WHERE uid = '?'";
        return db.query(sql, [email, username, password], callback);
    }
    deleteUser(uid, callback){
        var sql = "DELETE from users WHERE uid = ?";
        return db.query(sql, [uid], callback);
    }

    loginUser(username, password, callback){
        var sql = "SELECT password from seniors_project.users WHERE username = ?";
        return db.query(sql, [username, password], callback);
    }

    /* pploginUser(username, password, callback){
        var sql = "SELECT * from seniors_project.users WHERE username = ?";
        return db.query(sql, [username, password], callback);
    } */

    
}

module.exports = userDB;