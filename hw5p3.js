$(document).ready(function(){
    $("#inputState").keypress(function (event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                }
            });
   
      
    }); 

var stateInfoArray = 
              [ ["AL", "ALABAMA", "MONTGOMERY", "4,887,871"],                     
                ["AK", "ALASKA", "JUNEAU", "737,438"],  
                ["AZ", "ARIZONA", "PHEONIX", "7,171,646"],
                ["AR", "ARKANSAS", "LITTLE ROCK", "3,010,825"],
                ["CA", "CALIFORNIA", "SACRAMENTO", "39,557,045"],
                ["CO", "COLORADO", "DENVER", "5,694,564"] ];    

function getInfo()
  {   
    var searchKey = document.forms["SearchForm"].elements["inputState"].value;  //get searchkey from form input box
    searchKey = searchKey.toUpperCase();     //change search key to upper case
     console.log(searchKey);

     //when the user input is on focus make sure the error message is cleared
     document.getElementById("errMsg").value = " ";
     document.getElementById("errMsg").style.display = "none";
    
    var found = false; //this variable must be place before the for statement in order to work, otherwise the page will always render
                       // and display the error message!
    
    for (var row = 0; row < stateInfoArray.length; row++) //loop for 6 rows
     {
     if ((stateInfoArray[row][0] == searchKey) || (stateInfoArray[row][1] == searchKey)) {
        console.log(stateInfoArray[row][0]);
          console.log(searchKey);
                 //check if search key = 1st or 2nd element of each row
      
                 document.getElementById("results").style.display = "block";
                document.getElementById("Error").style.display = "none";

                //if search key = 1st or 2nd element of a particular row
                //then place in input boxes for all state info of inputted state
                

                document.getElementById("stateAbbr").innerHTML = "State Abrr = " + stateInfoArray[row][0];
                document.getElementById("state").innerHTML = "State = " + stateInfoArray[row][1];
                document.getElementById("capital").innerHTML = "Capital = " + stateInfoArray[row][2];
                document.getElementById("pop").innerHTML = "Population = " + stateInfoArray[row][3];


         // a another way to display the results using input text fields
         // document.forms["SearchForm"].elements["stateAbbr"].value = stateInfoArray[row][0];s
         // document.forms["SearchForm"].elements["state"].value = stateInfoArray[row][1];
         // document.forms["SearchForm"].elements["capital"].value = stateInfoArray[row][2];
         // document.forms["SearchForm"].elements["pop"].value = stateInfoArray[row][3];
         row = stateInfoArray.length;   //ends loop if match found
         found = true;
     } //end of if statement
     //end of for statement


      // if the var found is place here the error message will always be displayed whether or not the results are found.
      // Order of prcoss is important for this is important for the page to render out properly!
   else if ( found === false ) {
        document.getElementById("Error").style.display = "inline-block";
        document.getElementById("errMsg").style.display = "inline-block";

        document.forms["SearchForm"].elements["errMsg"].value= "State Info not found!"; 
        // make sure the results are cleared if the next input is an error
         document.getElementById("stateAbbr").innerHTML = " ";
         document.getElementById("state").innerHTML = " ";
         document.getElementById("capital").innerHTML = " ";
         document.getElementById("pop").innerHTML = " ";


         // used for input text fields
         // document.forms["SearchForm"].elements["stateAbbr"].value = " ";
         // document.forms["SearchForm"].elements["state"].value = " ";
         // document.forms["SearchForm"].elements["capital"].value = " ";
         // document.forms["SearchForm"].elements["pop"].value = " ";
       }

  }}