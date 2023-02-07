//If already logged in, do not allow them to go main page, login page or signup page
$(function () {
    var token = localStorage.getItem("token");
    if (token != null) {
        window.location.href = "/marcus/pages/vaultIndex.html";
    } else {
        null;
    }
})






