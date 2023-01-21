$(displayIndexData)
let index;

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
  let currentuser = localStorage.getItem("currentuser")

  if (service === "Others") {
    service = document.getElementById("custom-input").value;
    var image = "/marcus/images/v-logo.PNG"
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
  else { //Just for postman
    var image = "/marcus/images/v-logo.PNG"
  }


  const response = await fetch("http://3.220.228.48:8080/vaultac", {
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
      currentuser: currentuser,
    }),
  });
  console.log(response);
  if (response.ok) {
    alert("Successful!")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
  else {
    alert("There was an error or an invalid token was presented")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
}

async function getServiceData() { //Get user vault array based on user id, calls displayServiceData
  const user_id = localStorage.getItem("uid");
  let currentuser = localStorage.getItem("currentuser")
  let token = localStorage.getItem("token")
  const options = {
    method: 'POST',
    body: JSON.stringify({
      user_id: user_id,
      currentuser: currentuser,
      token: token,
    }),
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await fetch(`http://3.220.228.48:8080/vaultga`, options);
    var serviceArray = await response.json();
    console.log(serviceArray);
    displayServiceData(serviceArray); // CALL FUNCTION TO DISPLAY INDIV ROWS OF DATA AFTER FETCHING THE DATA
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
    //var password = serviceArray[count].password;
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
       <td class="btn-space"> \
       <button type="button" class="btn btn-outline-secondary btn-sm view-btn" value=`+ index + ` onclick=displayIndexData(); data-bs-toggle="modal"
       data-bs-target="#viewvaultModal">View</button> \
       </td> \
       <td class="btn-space">
       <button type="button" class="btn btn-outline-secondary btn-sm view-btn" value=`+ index + ` onclick=editIndexData(); data-bs-toggle="modal"
       data-bs-target="#editvaultModal">edit</button> \
       </td> \
     </tr> `;
    table.append(cell);
    serviceCount++;
  }
}

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
  let currentuser = localStorage.getItem("currentuser")

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

  console.log(service, password, token, username, user_id, currentuser);

  const response = await fetch("http://3.220.228.48:8080/vaultac", {
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
      currentuser: currentuser,
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
    var sid = servicearray[index].sid;
    var table = document.getElementById("viewvaultModalBody");
    var footer = document.getElementById("viewvaultModalFooter")
    localStorage.setItem("sid", sid);
    table.innerHTML = "" //Clear any format
    footer.innerHTML = ""
    filterImageGet(service);

    //Modal body format
    var cell =
      `<div class="d-flex justify-content-center"><img src = ` + image + ` class = "logo-size"></div>
      <div class="row d-flex justify-content-center mb-3 mt-3" id="displayLabelService">`+ service + `</div>\
      <div class="row d-flex justify-content-center" id="displayLabelUsername">`+ username + `</div>
      <div class="row d-flex justify-content-center" id="displayLabelPassword">`+ password + `</div>`;
    table.insertAdjacentHTML('beforeend', cell);

    var footercell =
      `<div><button type="button" class="btn btn-danger" onclick="deleteIndexData();">Delete</button>\
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick=clearIndex();>Close</button>\
    </div>`
    footer.insertAdjacentHTML('beforeend', footercell);
  });
}

function editIndexData() { //Get row data via view button and display on modal and edit
  $(document).on('click', '.view-btn', async function () {
    var servicearray = await getServiceData();
    var index = $(this).val();
    console.log(servicearray[index]);
    //Modal Details
    var service = servicearray[index].service;
    var username = servicearray[index].username;
    var image = servicearray[index].image;
    var password = servicearray[index].password;
    var sid = servicearray[index].sid;
    var table = document.getElementById("editvaultModalBody");
    var footer = document.getElementById("editvaultModalFooter")
    localStorage.setItem("sid", sid);
    table.innerHTML = "" //Clear any format
    footer.innerHTML = ""
    filterImageGet(service);
    //Modal body format
    var cell =

      `<div class="d-flex justify-content-center"><img src = ` + image + ` class = "logo-size"></div>
      <div class="row d-flex justify-content-center mb-3 mt-3" id="displayLabelService">
        <input type="text" id="editService" class="form-control input-width" value="`+ service + `">
      </div>\
      <div class="row d-flex justify-content-center mb-3" id="displayLabelUsername">
        <input type="text" id="editUsername" class="form-control input-width" value="`+ username + `">
      </div>\
      <div class="row d-flex justify-content-center" id="displayLabelPassword">
        <input type="text" id="editPassword" class="form-control input-width" value="`+ password + `">
      </div>`
      ;
    table.insertAdjacentHTML('beforeend', cell);

    var footercell =
      `<div><button type="button" class="btn btn-primary" onclick="saveIndexData();">Save</button>\
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick=clearIndex();>Close</button>\
    </div>`
    footer.insertAdjacentHTML('beforeend', footercell);
  });
}

function clearIndex() {
  localStorage.removeItem("sid")
}

async function deleteIndexData() {
  index = localStorage.getItem("sid");
  let currentuser = localStorage.getItem("currentuser");
  let token = localStorage.getItem("token");
  const response = await fetch('http://3.220.228.48:8080/vaultdac', {
    method: 'DELETE',
    body: JSON.stringify({ index, currentuser, token }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  console.log(data);
  alert("Delete Successful")
  window.location.href = "/marcus/pages/passwordVault.html";
}

async function saveIndexData() { //Update modal
  let sid = localStorage.getItem("sid");
  let currentuser = localStorage.getItem("currentuser");
  let token = localStorage.getItem("token");
  let service = document.getElementById("editService").value;
  let username = document.getElementById("editUsername").value;
  let password = document.getElementById("editPassword").value;
  let image = filterImagePost(service);
  console.log(image)

  const response = await fetch("http://3.220.228.48:8080/vaultupac", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid,
      currentuser: currentuser,
      token: token,
      service: service,
      username: username,
      password: password,
      image: image,
    }),
  });
  console.log(response);
  if (response.ok) {
    alert("Update Successful!")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
  else {
    alert("There was an error")
    window.location.href = "/marcus/pages/passwordVault.html";
  }
}

function filterImageGet(service) { //Set image path based on service
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
}

function filterImagePost(service) { //Set image path based on service

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

  else {
    var image = "/marcus/images/v-logo.PNG"
  }
  return image;
}