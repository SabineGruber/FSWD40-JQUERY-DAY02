$(document).ready(function() {
$("#box1").click(function() {
	alert("You clicked on the gift box");
});
$("#santa1").click(function() {
	alert("You clicked on the Santa");
});
$("#bell1").click(function() {
	alert("You clicked on the bell");
});

/*$(".santa2").click(function() {
   $(this).hide(1000);
}); */

$(".santa2").on("click",function(){
	$(this).slideUp(1000);
})











});