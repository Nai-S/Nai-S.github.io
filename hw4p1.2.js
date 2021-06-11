var product, sum, x;
var counter = 3;

        product = 1;
        x = 3;
        sum = 0;	
		
      while   (x <= 21 ) {
	      product *= x;
              sum += x;
	      x = x + 3;		
      }
         
  document.write( "<br>The Product of every third number from 3 to 21 inclusive is " + product + "<br>");
  document.write( "<br>The Sum of every third numbers from 3 to 21 inclusive is " + sum + "." + "<br>" +
   "<br>These numbers are:<br>");

        do { document.writeln( counter );
          counter += 3; } 
        while ( counter <= 21 );