
<?php 
$active="words";
include("layout/header.php");
include("layout/alert.php");

$result = mysqli_query($conn,"SELECT * from spam_words ");
$words=mysqli_fetch_all($result,MYSQLI_ASSOC);


?>

<main>
  <div class="container-fluid px-4"> 
    
  <button type="button" class="btn btn-orange float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Words
        </button>
    <h4 class="mt-4">Spam Words </h4>   <br>
  

      <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-bug me-1"></i>
            Spam Words 
        </div>
        <div class="card-body">
            <table id="datatablesSimple" class="table">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                 <?php  if (count($words)>0){
                    
                    foreach ($words as $item){?>
                    <tr> 
                        <td><?=$item['word']?></td>
                        <td><?=date('d M, Y',strtotime($item['created_at']))?></td>

                        <td class="">
                            <button class="btn btn-sm btn-warning" onclick='editModal(`<?=$item["id"]?>`,`<?=$item["word"]?>`)' data-bs-toggle="modal" data-bs-target="#editModal"><i class="fas fa-pencil-alt"></i></button>
                            <a href="functions.php?del-word=1&id=<?=$item['id']?>" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure? you want to delete')"><i class="fas fa-trash"></i></a>
                        </td>

                    </tr>
                    <?php }
                    }
                    else{
                       echo '<h6 class="text-danger">No Data is found</h6>';
                    }?>
                </tbody>
            </table>
        </div>
    </div>
</div>
</main> <br> <br>

 <!--Add New  Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Word</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
          <form action="functions.php?add-word=1" method="post" >
            <label for="">Spam Words <small>(you can add multiple words at once using comma separated)</small></label>
            <input type="text" name="words" required class="form-control mb-3" placeholder="Write Words here E.g, Free, Gift, Win, Bonus, Surprise" >
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-orange">Submit</button></form>
      </div>
    </div>
  </div>
</div>

  <!--Edit  Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Spam Word </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body"> 
          <form action="functions.php?edit-word=1" method="post" enctype="multipart/form-data">
          
              <input type="hidden" name="id" id="id">
              <label for="">Word</label>
            <input type="text" name="word" id="word" required class="form-control mb-3" placeholder="Enter SPam Word">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-orange">Save changes</button></form>
        </div>
      </div>
    </div>
  </div>

<script>

function editModal(id,word){
  
    $('#id').val(id);
    $('#word').val(word);

}

</script>

<?php include("layout/footer.php");?>
