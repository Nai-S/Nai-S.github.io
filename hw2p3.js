function calcInt()

  { 

         //declare variables


         var integers = [{}, {}, {}, {}, {}], 
             pos = 0, neg = 0, zero = 0, displayArr="";


                for (i=0; i < integers.length; ++i)
                    {

                   //console.log('int' + i);      
            integers[i] = parseInt(document.getElementById('int'+i).value);                                                                 
             
            if (integers[i] < 0)
                {
                             neg++;
                            // console.log("i am neg");
                            }
                        else if (integers[i] == 0)
                            {
                             zero++;
                             //console.log("i am zero");
                            }
                        else 
                            {
                             pos++;
                             //console.log("i am pos");
                            }                          
                     
                      displayArr += (integers[i] + " ")  
                      //console.log("i am an array");
             } 

   
     // Display the entered numbers, and other results

     document.forms["formInt"].elements["resultInt"].value = ("The inputted numbers were "+ displayArr + "." + 
     "There were " +  neg + " negative integers. " + 
     "There were " +  zero + " zeros. " + 
     "There were " + pos + " positive integers." ) 
     //console.log("result box");
   

   }


