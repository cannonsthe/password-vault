<?php
// print_r($_SESSION['error']); die();
session_start();
if (isset($_SESSION['success']))
  echo'<div class="alert alert-success alert-dismissible fade show">
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <strong>Success!</strong> '.$_SESSION['success'].'
    </div>';
 

 if (isset($_SESSION['error']))
   echo' <div class="alert alert-danger alert-dismissible fade show">
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <strong>Error!</strong> '.$_SESSION['error'].'
        </div>';
  
 unset($_SESSION['success']);
 unset($_SESSION['error']);
 ?>