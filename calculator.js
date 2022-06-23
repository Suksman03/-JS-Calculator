 

const num1 = prompt("Enter the First Value");
const operatorVar = prompt("Enter the operator that you want to use");
const num2 = prompt("Enter the Second Value");
 

var result;
if (operatorVar == "*") {
  result = num1 * num2;
} else if (operatorVar == "-") {
  result = num1 - num2;
} else if (operatorVar == "/") {
  result = num1 / num2;
} else if (operatorVar == "+") {
  result = parseInt(num1) + parseInt(num2);
}
 else {
  alert("Invalid Operator");
}

alert("The result = " + result);

document.write( "SUKI");