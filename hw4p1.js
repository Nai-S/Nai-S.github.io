
          var product = 1;
          var sum = 0;
          var counter = 5;  
          
    
    for (var x = 5; x <= 21; x += 4 ){
              product *= x;              
              sum += x;
                       
          }
        
    document.write( "<br>The Product of every fourth number from 5 to 21 inclusive is " + product + "<br>");
    document.write( "<br>The Sum of every fourth number from 5 to 21 inclusive is " + sum + "." + "<br>" +
     "<br>These numbers are:<br>");
        

        do { document.writeln( counter );
          counter += 4; 
          
          
        } 
        while ( counter <= 21 );

