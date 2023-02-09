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
                <a class="nav-link active" href="index.php">URL Scanner</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link" href="file-scanner.php">File Scanner</a>
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
          Enter a URL to check for malware:
        </p>
      </div>
      <form method="POST" action="functions.php?checkUrl=1">
        <div class="form-group">
          <input name="url"
            type="text"
            class="form-control"
            id="urlInput"
            aria-describedby="urlHelp"
            placeholder="Enter URL"
          />
          <small id="urlHelp" class="form-text text-muted">
            We'll never share your URL with anyone else.
          </small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
      <script src="assets/js/dashboard.js"></script>
  </body>
</html>
