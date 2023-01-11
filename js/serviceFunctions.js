function generatePassword(length) {
  // Define the possible characters for the password
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  let password = '';

  for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

async function Addservice() {
  var service = document.getElementById("serviceForm").value;
  let password = generatePassword(12);
  if (service == "others"){
    var service = document.getElementById("custom-input").value;
  }
  const response = await fetch("http://127.0.0.1:8080/vaultac", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: localStorage.getItem("uid"),
      service: service,
      username: document.getElementById("serviceUsername").value,
      password: password,
    }),
  });
  console.log(response);
}