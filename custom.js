$(".table-trending .fa-thumbs-down").click(function(){
	// $("#b1695214385005").remove()
    $("#b1695214244627").remove()
	var element = document.createElement("input");
	element.type = "hidden";
	element.name = "Line Item Reject";
	element.id = "b1695214244627";
	element.value=$(this).parents("td").attr('value')
	document.getElementById("ao-form-f20b3824-1f32-49a4-9aa3-628cc8b95c5c").appendChild(element); 
})