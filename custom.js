$(".table-trending .fa-thumbs-down").click(function () {
    // $("#b1695214385005").remove()
    $("#b1695214385005").val('')
    $("#b1695214244627").val($(this).parents("tr").children(".notes").attr('id'));
})

$(".table-trending .fa-thumbs-up").click(function () {
    // $("#b1695214244627").remove()
    $("#b1695214244627").val('')
    $("#b1695143622538").val('Approved')
    $("#b1695214385005").val($(this).parents("tr").children(".notes").attr('id'));

    $('#ao-form-f20b3824-1f32-49a4-9aa3-628cc8b95c5c').submit();
})