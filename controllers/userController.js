"use strict";

const UserDB = require('../models/UserDB');
var userDB = new UserDB();

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addUser(request, respond){

    var email = request.body.email;
    var username = request.body.username;
    var password  = request.body.password

    userDB.addUser(email, username, password, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function updateUser(request, respond){

    var email = request.body.username;
    var username = request.body.username;
    var password  = request.body.password

    userDB.updateUser(email, username, password, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteUser(request, respond){
    var uid = request.params.uid;
    userDB.deleteUser(uid, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = { getAllUser, updateUser, addUser, deleteUser };