$(document).ready(function(){
    $(".delete-record").on('click', function(){
        var id = $(this).data('id');
        var url = 'course/delete/'+id;
        if(confirm('Delete Record?')){
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function(result){
                    console.log('Deleting Record');
                    window.location.href='/course';
                },
                error: function(err){
                    console.log(err);
                }
            });
        }
    });

    $('.edit').on('click', function(){
        $('#edit-form-name').val($(this).data('name'));
        $('#edit-form-semester').val($(this).data('semester'));
        $('#edit-form-year').val($(this).data('year'));
        $('#edit-form-department_id').val($(this).data('dept_id'));
        $('#edit-form-id').val($(this).data('id'));
    });
});