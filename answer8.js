//Printing Mathematical Operations
let addition= 0;
let subtraction=0;
let multiplication=0;
let division = 0;

function addThem(num1, num2)
{
add= num1+num2;
combineString = "console.log(" + num1 + "+" + num2 + ")" + "="  + add;
console.log (combineString)
return add;
}

function subtractThem(num1, num2)
{
subtract= num1-num2;
combineString = "console.log(" + num1 + "-" + num2 + ")" + "="  + subtract;
console.log (combineString)
return add;
}

function multiplyThem(num1, num2)
{
multiply= num1*num2;
combineString = "console.log(" + num1 + "*" + num2 + ")" + "="  + multiply;
console.log (combineString)
return add;
}

function divideThem(num1, num2)
{
divide= num1*num2;
combineString = "console.log(" + num1 + "/" + num2 + ")" + "="  + divide;
console.log (combineString)
return add;
}


addThem(5,3);
subtractThem(16,8);
multiplyThem(2,4);
divideThem (16,2);