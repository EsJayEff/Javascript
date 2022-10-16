const currentUserList=[];
currentUserList[0]="John";
currentUserList[1]="Shiraz";
currentUserList[2]="Javed";
currentUserList[3]="Farooq";
currentUserList[4]="Maaz";

const newUserList =[];
newUserList[0]="JOHN";
newUserList[1]="Mohib";
newUserList[2]="Faraz";
newUserList[3]="JAVED";
newUserList[4]="Salman";

const randomSelect = Math.floor ((Math.random()*5));
const newUserEntered=newUserList[randomSelect];
console.log(newUserEntered);

const toProperCase =(username) => {
    return username.charAt(0).toUpperCase()+
    username.slice(1).toLowerCase();
}

const checkingUser=toProperCase(newUserEntered);

var check =0;
for (i=0; i<=newUserList.length-1 ;i++)
{
    if (currentUserList[i]===checkingUser)
{
    console.log ("No! %s username is not acceptable.",newUserList[randomSelect]);
    check = 1;
    break;
}
}
if(check===0){
    console.log("Yes! %s username is acceptable.",newUserList[randomSelect]);
}
