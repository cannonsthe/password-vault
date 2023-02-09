<?php include('config.php'); 
session_start();
error_reporting(0);
if(!isset($_SESSION['user'])){
    $_SESSION['error']="You need to login first.";
    header("location:login.php");
}
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


    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand--> 
            <a class="navbar-brand ps-3" href="dashboard.php">
                <img src="assets/images/favicon.png" width="70" class=" p-2" alt="" srcset=""> Scanner</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"> 
                            <li><a class="dropdown-item" href="change-password.php">Change Password</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="functions.php?logout=1"  >Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav"><hr class="m-0 mb-2">
                            <div class="user text-center mx-2"> 
                                <h6 class="text-white mt-2">Hello, <?=$_SESSION['user']['name']?></h6>
                            </div>

                            <div class="sb-sidenav-menu-heading">Nav Links</div> 
                            <a class="nav-link <?=($active=='dashboard')?'active':''?>" href="dashboard.php">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                           
                            <a class="nav-link <?=($active=='words')?'active':''?>" href="words.php">
                                <div class="sb-nav-link-icon"><i class="fas fa-bug"></i></div>
                               Spam Words
                            </a>
                          
                           <!-- <?php if($_SESSION['user']['role']=='Admin'){?>
                            <a class="nav-link <?=($active=='users')?'active':''?>" href="users.php">
                                <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                               System Users
                            </a>
                            <?php }?> -->
                           
                           
                            <a class="nav-link <?=($active=='password')?'active':''?>" href="change-password.php">
                                <div class="sb-nav-link-icon"><i class="fas fa-key"></i></div>
                                Change Password
                            </a>
                            <a class="nav-link " href="functions.php?logout=1">
                                <div class="sb-nav-link-icon"><i class="fas fa-sign-out-alt"></i></div>
                                Logout
                            </a>
                            
                        </div>
                    </div>
                    
                </nav>
            </div>
            <div id="layoutSidenav_content">
        