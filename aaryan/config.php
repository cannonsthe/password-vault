<?php

$host = 'localhost';
$user = 'root';
$pass = '';
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