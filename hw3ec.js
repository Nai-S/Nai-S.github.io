

$(document).ready(function(){
    $("#multiply").validate({
	  rules: 
	  {
		userAnswer: { required: true, number: true }
	  }
	  
	});	
    
var num1 = document.getElementById("num1").innerHTML = Math.floor(Math.random() * 10);
var num2 = document.getElementById("num2").innerHTML = Math.floor(Math.random() * 10);
});

function getAnswer(){
	if ($("#multiply").valid()) {
	
	var userAnswer = parseInt(document.getElementById("userAnswer").value);
	var num1 = parseInt(document.getElementById("num1").innerHTML);
	var num2 = parseInt(document.getElementById("num2").innerHTML);
	
	var rightAns = num1 * num2;
	

			  if (rightAns == userAnswer) {
			 		document.getElementById("results").innerHTML = " Very good!";
			    	document.getElementById("userAnswer").value = "";
					
					setTimeout(function () {
						var contEnd = prompt ("Want to try another one?", "yes")
						if (contEnd == "yes") {
							window.location.reload();
						}
						else {
							prompt( "Thank you, Goodbye!");
						}
					}, 500);
				}
			

	 		else {
    			document.getElementById("results").innerHTML = "No. Please try again.";
    			document.getElementById("userAnswer").value = "";
    			// document.getElementById("userAnswer").focus();
		
				}

} //end of if valid ()
} //end of getAnswer ()




