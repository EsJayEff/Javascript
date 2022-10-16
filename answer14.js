// Storing list of persons living or deceased in the array and inviting them.
const invitationMessage = "I would like to invite you for dinner at my place, your presence will be my honor.";

const listOfGuest = [];
listOfGuest[0]="Shiraz";
listOfGuest[1]="Javed";
listOfGuest[2]="Farooq";

function originalArray(originalInputArray){
    for (let i=0;i<originalInputArray.length;i++){
        console.log(originalInputArray[i]+", "+invitationMessage);}} 

console.log ("<<Invitation list one>> \n")
originalArray(listOfGuest);

console.log ("<<Aplogies>> \n")
console.log(listOfGuest[1]+" cannot make it to the dinner.");
listOfGuest[1]="Faraz";

console.log ("<<New Guest Entry>> \n")
console.log(listOfGuest[1]+" is my new guest");
originalArray(listOfGuest);