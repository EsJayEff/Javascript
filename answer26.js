const colorChoice = [];
colorChoice[0]="green";
colorChoice[1]="yellow";
colorChoice[2]="red";

const gamePoints =[];
gamePoints [0] = 5;
gamePoints [1] = 10;
gamePoints [2] = 15;

const letsPlay = [colorChoice,gamePoints];

//for selecting color randomly
const colorSelect = (Math.floor(Math.random() *2));

if(colorChoice[colorSelect]==="green"){
console.log("Player earned 5 points");}
else{
console.log("Player earned 10 points");
}