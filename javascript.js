
function factorial(){
    var number = prompt("Please enter your number!");
  var temp = 1;
  for (var i = 1; i <= number; i++) {
           temp*=i;
  }
        console.log("Factorial for number "+number+" is : "+temp);
       return temp; 
}
factorial();