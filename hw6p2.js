  function search()
         {
            var count=0;
            
            var key=document.getElementById("key").value.toLowerCase().charAt( 0 );
             var key=key.toLowerCase();

            var stringToSearch="I am Learning about Objects in JS";
            var stringToSearch=stringToSearch.toLowerCase(); 
  
                        
             for (i=0; i < stringToSearch.length; i++)
                     {

                    if (stringToSearch.charAt(i) == key)
                             count++;     
                     }         
      
            if ( count == 0 )
              //create and alert
            {   

            // assemble HTML to pump into new window:

           var myText = "<html>\n";
           myText += "<head>\n";
           myText += "<title>Search character not found in text string!</title>\n";
           myText += "</head>\n";
           myText += "<body>\n";
           myText += "<div align='center'>\n";
           myText += "<h4>\n";
           myText += "Search character '";
           myText += key;
           myText += "' not found in text string!</h4>\n";
           myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
           myText += "</div>\n";
           myText += "</body>\n";
           myText += "</html>";
        
          // open window on the upper right of the screen
        
          var errWindow = window.open("", "new_window", "top=200,left=80,width=300,height=100");
          
          errWindow.focus();

         // pump html into to this new opened window
         
               errWindow.document.write(myText);
              

          // tell browser that errWindow document is finished loading

               errWindow.document.close();

          // Put error msg in input text box of original page

               document.getElementById("output").value = "see popup window";
           }
               // document.getElementById("output").value=key + " not found";
            else
               document.getElementById("output").value=count + 
                  " occurrence(s) of " + key + " found";
         }