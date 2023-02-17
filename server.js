"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var cors = require('cors');

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("./"));
app.use(cors());
app.use(express.json())
//To get inputs sent in the body of the request, we need to use the body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//This app starts a server and listens on port 8080 for connection



const start = async () => {
  try {
    await app.listen(8080);
    console.log('Server listening on http://3.220.228.48:8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();

//////////////////////////////////////Marcus routes///////////////////////////////////////
const userController = require('./marcus/controllers/userController')                   //
const serviceController = require('./marcus/controllers/serviceController')             //
//////////////////////////////////////Route for Users/////////////////////////////////////  
app.route('/users').get(userController.getAllUser);                                     //
app.route('/register').post(userController.addUser);                                    //
app.route('/delusers').delete(userController.deleteUser);//                             //
app.route('/login').post(userController.loginUser);                                     //
app.route('/viewuser').post(userController.getuserData);//                              //      
app.route('/upduser').put(userController.updateUser);                                   //
/////////////////////////////////////Route for services///////////////////////////////////
app.route('/vaultga').post(serviceController.getUserVault);                             // 
app.route('/vaultgui').post(serviceController.getUserIndiv);                            //
app.route('/vaultac').post(serviceController.addAcc);                                   //
app.route('/vaultdac/').delete(serviceController.deleteAcc);                            //
app.route('/vaultupac/').put(serviceController.updateAcc);                              //
//////////////////////////////////////////////////////////////////////////////////////////
//