<?php
include "config.php";
session_start();
//Login Function
if(isset($_GET['login']) && $_GET['login']==1){
    $data=$_POST;
    $hash_pass=md5($_POST['password']);
    $result = mysqli_query($conn,"SELECT name,email,phone,role,created_at from users where email='$data[email]' and password='$hash_pass'");

    if(mysqli_num_rows($result)>0){
       $user= mysqli_fetch_assoc($result);
        $_SESSION["user"] = $user;
        $_SESSION["success"] = "Login Success.";
		header("location:dashboard.php");
    }
    else{
        $_SESSION["error"] = "Email or Password is wronged.";
		header("location:login.php");
    }

}
//Register function
if(isset($_GET['addUser']) && $_GET['addUser']==1){
    $data=$_POST;
    $hash_pass=md5($_POST['password']);
    $result = mysqli_query($conn,"SELECT 1 from users where email='$data[email]'");
    $row=mysqli_num_rows($result);
    if(mysqli_num_rows($result)>0){
        $_SESSION["error"] = "Email is already registered.";
		header("location:users.php");
    }
    else{
        $result = mysqli_query($conn,"INSERT INTO `users`(`name`,`email`, `password`,`phone`)
			VALUES('$name','$email','$phone')");
    }

			
}
//Logout Function
if(isset($_GET['logout']) && $_GET['logout']==1){
        unset($_SESSION["user"]);
		header("location:login.php");
}

//Add Income Function
if(isset($_GET['add-word']) && $_GET['add-word']==1){
    
    $words=explode(',',$_POST['words']);
    try {
        foreach ($words as $word) {
        
            $result = mysqli_query($conn,"INSERT INTO `spam_words`(`word`)
            VALUES('$word')");
            $_SESSION['success']="Word added sucessfully.";
        }

        header("location:words.php");

    } catch (\Throwable $th) {
        // throw $th;
    }

    
}

//Delete Word Function
if(isset($_GET['del-word']) && $_GET['del-word']==1){

    try {
        $result = mysqli_query($conn,"DELETE FROM spam_words WHERE id='$_GET[id]'");
        $_SESSION['success']="Word is  deleted successfully.";
        header("location:words.php");

    } catch (\Throwable $th) {
        throw $th;
    }

    
}
//Edit WOrd Function
if(isset($_GET['edit-word']) && $_GET['edit-word']==1){
    $data=$_POST;
    try {
        $result = mysqli_query($conn,"UPDATE `spam_words` SET `word`='$data[word]' WHERE `id`='$data[id]'");
        $_SESSION['success']="Word updated sucessfully.";
        header("location:words.php");

    } catch (\Throwable $th) {
        // throw $th;
    }

    
}
//////////////////////////////////
//Check malware url
if(isset($_GET['checkUrl']) && $_GET['checkUrl']==1){
    $data=$_POST;
    $url=$_POST['url'];
    $result = mysqli_query($conn,"SELECT * FROM spam_words");
    $words= mysqli_fetch_all($result,MYSQLI_ASSOC);
    foreach ($words as $word) {

        if (strpos($url, $word['word']) !== false) {
            $_SESSION["error"] = "URL is detected as Spam. It may contains malware content";
            header("location:index.php");
            exit;
        } 
    }
    $_SESSION["success"] = "URL is Safe";
    header("location:index.php");
}
//Check malware Files
if(isset($_GET['checkFile']) && $_GET['checkFile']==1){
    $data=$_POST;
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];
        $file_name = $file['name'];
    }
    $result = mysqli_query($conn,"SELECT * FROM spam_words");
    $words= mysqli_fetch_all($result,MYSQLI_ASSOC);
    foreach ($words as $word) {

        if (strpos($file_name, $word['word']) !== false) {
            $_SESSION["error"] = "File is detected as Spam. It may contains malware content";
            header("location:file-scanner.php");
        } 
    }
    $_SESSION["success"] = "File is Safe";
    header("location:file-scanner.php");
}
//Chaneg Password Function
if(isset($_GET['change-pass']) && $_GET['change-pass']==1){
    $data=$_POST;
        if($_POST['new_pass']!==$_POST['confirm_pass']){
            $_SESSION['error']="New Password is not matched with Confirm Password.";
            header("location:change-password.php");
        }
        $hash_pass=md5($_POST['new_pass']);
        $old_pass=md5($_POST['old_pass']);
        $email=$_SESSION['user']['email'];
        $result = mysqli_query($conn,"SELECT 1 FROM users WHERE `email`='$email' AND `password`='$old_pass' ");
        // print_r(mysqli_num_rows($result)); exit;

        if(mysqli_num_rows($result)>0){
            $result = mysqli_query($conn,"UPDATE `users` SET `password`='$hash_pass' WHERE `email`='$email'");
            $_SESSION['success']="Password changed successfully";
            header("location:change-password.php");
        }
        else{
            $_SESSION['error']="Old Password is not matched";
            header("location:change-password.php");
        }
       
        
        

   
}

?>