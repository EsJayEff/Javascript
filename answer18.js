const placesOfWorld =[];
placesOfWorld[0]="Saudia Arab";
placesOfWorld[1]="United Kingdom";
placesOfWorld[2]="Canada";
placesOfWorld[3]="Australia";
placesOfWorld[4]="New Zealand";

function originalArray(originalInputArray){
    for (let i=0;i<originalInputArray.length;i++){
        console.log(originalInputArray[i]);}} 

console.log("<< Printing Array with Original Inputs >>");
for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}


    console.log("<< Printing Array with in Ascending order >>");  
function sortThisArray(arrayTosort){
sortingArray = [];
sortingArray = [].concat(arrayTosort);
sortingArray.sort();

for (let i=0;i<sortingArray.length;i++){
    console.log(sortingArray[i]);}
    return sortingArray;
}

sortThisArray(placesOfWorld);

console.log("<< Printing Array with Original Inputs >>");
for (let i=0;i<placesOfWorld.length;i++){
    console.log(placesOfWorld[i]);}

console.log("<< Printing Array with in Descending order >>");  


    function reverseThisArray(arrayToReverse){
        reversingArray = [];
        reversingArray = [].concat(arrayToReverse);
        reversingArray.sort();
        
        for (let i=reversingArray.length-1;i>=0;--i){
            console.log(reversingArray[i]);}
            return reversingArray;
        }

reverseThisArray(placesOfWorld);

console.log("<< Printing Array with Original Inputs >>");
originalArray(placesOfWorld);

    console.log("<<< Reversing the original Array >>>");
    for (let i=placesOfWorld.length-1;i>=0;--i){
        console.log(placesOfWorld[i]);}


        console.log("<< Printing Array with Original Inputs >>");
        originalArray(placesOfWorld);
        
        console.log("<< Sorting Array in Ascending Order >>");
        sortThisArray(placesOfWorld);            
    
        console.log("<< Sorting Array in Descending Order >>");
        reverseThisArray(placesOfWorld);

    


   

