async function registerMe() {
  const response = await fetch("http://127.0.0.1:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: document.getElementById("inputEmail").value,
      username: document.getElementById("inputUsername").value,
      password: document.getElementById("inputPassword").value,
    }),
  });
  console.log(response);
}


async function loginMe() {
  const response = await fetch("http://127.0.0.1:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("LoginEmailUsername").value,
      password: document.getElementById("LoginPassword").value,
    }),
  });
  
  if (response.ok) {
    const token = await response.json();
    var username = document.getElementById("LoginEmailUsername").value;
    localStorage.setItem("token", token.result);
    localStorage.setItem("currentuser", username);
    console.log(token);
  } 
  else if (response.status == 401) {
    // Unauthorized - display an error message
    alert("Invalid username or password");
  }
  else {
    // Other error - display a generic error message
    alert("An error occurred while trying to log in");
  }
}

function logoutMe() {
  localStorage.removeItem("token");
  localStorage.removeItem("currentuser");
}


/* function loginMe() {

  var loginUser = new XMLHttpRequest();

  loginUser.open("POST", "http://127.0.0.1:8080/login", true);
  loginUser.setRequestHeader("Content-Type", "application/json");
  loginUser.onload = function () {
    var token = JSON.parse(loginUser.responseText); //////
    if (token.result != false){
      sessionStorage.setItem("token", token.result)
      sessionStorage.setItem("currentuser", username);
      sessionStorage.setItem("password", password);
      console.log(token);
    } 
    else {
      location.reload();
    }
      
  }

  var username = document.getElementById("LoginEmailUsername").value;
  var password = document.getElementById("LoginPassword").value;
  var payload = { username: username, password: password }

  loginUser.send(JSON.stringify(payload))
}
 */