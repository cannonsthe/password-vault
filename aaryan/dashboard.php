
<?php 
$active="dashboard";
include("layout/header.php");
include("layout/alert.php");


$result = mysqli_query($conn,"SELECT COUNT(*) as total from spam_words");
$total_words=mysqli_fetch_assoc($result)['total'];

?>

<main>
    <div class="container-fluid px-4">
        <div class="row mt-4">
            <div class="col-md-5">
            <h4 class="">Dashboard  &nbsp;<a class="btn btn-sm btn-orange" href="words.php">Add New Word</a> </h4> <br>
       
            </div>
           
        </div>
       <br>
       <!-- Boxes -->
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <div class="card border-primary text-dark mb-4">
                    <div class="card-body text-bold">Total Spam Words</div>
                    <div class="card-footer bg-white d-flex align-items-center justify-content-between">
                        <h5><?=number_format($total_words)?></h5> <h5><i class="fas fa-bug text-primary"></i></h5>
                    </div>
                </div>
            </div>
          
        </div>

    </div>
</main>

<?php include("layout/footer.php");?>
