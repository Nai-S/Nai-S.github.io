$(document).ready(function(){
	jQuery(function($){
	   $("#phone").mask("(999) 999-9999 ");
	});

});

function parsePhone(){


	if ($("#myForm").valid()){	
		// Initializing variables
		
		var phone = $('#phone').val();
		var phoneRep = phone.replace(")", "-"); //replacing the closing parenthesis with a hyphen helps isolate the first three digits after the area code
		
		
		// Splitting user input

                var tokens = phoneRep.split( '-' );

		// Output data tokens
		$('#areaCode').val(tokens[0].substr(1,3));     //get the area code without displaying the parenthesis in the output, using substr()
		$('#first3').val(tokens[1]);
		$('#last4').val(tokens[2]);
	
        
		//  another way to get the results
         // var aCode = document.forms["myForm"].elements["phone"].value;
         // document.forms["myForm"].elements["areaCode"].value = aCode.substr( 1, 3 );
   } 
 else {
 		
		return false;
		      }
  }