"use strict";

var db = require('../../db-connection');
const service = require('./Service');
var Service = new service();
var servicedeets = Service.getId();

class serviceDB{
    getAllVault(callback){
        var sql = "SELECT * from seniors_project.vault";
        db.query(sql, callback);
    }

    addAcc(user_id, service, username, password, image, callback){
        var sql = "INSERT INTO vault (user_id, service, username, password, image)  VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [user_id, service, username, password, image], callback);
    }

    getUserVault(user_id, callback){ //ALl user acounts and passwords
        var sql = "SELECT * from seniors_project.vault WHERE user_id = ?";
        db.query(sql, [user_id], callback);
    }
    //
    getUserIndiv(servicedeets, callback){ //ALl user acounts and passwords
        var sql = "SELECT * from seniors_project.vault WHERE id = ?";
        db.query(sql, [servicedeets], callback);
    }

    deleteAcc(id, callback){
        var sql = "DELETE from vault WHERE id = ?"
        db.query(sql, [id], callback)
    }
    
}

module.exports = serviceDB;