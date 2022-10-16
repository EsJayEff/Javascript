const magiciansOriginal =[];
magiciansOriginal[0]="shiraz";
magiciansOriginal[1]="javed";
magiciansOriginal[2]="farooq";

function showMagician(array)
{
for (i=0;i<=array.length-1;i++)
{
console.log(array[i]);
}    
}
function make_great(array)
{
    for (i=0;i<=array.length-1;i++)
    {
    array[i]="Great "+array[i];
    }    
}

console.log(magiciansOriginal);
showMagician(magiciansOriginal);
make_great(magiciansOriginal);
showMagician(magiciansOriginal);
console.log(magiciansOriginal);
