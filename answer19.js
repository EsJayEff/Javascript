// Storing list of persons living or deceased in the array and inviting them.

// <<Invitation list one>>
const listOfGuest = [];
listOfGuest[0]="Shiraz";
listOfGuest[1]="Javed";
listOfGuest[2]="Farooq";

// << Function to call original Array >>
function originalArray(originalInputArray){
    for (let i=0;i<originalInputArray.length;i++){
        console.log(originalInputArray[i]);}} 

// <<New Guest>>
listOfGuest[1]="Faraz";

// << Adding new Guests in the Array >>

listOfGuest[3]="Shehzad";
listOfGuest[4]="Uneeb";
listOfGuest[5]="Umair";

// << New guest Added in the beginnig of the list >>
listOfGuest.unshift("Maaz");

// << New guest Added in the middle of the list >>
let arrayLength = listOfGuest.length;
let midOfArray = Math.floor(arrayLength/2);
listOfGuest.splice(midOfArray,0,"Mohib");

// << New guest Added in the end of the list >> 
listOfGuest.push("Ahad");

// << Final attendees of the dinner party >>
console.log(listOfGuest.length + " Guests are welcomed to the dinner party.");    


