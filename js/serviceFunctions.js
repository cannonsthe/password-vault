async function Addservice() {
    const response = await fetch("http://127.0.0.1:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("uid"),
        service: document.getElementById("service").value,
        username: document.getElementById("serviceUsername").value,
        password: document.getElementById("servicePassword").value,
      }),
    });
    console.log(response);
  }