const favoritePet =[];
favoritePet[0]="dog";
favoritePet[1]="cat";
favoritePet[2]="horse";

const statement =[];
statement[0]="is a trustworthy animal."
statement[1]="is a beautiful animal."
statement[2]="is a sincere animal."

for (i=0; i<=favoritePet.length-1; i++)
{
        const randomSelect = Math.floor(Math.random()*3);
        console.log(favoritePet[i]+ " " +statement[randomSelect]);
}
console.log("All these animals could make a great pet.")
