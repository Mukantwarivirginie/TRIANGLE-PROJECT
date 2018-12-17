
 function number(){
    var sideone=document.getElementById("firstside").value; 
    var sidetwo=document.getElementById("secondside").value;
    var sidethree=document.getElementById("thirdside").value;
 
 if (sideone=== sidetwo && sidetwo=== sidethree) {
   alert("This is an equilateral Triangle");
   }
   
   else if (sideone === sidetwo || sidetwo===sidethree|| sideone===sidethree) {
   alert("This is an isosceles Triangle");
   }
   
   else if ( sideone+sidetwo>sidethree || sideotwo+sidethree>=sideone || sideone+sidethree<=sidetwo ) {
   alert("This is an scalene Triangle");
   }
   
   else {
   alert("Not a Triangle! Please try again.");
   }
 }
