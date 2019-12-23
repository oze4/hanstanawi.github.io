$(document).ready(function(){
    $(".delete-record").on('click', function(){
        var id = $(this).data('id');
        var url = '/teachers/delete/'+id;
        if(confirm('Delete Record?')){
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function(result){
                    console.log('Deleting Record');
                    window.location.href='/teachers';
                },
                error: function(err){
                    console.log(err);
                }
            });
        }
    });

    $("#myBtn").click(function(){
        var str = $("#myInput").val();
        var url = '/teachers/'+ str;
        if(confirm('Search Record?')){
            $.ajax({
                url: url,
                success: function(result){
                    console.log('Searching');
                    window.location.href='/teachers/';
                },
                error: function(err){
                    console.log(err);
                }
            });
        }
    });
  

    // $(".search").on('click', function(){
    //     // var id = $(this).data('id');
    //     var id = $('#name-search').val();
    //     var url = '/teachers/'+id;
    //     if(confirm('Delete Record?')){
    //         $.ajax({
    //             url: url,
    //             type: 'GET',
    //             success: function(result){
    //                 console.log('Searching');
                    
    //             },
    //             error: function(err){
    //                 console.log(err);
    //             }
    //         });
    //     }
    // });




    $('.edit').on('click', function(){
        $('#edit-form-name').val($(this).data('name'));
        $('#edit-form-address').val($(this).data('address'));
        $('#edit-form-office').val($(this).data('office'));
        $('#edit-form-bdate').val($(this).data('bdate'));
        $('#edit-form-phone').val($(this).data('phone'));
        $('#edit-form-gender').val($(this).data('gender'));
        $('#edit-form-rank').val($(this).data('rank'));
        $('#edit-form-speciality').val($(this).data('speciality'));
        $('#edit-form-dept_id').val($(this).data('dept_id'));
        $('#edit-form-photo').val($(this).data('photo'));
        $('#edit-form-ssn').val($(this).data('ssn'));
    });
});