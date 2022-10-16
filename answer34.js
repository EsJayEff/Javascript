const favoritePet =[];
favoritePet[0]="pepperoni";
favoritePet[1]="creamy tikka";
favoritePet[2]="afghani";

const favoritePizzaStatment =[];
favoritePizzaStatment[0]="I Like";
favoritePizzaStatment[1]="I Love";
favoritePizzaStatment[2]="My favorite Pizza is ";

for (i=0; i<=favoritePet.length-1; i++)
{
    const randomSelect = Math.floor(Math.random()*3);
    console.log(favoritePizzaStatment[randomSelect]+" "+favoritePet[i]);
}