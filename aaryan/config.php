<?php

$host = 'aaryan-db.ckohq00bj3ax.us-east-1.rds.amazonaws.com';
$user = 'admin';
$pass = '12345678';
$dbName = 'scanner';
$webLink = 'http://localhost/Flowered/';
$appName = 'Scanner - File & URL Scanner';
$currency = 'INR';


    $conn = mysqli_connect($host,$user,$pass,$dbName);

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

?>