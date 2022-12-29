function registerMe() {
    var addUser = new XMLHttpRequest();

    addUser.open("POST", "http://127.0.0.1:8080/adduser", true);

    addUser.setRequestHeader("Content-Type", "application/json");
    addUser.onload = function () {
    }

    var email = document.getElementById("inputEmail").value;
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    var payload = { email:email, username: username, password: password }
    addUser.send(JSON.stringify(payload))
}





function loginMe() {

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://127.0.0.1:8080/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        if (token.result != false) {
            sessionStorage.setItem("currentuser", username);
            sessionStorage.setItem("password", password);
            console.log("You have been peened");
        } else {
            console.log("You have been peened");
        }

    }

    //var email = document.getElementById("inputEmailUsername").value;
    var username = document.getElementById("inputEmailUsername").value;
    var password = document.getElementById("inputPassword").value;
    var payload = { username: username, password: password }
    loginUser.send(JSON.stringify(payload))
}

