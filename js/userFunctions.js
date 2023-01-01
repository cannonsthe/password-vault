function registerMe() {
    var addUser = new XMLHttpRequest();

    addUser.open("POST", "http://127.0.0.1:8080/adduser", true);

    addUser.setRequestHeader("Content-Type", "application/json");
    addUser.onload = function () {
      console.log(addUser.status)
    }

    var email = document.getElementById("inputEmail").value;
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    var payload = { email: email, username: username, password: password }
    addUser.send(JSON.stringify(payload))
}





function loginMe() {

    var loginUser = new XMLHttpRequest();
    var email = document.getElementById("LoginEmailUsername").value;
    var username = document.getElementById("LoginEmailUsername").value;
    var password = document.getElementById("LoginPassword").value;
    var payload = { email: email, username: username, password: password }
    

    loginUser.open("POST", "http://127.0.0.1:8080/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        if (loginUser.status === 200) {
          sessionStorage.setItem("currentuser", username);
          sessionStorage.setItem("password", password);
          console.error("YOU HAVE BEEN PEENED", loginUser.status);
        } else {
          console.error("There was an error with the login request: ", loginUser.status);
        }
      };

    loginUser.send(JSON.stringify(payload))
}

