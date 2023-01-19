"use strict";

const ServiceDB = require('../models/ServiceDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var serviceDB = new ServiceDB();
var secret = "seniorsproject"
const { request } = require('express');
const crypto = require('crypto')



function getAllVault(request, respond) {
    serviceDB.getAllVault(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

function getUserVault(request, respond) { //Get individual user data
    var user_id = request.body.user_id;
    var currentuser = request.body.currentuser;
    var token = request.body.token;

    if (token == jwt.sign(currentuser, secret)) {
        serviceDB.getUserVault(user_id, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        })
    }
    else {
        respond.json({  message: 'invalid token'    });
    };
}
//
function getUserIndiv(request, respond) { //Get individual user data
    var id = request.body.id;

    serviceDB.getUserIndiv(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })

}

function addAcc(request, respond) {

    var user_id = request.body.user_id;
    var service = request.body.service;
    var username = request.body.username;
    var password = request.body.password;
    var image = request.body.image;
    var token = request.body.token;
    var currentuser = request.body.currentuser; //currentuser

    try {
        if (token == jwt.sign(currentuser, secret)) { //If token is valid
            serviceDB.addAcc(user_id, service, username, password, image, function (error, result) {
                if (error) {
                    respond.json(error);
                }
                else {
                    respond.json(result);
                }
            });
        }
        else {
            respond.json({  message: 'invalid token'    });
        };
    } catch (error) {
        respond.json(error);
    }
}

function deleteAcc(request, respond) {
    var index = request.body.index;
    var token = request.body.token;
    var currentuser = request.body.currentuser; //currentuser

    if (token == jwt.sign(currentuser, secret)) {
        serviceDB.deleteAcc(index, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        })
    }
    else {
        respond.json({  message: 'invalid token'    });
    };
}

function updateAcc(request, respond) {

    //Information to be used
    var sid = request.body.sid;
    var service = request.body.service;
    var username = request.body.username;
    var password = request.body.password;
    var image = request.body.image;

    //For Token Validation
    var token = request.body.token;
    var currentuser = request.body.currentuser; //currentuser

    try {
        if (token == jwt.sign(currentuser, secret)) { //If token is valid
            serviceDB.updateAcc(service, username, password, image, sid, function (error, result) {
                if (error) {
                    respond.json(error);
                }
                else {
                    respond.json(result);
                }
            });
        }
        else {
            respond.json({  message: 'invalid token'    });
        };
    } catch (error) {
        respond.json(error);
    }
}

module.exports = { getAllVault, addAcc, getUserVault, getUserIndiv, deleteAcc, updateAcc };