<?php
	session_start();
	require 'config.php';

	// Add products into the cart table
	if (isset($_POST['pid'])) {
	  $pid = $_POST['pid'];
	  $pname = $_POST['pname'];
	  $pprice = $_POST['pprice'];
	  $pimage = $_POST['pimage'];
	  $pcode = $_POST['pcode'];
	  $pqty = $_POST['pqty'];
	  $total_price = $pprice * $pqty;

	  $stmt = $conn->prepare('SELECT product_code FROM cart WHERE product_code=?');
	  $stmt->bind_param('s',$pcode);
	  $stmt->execute();
	  $res = $stmt->get_result();
	  $r = $res->fetch_assoc();
	  $code = $r['product_code'] ?? '';

	  if (!$code) {
	    $query = $conn->prepare('INSERT INTO cart (product_name,product_price,product_image,qty,total_price,product_code) VALUES (?,?,?,?,?,?)');
	    $query->bind_param('ssssss',$pname,$pprice,$pimage,$pqty,$total_price,$pcode);
	    $query->execute();

	    echo '<div class="alert alert-success alert-dismissible mt-2">
						  <button type="button" class="close" data-dismiss="alert">&times;</button>
						  <strong>Item added to your cart!</strong>
						</div>';
	  } else {
	    echo '<div class="alert alert-danger alert-dismissible mt-2">
						  <button type="button" class="close" data-dismiss="alert">&times;</button>
						  <strong>Item already added to your cart!</strong>
						</div>';
	  }
	}

	// Get no.of items available in the cart table
	if (isset($_GET['cartItem']) && isset($_GET['cartItem']) == 'cart_item') {
	  $stmt = $conn->prepare('SELECT * FROM cart');
	  $stmt->execute();
	  $stmt->store_result();
	  $rows = $stmt->num_rows;

	  echo $rows;
	}

	// Remove single items from cart
	if (isset($_GET['remove'])) {
	  $id = $_GET['remove'];

	  $stmt = $conn->prepare('DELETE FROM cart WHERE id=?');
	  $stmt->bind_param('i',$id);
	  $stmt->execute();

	  $_SESSION['showAlert'] = 'block';
	  $_SESSION['message'] = 'Item removed from the cart!';
	  header('location:cart.php');
	}

	// Remove all items at once from cart
	if (isset($_GET['clear'])) {
	  $stmt = $conn->prepare('DELETE FROM cart');
	  $stmt->execute();
	  $_SESSION['showAlert'] = 'block';
	  $_SESSION['message'] = 'All Item removed from the cart!';
	  header('location:cart.php');
	}

	// Set total price of the product in the cart table
	if (isset($_POST['qty'])) {
	  $qty = $_POST['qty'];
	  $pid = $_POST['pid'];
	  $pprice = $_POST['pprice'];

	  $tprice = $qty * $pprice;

	  $stmt = $conn->prepare('UPDATE cart SET qty=?, total_price=? WHERE id=?');
	  $stmt->bind_param('isi',$qty,$tprice,$pid);
	  $stmt->execute();
	}

	//THE KEY FOR ENCRYPTION AND DECRYPTION
	$key = 'qkwjdiw239&&jdafweihbrhnan&^%$ggdnawhd4njshjwuuO';

	//ENCRYPT FUNCTION
	function encryptthis($data, $key) {
	$encryption_key = base64_decode($key);
	$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
	$encrypted = openssl_encrypt($data, 'aes-256-cbc', $encryption_key, 0, $iv);
	return base64_encode($encrypted . '::' . $iv);
	}
	
	//DECRYPT FUNCTION
	function decryptthis($data, $key) {
	$encryption_key = base64_decode($key);
	list($encrypted_data, $iv) = array_pad(explode('::', base64_decode($data), 2),2,null);
	return openssl_decrypt($encrypted_data, 'aes-256-cbc', $encryption_key, 0, $iv);
	}

    // Checkout and save customer info in the orders table
    if (isset($_POST['action']) && isset($_POST['action']) == 'order') {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$products = $_POST['products'];
		$grand_total = $_POST['grand_total'];
		$address = $_POST['address'];
		$cardname = $_POST['cardname'];
	  	$cardnumber = $_POST['cardnumber'];
	  	$cvv = $_POST['cvv'];
	  	$expirydate = $_POST['expirydate'];
	  	$billing_address = $_POST['billing_address'];
		$cardnameencrypted=encryptthis($cardname, $key);
		$cardnumberencrypted=encryptthis($cardnumber, $key);
		$cvvencrypted=encryptthis($cvv, $key);
		$cardnamedecrypted=decryptthis($cardname, $key);
		$cardnumberdecrypted=decryptthis($cardnumber, $key);
		$cvvdecrypted=decryptthis($cvv, $key);

		$data = 'Order has been placed successfully!';
  
		$stmt = $conn->prepare('INSERT INTO orders (name,email,phone,address,products,amount_paid)VALUES(?,?,?,?,?,?)');
		$stmt->bind_param('ssssss',$name,$email,$phone,$address,$products,$grand_total);
		$stmt->execute();
		$stmt2 = $conn->prepare('INSERT INTO creditcard (cardname, cardnumber, cvv, expirydate, billing_address)VALUES(?,?,?,?,?)');
	  	$stmt2->bind_param('sssss',$cardnameencrypted,$cardnumberencrypted,$cvvencrypted,$expirydate,$billing_address);
	  	$stmt2->execute();
		$stmt3 = $conn->prepare('DELETE FROM cart');
		$stmt3->execute();

		echo $data;
	  }

	// Pay and store credit card details in table
	//if (isset($_POST['action2']) && isset($_POST['action2']) == 'payment') {
	  //$cardname = $_POST['cardname'];
	  //$cardnumber = $_POST['cardnumber'];
	  //$cvv = $_POST['cvv'];
	  //$expirydate = $_POST['expirydate'];
	  //$billing_address = $_POST['billing_address'];

	  //$data = 'Order has been placed successfully!';

	  //$stmt = $conn->prepare('INSERT INTO creditcard (cardname, cardnumber, cvv, expirydate, billing_address)VALUES(?,?,?,?,?)');
	  //$stmt->bind_param('sssss',$cardname,$cardnumber,$cvv,$expirydate,$billing_address);
	  //$stmt->execute();

	  //echo($data);
	//}
?>	