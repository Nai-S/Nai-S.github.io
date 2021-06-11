function process() {
var hwAvg, midTerm, finalExam, prtptn, finalAvg;

var errMsg1="Invalid HW Avg, Mid-Term Score, Final Exam, or Participation input. Please fill out each field with values 0 to 100!";

hwAvg = parseFloat(document.getElementById("hwAvg").value);
midTerm = parseFloat(document.getElementById("midTerm").value); 
finalExam = parseFloat(document.getElementById("finalExam").value);
prtptn = parseFloat(document.getElementById("prtptn").value);


if ( hwAvg > 100 || hwAvg < 0 || midTerm < 0 || midTerm > 100 || finalExam > 100 || finalExam < 0 || prtptn < 0 || prtptn > 100 )
    {
     document.getElementById("error").innerHTML = errMsg1;
     document.getElementById("results").innerHTML = "";
    }
else {

     finalAvg = (.5 * hwAvg) + (.2 * midTerm) + (.2 * finalExam) + (.1 * prtptn);

//Note: you must use true in switch statement..then case ranges for final_avg will work

     switch(true) {

       case (finalAvg >= 90):
          document.getElementById("results").innerHTML = ("The final average is " + Math.round( finalAvg ) +  
" The final grade is A.")
          break;

       case (finalAvg >= 80):
          document.getElementById("results").innerHTML = ("The final average is " + Math.round( finalAvg ) +  
" The final grade is B.")
          break;

       case (finalAvg >= 70):
          document.getElementById("results").innerHTML = ("The final average is " + Math.round( finalAvg ) +  
" The final grade is C.") 
          break;

       case (finalAvg >= 60):
          document.getElementById("results").innerHTML = ("The final average is " + Math.round( finalAvg ) +  
" The final grade is D. Student must retake the course!!")
          break;

       default:
          document.getElementById("results").innerHTML = ("The final average is " + Math.round( finalAvg ) +  
" The final grade is F. Student must retake the course!!")


    }
    document.getElementById("error").innerHTML = ""

 } 


}


function res()
{
document.getElementById("results").innerHTML = "";
document.getElementById("error").innerHTML = "";
}