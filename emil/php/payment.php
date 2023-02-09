<?php
  require 'config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Payment</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css' />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' />
</head>
<body>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="index.php">Medical Supply Store</a>
    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" href="index.php">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-th-list mr-2"></i>Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="checkout.php"><i class="fas fa-money-check-alt mr-2"></i>Checkout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cart.php"><i class="fas fa-shopping-cart"></i> <span id="cart-item" class="badge badge-danger"></span></a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 px-4 pb-4" id="payment">
      <form action2="" method="post" id="placePayment">
        <h4 class="text-center p-2">Enter Your Credit Card Details</h4>
          <div class="form-group">
            <input type="text" name="cardname" class="form-control" placeholder="Enter Cardholder Name" required>
          </div>
          <div class="form-group">
            <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" name="cardnumber" class="form-control" placeholder="Enter Card Number" required>
          </div>
          <div class="form-group">
            <input type="tel" inputmode="numeric" pattern="[0-9]{3}" maxlength="3" name="cvv" class="form-control" placeholder="Enter CVV" required>
          </div>
          <div class="form-group">
            <input type="text" pattern="[0-1]{1}[0-2]{1}[/]{1}[0-9]{2}" maxlength="5" name="expirydate" class="form-control" placeholder="Enter Expiry Date (MM/YY)" required>
          </div>
          <div class="form-group">
            <textarea name="billing_address" class="form-control" rows="3" cols="10" placeholder="Enter Billing Address Here..."></textarea>
          </div>
          <div class="form-group">
            <input type="submit" name="submit" value="Place Payment" class="btn btn-danger btn-block">
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>

  <script type="text/javascript">

  $(document).ready(function() {

    // Sending Form data to the server
    $("#placePayment").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: 'action.php',
        method: 'post',
        data: $('form').serialize() + "&action2=payment",
        success: function(response) {
          $("#payment").html(response);
        }
      });
    });
  });
  </script>

</body>
</html>