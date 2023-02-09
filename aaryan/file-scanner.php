<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="assets/css/dashboard.css">
    <title>Malware URL Detector</title>
  </head>
  <body class="bg-base">
    <!-- //Include a Alert Popup code -->
    <?php include "layout/alert.php";?>

    <nav class="navbar navbar-expand-lg navbar-dark bg-orange ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Malware Scanner</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-5">
                <li class="nav-item mx-3">
                <a class="nav-link " href="index.php">URL Scanner</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link active" href="file-scanner.php">File Scanner</a>
                </li>
                
            </ul>
            </div>  
        </div>
    </nav>
    <div class="container mt-5">
      <div class="text-center">
        <img
          src="assets/images/logo.png"
          alt="Security Icon"
          class="mb-3 w-25"
        />
        <h2>Keep Your Web Browsing Safe</h2>
        <p class=" lead">
          Uplaod a file to check for malware:
        </p>
      </div>
      <form method="POST" action="functions.php?checkFile=1" enctype="multipart/form-data">
        <div class="form-group">
          <input name="file"
            type="file"
            class="form-control"
            id="urlInput"
            aria-describedby="urlHelp"
            placeholder="Uplao FIle"
          />
          <small id="urlHelp" class="form-text text-muted">
            We'll never share your files with anyone else.
          </small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </body>
</html>
