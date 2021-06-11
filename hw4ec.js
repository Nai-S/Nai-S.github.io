
$(document).ready(function(){
    $("#hollowSquare").validate({
   
    rules: 
    {
      userInput: { required: true, number: true, min:2, max:10 }
    }
  });   
});


 function runSq(){
  if ($("#hollowSquare").valid()) {

//styling css, so #results box is not displayed beforehand
document.getElementById("transbox").style.display = "inline-block";
//clears #results box for next input
document.getElementById("results").innerHTML = " ";
var userInput = document.getElementById("userInput").value;

// when using user input used document.createElement instead of document.write("<pre>"), 
//to render on the same page instead of over writing current page
      var squareCont = document.createElement("pre") ;
  
   //create number rows   
   for (var rowNumber = 1; rowNumber <= userInput; rowNumber++) {
       
        // create columns
        for (var columnNum = 1; columnNum <= userInput; columnNum++) {
          

          //checking for first and last rows and columns to fill with * or to leave empty
          if (rowNumber == 1 || rowNumber == userInput || columnNum == 1 || columnNum == userInput){
            squareCont.innerHTML += "  *  ";
              
           } 
           else {
            squareCont.innerHTML += "     ";
        
           }



        }
        
        //after the last row, use one less break
        if (rowNumber == userInput) {
          squareCont.innerHTML += "<br>";
        }
        else {
          squareCont.innerHTML += "<br><br>";
        }
   }

  }

   document.getElementById("results").appendChild(squareCont) ;


}

function clearResults(){
  document.getElementById("results").innerHTML = " ";
  document.getElementById("transbox").style.display = "none";
}