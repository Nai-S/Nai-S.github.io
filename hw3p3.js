// C = 5/9 * (F - 32) 

// // F = (9/5 * C) + 32

//[Note that 0 degrees Celsius = 32 degrees Fahrenheit].

$(document).ready(function(){
    $("#celsFahr").validate({
	  rules: 
	  {
		degInp: { required: true, number: true, min:0 }
	  }
	}); 
	 $("#degInp").focus(function () {
           $(this).val(" ");
           $("#results").val(" ");
        });	  
});

function getCel(){
	if ($("#celsFahr").valid()) {

		var input, c, f;

		input = parseInt(document.getElementById("degInp").value);
		f = input;
		c = 5/9 * (f -32);
		document.getElementById("results").value = ("The answer is ") + Math.round( c ) + (" Celsius.") ;
		console.log("I am in the results"); 

	} //end if valid ()
} //end getCel ()
function getFahr(){
	if ($("#celsFahr").valid()) {

		var input, c, f;

		input = parseInt(document.getElementById("degInp").value);
		c = input;
		f = (9/5 * c) + 32;
		document.getElementById("results").value = ("The answer is ") + Math.round( f ) + (" Fahrenheit.") ;
		console.log("I am in the results");
	} //end of if valid ()
} //end of getFahr ()

