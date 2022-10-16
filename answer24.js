let myString1 = "ABC";
let myString2 = "def";

console.log( "<< String Testing for equality >>");
let myStringTest1 = myString1.length === myString2.length ? "true"
: "false";
console.log(myStringTest1);

let myStringTest2 = myString1.charAt(2) === myString2.charAt(2) ? "true"
: "false";
console.log(myStringTest2);


console.log( "<< String Testing for lower case >>");
const isLowerCase = (myString3) => /^[a-z]*$/.test(myString3);

let myStringTest3 = isLowerCase(myString2) ? "true"
: "false";
console.log(myStringTest3);

let myStringTest4 = isLowerCase(myString1) ? "true"
: "false";
console.log(myStringTest4);

console.log( "<< Number Testing for equality >>");

let number1=10;
let number2=20;

let number3 = number1 === number2 ? "true"
: "false";
console.log(number3);

let number4 = number1 <= number2 ? "true"
: "false";
console.log(number4);

let number5 = number1 >= number2 ? "true"
: "false";
console.log(number5);

let number6 = number2 > number1 ? "true"
: "false";
console.log(number6);

let number7 = number2 < number1 ? "true"
: "false";
console.log(number7);

let number8 = number1 < number2 ? "true"
: "false";
console.log(number8);

console.log( "<< Testing with AND and OR operators >>");


let playerOne = 1;
let computer =0;

let winner1 = playerOne ===1 && computer === 0 ? "true"
:"false"
console.log(winner1);

let winner2 = playerOne ===0 && computer === 1 ? "true"
:"false"
console.log(winner2);

let playerTwo = 1;
let computer2 =0;

let winner3 = playerTwo ===1 || computer2 === 0 ? "true"
:"false"
console.log(winner3);

let winner4 = playerTwo ===0 || computer2 === 1 ? "true"
:"false"
console.log(winner4);



console.log( "<< Member of Array or not >>");


const myArray =[];
myArray[0]="s"
myArray[1]="h"
myArray[2]="i"
myArray[3]="r"
myArray[4]="a"
myArray[5]="z"
let findinArray1 = myArray.indexOf("z") >= 0 ?
"true":"false";
console.log(findinArray1);

let findinArray2 = myArray.indexOf("e") >= 0 ?
"true":"false";
console.log(findinArray2);



