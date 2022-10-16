// Storing list of persons living or deceased in the array and inviting them.
const placesOfWorld = [];
placesOfWorld[0]="Shiraz";
placesOfWorld[1]="Javed";
placesOfWorld[2]="Farooq";

let randomePickFromArray = Math.floor(Math.random()*placesOfWorld.length);
console.log ("<<Invitation list one>> \n")

for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}

console.log ("<<Aplogies>> \n")
console.log(placesOfWorld[1]+" cannot make it to the dinner.");

placesOfWorld[1]="Faraz";

console.log ("<<New Guest>> \n")
console.log(placesOfWorld[1]+" is my new guest");
console.log(placesOfWorld[0]);
console.log(placesOfWorld[1]);
console.log(placesOfWorld[2]);


console.log("<<Big Table Message>>")
console.log("Good news for all, I have found a bigger table for more guests.");


placesOfWorld[3]="Shehzad";
placesOfWorld[4]="Uneeb";
placesOfWorld[5]="Umair";

console.log ("<<Second Invitation List>> \n")
for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}

console.log ("<<New guest Added in the beginnig of the list>> \n")

placesOfWorld.unshift("Maaz");

for (let i=0;i<placesOfWorld.length;i++){
console.log(placesOfWorld[i]);}


let arrayLength = placesOfWorld.length;
let midOfArray = Math.floor(arrayLength/2);
placesOfWorld.splice(midOfArray,0,"Mohib");

console.log ("<<New guest Added in the middle of the list>> \n")
for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}
    

console.log ("<<New guest Added in the end of the list>> \n")
placesOfWorld.push("Ahad");

for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}

    console.log("<<Bad news for all, bigger table is not found and I can have only two guests.>>");  

    
    for (let j=0;j=placesOfWorld.length-2;j++)
     
    {
        const lastItem= placesOfWorld.pop();
        console.log(lastItem+" I do apologizes that I can't invite you to the dinner due to space constraint.");
        
    }
        
    console.log("<<Final Guest List>>");  
    for (let i=0;i<placesOfWorld.length;i++){
        console.log(placesOfWorld[i]+" You are still part of the dinner party.");}
