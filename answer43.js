const magiciansOriginal =[];
magiciansOriginal[0]="shiraz";
magiciansOriginal[1]="javed";
magiciansOriginal[2]="farooq";

const magiciansModified =[];

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
    magiciansModified[i]=array[i];    
    array[i]="Great "+array[i];
    }    
}

make_great(magiciansOriginal);
console.log(magiciansOriginal);
console.log(magiciansModified);

