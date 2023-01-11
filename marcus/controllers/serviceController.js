"use strict";

const ServiceDB = require('../marcus/models/serviceDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var serviceDB = new ServiceDB();
var secret = "seniorsproject"
const { request } = require('express');

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

function addAcc(request, respond) {
    
    /* var user_id = localStorage.getItem("uid"); */
    var user_id = request.body.user_id;
    var service = request.body.service;
    var username = request.body.username;
    var password = request.body.password;
    var tom;

    serviceDB.addAcc(user_id, service, username, password, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}
module.exports = { getAllVault, addAcc };