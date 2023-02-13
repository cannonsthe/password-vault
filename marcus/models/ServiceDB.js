"use strict";

var db = require('../../db-connection');

class serviceDB{
    getAllVault(callback){
        var sql = "SELECT * from seniors_project.vault";
        db.query(sql, callback);
    }

    addAcc(user_id, service, username, password, image, callback){
        var sql = "INSERT INTO vault (user_id, service, username, password, image)  VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [user_id, service, username, password, image], callback);
    }

    getUserVault(user_id, callback){ //All user acounts and passwords
        var sql = "SELECT * from seniors_project.vault WHERE user_id = ?";
        db.query(sql, [user_id], callback);
    }
    //
    getUserIndiv(sid, callback){ //Get individual service data 
        var sql = "SELECT * from seniors_project.vault WHERE sid = ?";
        db.query(sql, [sid], callback);
    }

    deleteAcc(index, callback){
        var sql = "DELETE from vault WHERE sid = ?"
        db.query(sql, [index], callback)
    }

    updateAcc(service, username, password, image, sid, callback){
        var sql = "UPDATE vault SET service = ?, username = ?, password = ?, image = ? WHERE sid = ?"
        db.query(sql, [service, username, password, image, sid], callback)
    }
}

module.exports = serviceDB;