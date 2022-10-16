const ordinalNumbers= [];
ordinalNumbers[0] =1;
ordinalNumbers[1] =2;
ordinalNumbers[2] =3;
ordinalNumbers[3] =4;
ordinalNumbers[4] =5;
ordinalNumbers[5] =6;
ordinalNumbers[6] =7;
ordinalNumbers[7] =8;
ordinalNumbers[8] =9;
ordinalNumbers[9] =10;

for (i=0; i<=ordinalNumbers.length-1;i++)
{
    if(ordinalNumbers[i]===1){
console.log(ordinalNumbers[i]+"st");}
else if(ordinalNumbers[i]===2){
    console.log(ordinalNumbers[i]+"nd");}
    else if(ordinalNumbers[i]===3){
        console.log(ordinalNumbers[i]+"rd");}
        else if(ordinalNumbers[i]>3){
            console.log(ordinalNumbers[i]+"th");}

}
