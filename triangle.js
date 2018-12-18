
 function number(){
    var sideone=document.getElementById("firstside").value; 
    var sidetwo=document.getElementById("secondside").value;
    var sidethree=document.getElementById("thirdside").value;
    var array=["Equilateral triangle","isosceles triangle","scalene triangle"]

    if ( sideone+sidetwo>sidethree && sideotwo+sidethree>sideTwo && sideTwo+sidethree>sidetwo ) {
    

   
     if (sideone=== sidetwo && sidetwo=== sidethree) {
   alert(array[0]); 
   }
   
   else if (sideone === sidetwo || sidetwo===sidethree|| sideone===sidethree) {
   alert(array[1]); 
   }
   
   else if(sideone !== sidetwo || sidetwo!==sidethree|| sideone!==sidethree){
   alert(array[2]); 
   
   }
  }
   
   else {
   alert("Not a Triangle! Please try again.");
   }
 }
