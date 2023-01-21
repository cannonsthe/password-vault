//Check token, only allow them to access protected page if they're logged in
$(function () {
    var token = localStorage.getItem("token");
    if (token != null) {
        null
    } else {
        alert("You're not logged in")
        window.location.href = "/marcus/pages/signup.html";
        console.log("ciao");
    }
})

$('#serviceForm').on('change', function () {
    if ($(this).val() == $('#others-option').val()) {
        $('#custom-input').show();
    } else {
        $('#custom-input').hide();
    }
});

$('#addsForm').on('change', function () {
    if ($(this).val() == $('#others-option').val()) {
        $('#custom-input').show();
    } else {
        $('#custom-input').hide();
    }
});



