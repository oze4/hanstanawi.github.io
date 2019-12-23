$(document).ready(function(){
    $(".delete-record").on('click', function(){
        var id = $(this).data('id');
        var url = '/delete/'+id;
        if(confirm('Delete Record?')){
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function(result){
                    console.log('Deleting Record');
                    window.location.href='/';
                },
                error: function(err){
                    console.log(err);
                }
            });
        }
    });

    $('.edit').on('click', function(){
        $('#edit-form-name').val($(this).data('name'));
        $('#edit-form-chairname').val($(this).data('chairname'));
        $('#edit-form-date').val($(this).data('date'));
        $('#edit-form-location').val($(this).data('location'));
        $('#edit-form-id').val($(this).data('id'));
    });
});