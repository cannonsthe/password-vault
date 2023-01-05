$(function(){ //Execute to check token
    var token = localStorage.getItem("token");
    if (token == null) {
        window.location.href = "/pages/signup.html";
        console.log("ciao");
    } else {
        
    }
  })