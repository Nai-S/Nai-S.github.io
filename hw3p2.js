
  	$( function() {
   		$( document ).tooltip();
 	 });


$(document).ready(function(){
    $("#salesEarnForm").validate({
	 
	  rules: 
	  {
		it1: { required: true, number: true, min:0 },
        it2: { required: true, number: true, min:0 },
        it3: { required: true, number: true, min:0 },
        it4: { required: true, number: true, min:0 }
	  }
	});	  
});



function getEarnings(){
	if ($("#salesEarnForm").valid()) {

	var nsold1 = parseInt(document.getElementById("it1").value);
	var nsold2 = parseInt(document.getElementById("it2").value);
	var nsold3 = parseInt(document.getElementById("it3").value);
	var nsold4 = parseInt(document.getElementById("it4").value);
	// console.log("it1");
	document.getElementById("nsold1").value = nsold1;
	document.getElementById("nsold2").value = nsold2;
	document.getElementById("nsold3").value = nsold3;
	document.getElementById("nsold4").value = nsold4;
	// console.log("nsold1");


	var tot1 = nsold1*239.99;
	var tot2 = nsold2*129.75;
	var tot3 = nsold3*99.95;
	var tot4 = nsold4*350.89;
	// console.log("tot1");
	document.getElementById("tot1").value = tot1.toFixed(2);
	document.getElementById("tot2").value = tot2.toFixed(2);
	document.getElementById("tot3").value = tot3.toFixed(2);
	document.getElementById("tot4").value = tot4.toFixed(2);

	var totAmtSold = tot1+tot2+tot3+tot4;
	// console.log("totAmtSold");
	document.getElementById("totAmtSold").value = totAmtSold.toFixed(2);

	var wkEarn = 250 + (.09 * totAmtSold);
	// console.log("wkEarn");
	document.getElementById("wkEarn").value = wkEarn.toFixed(2);
	
	}
}


  	