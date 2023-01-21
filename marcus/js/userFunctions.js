async function registerMe() {
  const email = document.getElementById("inputEmail").value;
  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;

  //Validation
  if (!email) {
    alert("Please enter a email");
    return;
  }
  if (!username) {
    alert("Please enter a username");
    return;
  }
  if (!password) {
    alert("Please enter a password");
    return;
  }
  if (username.length < 5) {
    alert("Username must be at least 5 characters long");
    return;
  }
  if (password.length < 5) {
    alert("Password must be at least 5 characters long");
    return;
  }
  if (/[^a-zA-Z0-9]/.test(username)) {
    alert("Username must only contain alphanumeric characters");
    return;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    alert("Password must only contain alphanumeric characters");
    return;
  }

  //Fetch
  try {
    const response = await fetch("http://3.220.228.48:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });
    if (response.ok) { //If request went through
      const reply = await response.json();
      if (reply.status != "unsuccessful"){ //If username and email are unique
        console.log(reply);
        alert("Succesful, you can login now")
        window.location.replace('/marcus/pages/login.html');
      }
      else { //If already exist
        alert("The username or email is already in use")
        return;
      }
    }
    else { //If error for request
      alert("There was an error in the request, try again")
      window.location.replace('/marcus/pages/vault.html');
    }
  } 
  //If theres any errors in the validation earlier?
  catch (error) {
    alert("Error in try clause")
    return;
    console.log(error);
  }
}

async function loginMe() {
  // Get the username and password
  const username = document.getElementById("LoginEmailUsername").value;
  const password = document.getElementById("LoginPassword").value;

  // Validate the username and password
  if (!username) {
    alert("Please enter a username");
    return;
  }
  if (!password) {
    alert("Please enter a password");
    return;
  }
  if (username.length < 5) {
    alert("Username must be at least 5 characters long");
    return;
  }
  if (password.length < 5) {
    alert("Password must be at least 5 characters long");
    return;
  }
  if (/[^a-zA-Z0-9]/.test(username)) {
    alert("Username must only contain alphanumeric characters");
    return;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    alert("Password must only contain alphanumeric characters");
    return;
  }

  // Make the fetch request if the username and password are valid
  const response = await fetch("http://3.220.228.48:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  //If successful request
  if (response.ok) {
    const token = await response.json(); //Depending on serverside, could be token or invalid
    if (token.result != "invalid" || token.result != "Account does not exist") { //If password match
      localStorage.setItem("token", token.result);
      localStorage.setItem("currentuser", username);
      localStorage.setItem("uid", token.uid);
      console.log(token.result);
      console.log(token.uid);
      window.location.replace('/marcus/pages/vaultIndex.html');
    }
    else { //If user doesnt exist or invalid token
      console.log(token.result);
    }

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
  localStorage.removeItem("uid");
  window.location.replace('/marcus/pages/vault.html');
}
