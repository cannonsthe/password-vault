<?php
	$conn = new mysqli("localhost","root","","mp_cart_system");
	if($conn->connect_error){
		die("Connection Failed!".$conn->connect_error);
	}
?>