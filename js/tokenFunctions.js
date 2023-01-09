$(function(){ //Execute to check token
    var token = localStorage.getItem("token");
    if (token != null) {
        null
    } else {
        alert("You're not logged in")
        window.location.href = "/pages/signup.html";
        console.log("ciao");
    }
  })