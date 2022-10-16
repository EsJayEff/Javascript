// Storing names in the array and printing them all.
const nameArray= [];
nameArray[0]="Shiraz";
nameArray[1]="Javed";
nameArray[2]="Farooq";

function printArray(array)
{
    for (i=0; i<=array.length-1;i++)
    {
        console.log("Dear "+array[i]+","+ " You are invited for dinner at my place.");
    }
}
printArray(nameArray);