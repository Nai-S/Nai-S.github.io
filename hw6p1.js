 function roundNumber()
         {
          var errMsg = "Invalid input! Please enter a number with at least 4 decimal positions!";
          
          var number = document.getElementById("number").value;
          var numRegExp = /^(\d{0,99}?)(.\d{4,99})$/; //using RegExp for required format of user input (\d{minimun digits, max digits})


          if ( ! numRegExp.test(number)) //checks if user input matches the RegExp
              {
               document.getElementById("errOut").innerHTML = errMsg;
               console.log(errMsg);
               document.forms["myForm"].elements["output"].value = "";
               document.forms["myForm"].elements["number"].value = "";


              }
            else {

            document.getElementById("errOut").innerHTML = " ";
            var num = parseFloat(document.getElementById("number").value);

            document.myForm.output.value = 
               "You entered   : " + num +
               "\n -rounded to the nearest integer using math round: " + 
                  roundToIntegerRound( num ) + 
               "\n -rounded to the nearest integer using math sqrt and math round: " + 
                  roundToSquareRootRound( num ) +
               // "\n rounded to the nearest integer using math floor: " + 
               //    roundToIntegerFloor( num ) +
               "\n -rounded to the nearest tenth using toFixed: " + 
                  roundToTenthsTofixed( num ) +
               // "\n rounded to the nearest hundredth using math floor: " + 
               //    roundToHundredthsFloor( num ) +
               "\n -rounded to the nearest hundredth using toFixed: " + 
                  roundToHundredthsTofixed( num ) + 
               "\n -rounded to the nearest thousandths using toFixed: " + 
                  roundToThousandthsTofixed( num );
                 }

          }

         function roundToIntegerRound( number )
         {
            return( Math.round( number) );
         }

          function roundToSquareRootRound( number )
         {
            return( Math.round(Math.sqrt( number)) );
         }

         // function roundToIntegerFloor( number )
         // {
         //    return( Math.floor( number + .5 ) );
         // }

         function roundToTenthsTofixed( number )
         {
            return( number.toFixed(1));
         }

           function roundToHundredthsTofixed( number )
         {
            return( number.toFixed(2));
         }

           function roundToThousandthsTofixed( number )
         {
            return( number.toFixed(3));
         }
          // using Math.round or Math.floor to get the same results
         // function roundToHundredthsFloor( number )
         // {
         //    return( Math.floor( number * 100 + .5 ) / 100 );
         //  }
        // function roundToHundredthsRound( number )
        //    {
        //     return( Math.round( number * 100 ) / 100 );
        //    }

        // function roundToThousandthsRound( number )
        //     {
        //       return(Math.round( number *1000) / 1000 );
        //     }

  