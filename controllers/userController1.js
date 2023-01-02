"use strict"

const userdb = require('../models/UserDB1');

var usersDBObject = new userdb();

function routeUsers(app) {
    app.route('/login')
        .post(usersDBObject.LoginUser);
    app.route('/adduser')
        .post(usersDBObject.adduser);
    app.route('/getallusers')
        .get(usersDBObject.getAllUsers);
    /* app.route('/updatename/:user_id')
        .put(usersDBObject.updateUserFirstName);
    app.route('/updatepassword/:user_id')
        .put(usersDBObject.updatePassword);
    app.route('/deleteuser/:user_id')
        .delete(usersDBObject.deleteuser);
    app.route('/deleteuser')
        .delete(usersDBObject.adduser);
    app.route('/updateuser/:user_id')
        .put(usersDBObject.updateuser); */
}
module.exports = { routeUsers };