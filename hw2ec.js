
$(document).ready(function(){

  		$("#flip").click(function(){
    	$("#panel").slideToggle("slow");

        var flip= document.getElementById("flip").getAttribute("aria-expanded");
        if (flip == "true") {
            flip = "false"
        }
        else {
            flip = "true"
        }
            document.getElementById("flip").setAttribute("aria-expanded", flip);
    		});
		
		$("#usV").focus(function() {
		$(this).css("background-color","#ed8480");    			
  			});
	 }); 	



function calcRate() {
	var usDol, pound, euro, yen, canDol, peso, poundR, euroR, yenR, canR, pesoR;
	var usV, poundV, euroV, yenV, canV, pesoV;
	var errorMessageEx = "<strong style='color:red;font-size:1.1em;font-weight:bold;text-decoration:underline;'>Invalid input. Please input a US dollar amount!</strong>";
    
			usDol = document.getElementById("usV").value;
			usV = parseFloat(usDol);

  	
    		poundR = 1.27;
    		euroR = 1.31;
    		yenR = 108.38;
    		canR = 0.89;
    		pesoR = 19.11; 
    	


    		if (isNaN(usV)) {
    			document.getElementById("errorEx").innerHTML = errorMessage;
    			document.getElementById("poundV").value = "";
    			document.getElementById("euroV").value = "";
    			document.getElementById("yenV").value = "";
    			document.getElementById("canV").value = "";
    			document.getElementById("pesoV").value = "";
    		}
    		else {
    			poundV = usV*poundR;
    			euroV = usV*euroR;
    			yenV = usV*yenR;
    			canV = usV*canR;
    			pesoV = usV*pesoR;

    			
    			document.getElementById("poundV").value = poundV.toFixed(2);
    			document.getElementById("euroV").value = euroV.toFixed(2);
    			document.getElementById("yenV").value = yenV.toFixed(2);
    			document.getElementById("canV").value= canV.toFixed(2);
    			document.getElementById("pesoV").value = pesoV.toFixed(2);
    			
    		}
            

}
    		function resRate()
    	{
    		document.getElementById("poundV").value = "";
    		document.getElementById("euroV").value = "";
    		document.getElementById("yenV").value = "";
    		document.getElementById("canV").value = "";
    		document.getElementById("pesoV").value = "";
    		document.getElementById("usV").value="";
    		
    	}
