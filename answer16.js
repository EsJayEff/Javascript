// Storing list of persons living or deceased in the array and inviting them.
const listOfGuest = [];
listOfGuest[0]="Shiraz";
listOfGuest[1]="Javed";
listOfGuest[2]="Farooq";

function originalArray(originalInputArray){
    for (let i=0;i<originalInputArray.length;i++){
        console.log(originalInputArray[i]);}} 

console.log ("<<Invitation list one>> \n")
originalArray(listOfGuest);

console.log ("<<Aplogies>> \n")
console.log(listOfGuest[1]+" cannot make it to the dinner.");

listOfGuest[1]="Faraz";

console.log ("<<New Guest>> \n")
console.log(listOfGuest[1]+" is my new guest");
originalArray(listOfGuest);


console.log("<<Big Table Message>>")
console.log("Good news for all, I have found a bigger table for more guests.");


listOfGuest[3]="Shehzad";
listOfGuest[4]="Uneeb";
listOfGuest[5]="Umair";

console.log ("<<Second Invitation List>> \n")
for (let i=0;i<listOfGuest.length;i++){
    console.log(listOfGuest[i]);}

console.log ("<<New guest Added in the beginnig of the list>> \n")

listOfGuest.unshift("Maaz");

for (let i=0;i<listOfGuest.length;i++){
console.log(listOfGuest[i]);}


let arrayLength = listOfGuest.length;
let midOfArray = Math.floor(arrayLength/2);
listOfGuest.splice(midOfArray,0,"Mohib");

console.log ("<<New guest Added in the middle of the list>> \n")
for (let i=0;i<listOfGuest.length;i++){
    console.log(listOfGuest[i]);}
    

console.log ("<<New guest Added in the end of the list>> \n")
listOfGuest.push("Ahad");

for (let i=0;i<listOfGuest.length;i++){
    console.log(listOfGuest[i]);}


