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
    console.log('Server listening on http://127.0.0.1:8080');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

//Marcus routes
const userController = require('./marcus/controllers/userController')
const serviceController = require('./marcus/controllers/serviceController')
//Route for Users
app.route('/users').get(userController.getAllUser);
app.route('/register').post(userController.addUser);
app.route('/users/:uid').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);
app.route('/useremail/:uid').put(userController.updateUseremail);
app.route('/username/:uid').put(userController.updateUsername);
app.route('/password/:uid').put(userController.updateUserpw);

//Route for services
app.route('/vaultga').get(serviceController.getAllVault);
app.route('/vaultac').post(serviceController.addAcc);
//



//Kieron routes
const { ROLE, users } = require('./kieron/data')
const { authUser, authRole } = require('./kieron/basicAuth')
const projectRouter = require('./kieron/routes/projects')
app.use('/projects', projectRouter)
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})
function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}
//