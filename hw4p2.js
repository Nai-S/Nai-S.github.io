
      
      
      //A = (P*(1 + r)**n
      //create an array for rate percentages, 
      //match it with each tables count in order to use the variable tables for table count inside for loop.
      //use variable rowYear as counter for rows and years, in place of n, since it is already ++ the for loop is already 
       // (p*(1 + r[tables])**rowCount).toFixed(2)
    
      var p, r;
      p = 1000;
      r = [0.05, 0.06, 0.07];
      var rows = 10;
      
      

 
   
      //create  all tables
      for (var tables = 0; tables <= 2; tables++ ) {
            document.write("<table>");
          
              document.write("<tr>")
              document.write("<th>Year</th>");
              document.write("<th>Amount on deposit</th>");
              document.write("<th>Interest Rate</th>");
              document.write("</tr>");


                 // create 10 rows and input data   
                for (var rowYear = 1; rowYear <= rows; rowYear++) {
                    document.write("<tr>");
                    document.write("<th>" + "Year " + rowYear + "</th>");
                    document.write("<td>" + (p*(1 + r[tables])**rowYear).toFixed(2) + "</td>");
                    document.write("<td>" + (r[tables]*100).toFixed(0) + "% </td>");
                    document.write("</tr>");

                  }
      


      document.write("</table>");
      document.write("<br>");
    } //end of table loop
    

    
 