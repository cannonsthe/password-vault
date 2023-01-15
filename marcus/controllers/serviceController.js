"use strict";

const ServiceDB = require('../models/ServiceDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var serviceDB = new ServiceDB();
var secret = "seniorsproject"
const { request } = require('express');
const crypto = require('crypto')

// Define the encryption algorithm
const algorithm = 'AES-GCM';
// Define the encryption key length
const keyLength = 256;



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

    serviceDB.getUserVault(user_id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })

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

    ////////////////////////////////////////////////////////////////////////
    // Generate a random 256-bit (32-byte) salt
    //const salt = crypto.randomBytes(32);
    // Derive a key using PBKDF2
    //const key = crypto.pbkdf2Sync(token, salt, 100000, 32, 'sha512');
    // Create a new initialization vector (IV) for each encryption
    //const iv = crypto.randomBytes(16);
    // Create a new cipher using the key and IV
    //const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    // Encrypt the password
    //let encrypted = cipher.update(password, 'utf8', 'hex');
    //encrypted += cipher.final('hex');
    // Concatenate the salt, IV, and encrypted password and store in the database
    //password = salt.toString('hex') + iv.toString('hex') + encrypted;
    ////////////////////////////////////////////////////////////////////////
    serviceDB.addAcc(user_id, service, username, password, image, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function deleteAcc(request, respond) {
    var id = request.body.id;
    serviceDB.deleteAcc(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

module.exports = { getAllVault, addAcc, getUserVault, getUserIndiv, deleteAcc };