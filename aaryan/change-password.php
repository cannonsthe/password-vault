<?php 
$active="password";
include("layout/header.php");
include("layout/alert.php");


?>
<style>
    input,textarea{ background-color: #f1f0f07a !important}
</style>
<main>
    <div class="container-fluid px-4"> 
        <h4 class="mt-4">Change Password &nbsp;</h4> <br> 
          <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-key me-1"></i>
                Change Password
            </div>
            <div class="card-body"> 
                <form action="functions.php?change-pass=1" method="post">
                    <label for="">Old Password</label>
                    <input type="password" name="old_pass" required class="form-control" placeholder="Old Password" value=""> <br>
                    <label for="">New Password</label>
                    <input type="password" name="new_pass" required class="form-control" placeholder="New Password" value=""> <br>
                    <label for="">Confirm Password</label>
                    <input type="password" name="confirm_pass" required class="form-control" placeholder="Confirm Password" value=""> <br>
                    <button type="submit"  class="btn btn-orange">Change Password</button>
                </form>
            </div>
        </div>
    </div>
</main> <br> <br>

<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>


<?php include("layout/footer.php");?>