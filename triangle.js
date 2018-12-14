function myFunction(){
    var sideone=document.getElementById("sideone").value;
  alert(sideone);
  var sidetwo=document.getElementById("sidetwo").value;
  alert(sidetwo);
  var sidethree=document.getElementById("sidethree").value;
  alert(sidethree);
 };
 function number(){
    var sideone=document.getElementById("sideone").value; 
    var sidetwo=document.getElementById("sidetwo").value;
    var sidethree=document.getElementById("sidethree").value;
 
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
