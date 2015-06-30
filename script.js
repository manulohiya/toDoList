$(function() {

var $newItem = $('#new-item');
var $itemName = $('#item-name');
var $itemDesc = $('#item-description')

$newItem.on('submit',function(event) {
	console.log("submitting form");
	event.preventDefault();

	$('#toDoList').append($('<li>').append($itemName.val()).append(": ").append($itemDesc.val()));
//	$itemName.attr("placeholder", "What are the things you want to accomplish today?");
//	$itemDesc.attr("placeholder", "Enter task description" );

});

//$itemName.on('mouseover',function(event) {
//$itemName.text("Hello");
//$(this).attr("placeholder", "Type your answer here");
//});



$('#toDoList').on('click','li',function(event) {
	console.log("clicking item");
	event.preventDefault();
	$(this).wrap("<strike>");

});


});