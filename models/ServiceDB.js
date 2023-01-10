"use strict";

var db = require('../db-connection');

class serviceDB{
    getAllVault(callback){
        var sql = "SELECT * from seniors_project.vault";
        db.query(sql, callback);
    }

    addAcc(user_id, service, username, password, callback){
        var sql = "INSERT INTO vault (user_id, service, username, password) VALUES (?, ?, ?, ?)";
        db.query(sql, [user_id, service, username, password], callback);
    }
    
}

module.exports = serviceDB;