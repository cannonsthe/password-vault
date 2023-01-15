$(displayIndexData)

function generatePassword(length) { //Secure random password generator
  // Define the possible characters for the password
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  let password = '';

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

async function AddserviceGenerate() { // If user is allowing us to generate a password for them
  let service = document.getElementById("serviceForm").value;
  let password = generatePassword(12);
  let token = localStorage.getItem("token");

  if (service === "Others") {
    service = document.getElementById("custom-input").value;
    //Theres already a default value if null in SQL DB
  }
  else if (service === "Twitter") {
    var image = "/marcus/images/twitter.jpg"
  }
  else if (service === "Gmail") {
    var image = "/marcus/images/gmail.png"
  }
  else if (service === "Singpass") {
    var image = "/marcus/images/singpass.png"
  }
  else if (service === "Instagram") {
    var image = "/marcus/images/instagram.jpg"
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
      image: image,
      token: token,
    }),
  });
  console.log(response);
  if (response.ok) {
    alert("Successful!")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
  else {
    alert("There was an error")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
}

async function getServiceData() { //Get user vault array based on user id, calls displayServiceData
  const user_id = localStorage.getItem("uid");
  const options = {
    method: 'POST',
    body: JSON.stringify({ user_id }),
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await fetch(`http://127.0.0.1:8080/vaultga`, options);
    var serviceArray = await response.json();
    console.log(serviceArray);
    displayServiceData(serviceArray); //
    return serviceArray;
  } catch (error) {
    console.log(error);
  }
}

async function displayServiceData(serviceArray) { //Display Indiv rows of accs
  var table = $("#serviceTable");
  table.html("");
  var serviceCount = 0;
  totalService = serviceArray.length;
  for (var count = 0; count < totalService; count++) {
    var service = serviceArray[count].service;
    var username = serviceArray[count].username;
    var image = serviceArray[count].image;
    var password = serviceArray[count].password;
    var index = count;
    var cell = `<tr> \
       <td> \ 
         `+ index + `
       </td > \
       <td> \ 
       <img src = `+ image + ` class = "logo-size">
       </td > \
       <td> \ 
         `+ service + `
       </td > \
       <td> \ 
       ` + username + `
       </td > \
       <td> \ 
         `+ password + `
       </td > \
       <td > \
       <button type="button" class="btn btn-outline-light btn-sm view-btn" value=`+ index + ` onclick=displayIndexData(); data-bs-toggle="modal"
       data-bs-target="#viewvaultModal">View</button> \
       </td> \
     </tr> `;
    table.append(cell);
    serviceCount++;
  }
}

function displayIndexData() { //Get row data via view button and display on modal
  $(document).on('click', '.view-btn', async function () {
    var servicearray = await getServiceData();
    var index = $(this).val();
    console.log(servicearray[index]);

    //Modal Details
    var service = servicearray[index].service;
    var username = servicearray[index].username;
    var image = servicearray[index].image;
    var password = servicearray[index].password;
    var table = document.getElementById("viewvaultModalBody");
    table.innerHTML = "" //Clear any format
    if (service === "Others") {
      //Theres already a default value if null in SQL DB
      var image = "/marcus/images/v-logo.PNG"
    }
    else if (service === "Twitter") {
      var image = "/marcus/images/twitter.jpg"
    }
    else if (service === "Gmail") {
      var image = "/marcus/images/gmail.png"
    }
    else if (service === "Singpass") {
      var image = "/marcus/images/singpass.png"
    }
    else if (service === "Instagram") {
      var image = "/marcus/images/instagram.jpg"
    }
    
    //Modal body format
    var cell =
      `<div class="d-flex justify-content-center"><img src = ` + image + ` class = "logo-size"></div>
      <div class="row d-flex justify-content-center mb-3 mt-3" id="displayLabelService">`+ service + `</div>\
      <div class="row d-flex justify-content-center" id="displayLabelUsername">`+ username + `</div>
      <div class="row d-flex justify-content-center" id="displayLabelUsername">`+ password + `</div>`;

    table.insertAdjacentHTML('beforeend', cell);
  });
};


function loadModalService() { //Modal for existing password
  var table = document.getElementById("addsModal");
  table.innerHTML = "" //Clear any format
  var service = document.getElementById("addsForm").value;
  var username = document.getElementById("addsUsername").value;
  if (service === "Others") {
    service = document.getElementById("custom-input").value;
    //Theres already a default value if null in SQL DB
    var image = "/marcus/images/v-logo.PNG"
  }
  else if (service === "Twitter") {
    var image = "/marcus/images/twitter.jpg"
  }
  else if (service === "Gmail") {
    var image = "/marcus/images/gmail.png"
  }
  else if (service === "Singpass") {
    var image = "/marcus/images/singpass.png"
  }
  else if (service === "Instagram") {
    var image = "/marcus/images/instagram.jpg"
  }

  var cell =
    `<div class="d-flex justify-content-center"><img src = ` + image + ` class = "logo-size"></div>
    <div class="row d-flex justify-content-center mb-3 mt-3" id="addsLabelService">`+ service + `</div>\
     <div class="row d-flex justify-content-center" id="addsLabelUsername">`+ username + `</div>`;

  table.insertAdjacentHTML('beforeend', cell);
}

async function AddserviceExisting() { //Function to POST for existing password
  let service = document.getElementById("addsForm").value;
  let password = document.getElementById("addsPassword").value;
  let token = localStorage.getItem("token");
  let username = document.getElementById("addsUsername").value;
  let user_id = localStorage.getItem("uid");

  if (service === "Others") {
    service = document.getElementById("custom-input").value;
    //Theres already a default value if null in SQL DB
  }
  else if (service === "Twitter") {
    var image = "/marcus/images/twitter.jpg"
  }
  else if (service === "Gmail") {
    var image = "/marcus/images/gmail.png"
  }
  else if (service === "Singpass") {
    var image = "/marcus/images/singpass.png"
  }
  else if (service === "Instagram") {
    var image = "/marcus/images/instagram.jpg"
  }


  const response = await fetch("http://127.0.0.1:8080/vaultac", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      service: service,
      username: username,
      password: password,
      image: image,
      token: token,
    }),
  });
  console.log(response);
  if (response.ok) {
    alert("Successful!")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
  else {
    alert("There was an error")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
}