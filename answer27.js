const colorChoice = [];
colorChoice[0]="green";
colorChoice[1]="yellow";
colorChoice[2]="red";

const letsPlay = [colorChoice,gamePoints];

//for selecting color randomly
const colorSelect = (Math.floor(Math.random() *3));

if(colorChoice[colorSelect]==="green"){
console.log("Player earned 5 points");}
else if(colorChoice[colorSelect]==="yellow"){
console.log("Player earned 10 points");}
else{
    if(colorChoice[colorSelect]==="red"){
        console.log("Player earned 15 points");
    }}

