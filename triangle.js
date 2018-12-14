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
 }
 if (a === b && b === c) {
   alert("This is an equilateral Triangle");
   }
   
   else if (a === b || b===c || a===c ) {
   alert("This is an isosceles Triangle");
   }
   
   else if ( a+b>c || b+c>=a || a+c<=b ) {
   alert("This is an scalene Triangle");
   }
   
   else {
   alert("Not a Triangle! Please try again.");
   }

