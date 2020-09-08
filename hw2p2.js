    $(document).ready(function() {
                $("button").click(function(){
                $("#result").fadeTo("slow",0.25);
                
            });
        });
		
    	function calc()
    	{
    		var number1 = 0;
    		var number2 = 0;
    		var number3 = 0;
    		var sum = 0;
    		var average = 0;
    		var product = 0;
			var errorMessage = "<strong style='color:red;font-size:1.1em;text-decoration:underline;'>Invalid input. Please input numbers only!</strong>";
    		var resultMessage = "";

    		number1 = document.getElementById("n1").value;
    		number2 = document.getElementById("n2").value;
    		number3 = document.getElementById("n3").value;   		
    		 	
    		    		
    		if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    			document.getElementById("error").innerHTML = errorMessage;
    			document.getElementById("result").innerHTML = "";

    		}

    		else {
                n1 = parseInt(number1);
                n2 = parseInt(number2);
                n3 = parseInt(number3);
                sum = n1 + n2 + n3;
                average = sum/3;
                product = n1*n2*n3;
    			resultMessage = "The sum of the numbers is " + sum + "." +
                "The average of the numbers is " + average + "." +
                "The product of the numbers is " + product + "." + 
                "Your smallest input number is " + Math.min(n1, n2, n3) + "." +
                "Your largest input number is " + Math.max(n1, n2, n3) + ".";
    			document.getElementById("result").innerHTML = resultMessage;
    			document.getElementById("error").innerHTML = "";
    		}

    	}

    	function res()
    	{
    		document.getElementById("result").innerHTML="";
    		document.getElementById("error").innerHTML="";
    		document.getElementById("n1").focus();
    	}