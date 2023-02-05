"use strict";

const e = require('express');
var db = require('../../db-connection');

class userDB{
    getAllUser(callback){
        var sql = "SELECT * from seniors_project.users";
        db.query(sql, callback);
    }

    getUser(uid, callback){
        var sql = "SELECT * from seniors_project.users WHERE uid = ?";
        db.query(sql, [uid],callback);
    }

    addUser(email, username, password, callback){
        var sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
        db.query(sql, [email, username, password], callback);
    }

    updateUserdeets(email, password, uid, callback){
        var sql = "UPDATE users SET username = ? WHERE uid = ?";
        return db.query(sql, [email, password, uid], callback);
    }

    deleteUser(uid, callback){
        var sql = "DELETE from users WHERE uid = ?";
        return db.query(sql, [uid], callback);
    }

    loginUser(password, uid, username, callback){
        var sql = "SELECT password, uid from seniors_project.users WHERE username = ?";
        return db.query(sql, [password, uid, username], callback);
    }
    
    checkuniqueUser(username, email, callback){
        var sql = "SELECT username, email from users WHERE (username = ? OR email = ?)"
        return db.query(sql, [username, email], callback)
    }


}

module.exports = userDB;