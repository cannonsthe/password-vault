
<?php include "config.php";
session_start();

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
        <title><?=$appName?></title>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <link href="assets/css/dashboard.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
    </head>
<?php include "layout/alert.php"?>

    <body class="bg-dark" data-new-gr-c-s-check-loaded="14.1078.0" data-gr-ext-installed="">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header text-center">
                                    <img src="assets/images/logo.png" width="150px" alt="" srcset="">
                                        
                                        <h3 class="text-center font-weight-light my-3">Login to your Account</h3></div>
                                    <div class="card-body"> 
                                        <form method="POST" action="functions.php?login=1">
                                            <div class="form-floating mb-3">
                                                <input class="form-control " required id="inputEmail" type="email" name="email" placeholder="name@example.com" data-temp-mail-org="0">
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" required type="password" name="password" placeholder="Password">
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="">
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <!-- <a class="btn btn-link small" href="forgot-password">
                                                        Forgot Your Password
                                                    </a> -->
                                                <button class="btn btn-orange" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="assets/js/dashboard.js"></script>


    </body>


