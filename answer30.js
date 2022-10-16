const newUserList =[];
newUserList[0]="Admin";
newUserList[1]="Shiraz";
newUserList[2]="Javed";
newUserList[3]="Farooq";
newUserList[4]="Maaz";

const randomSelect = Math.floor ((Math.random()*5));

var check =0;
for (i=0; i<=newUserList.length-1 ;i++)
{
    if (newUserList[randomSelect]==="Admin")
{
    console.log ("Welcome back Admin!");
    check = 1;
    break;
}
}
if(check===0){
    console.log("Hello %s!",newUserList[randomSelect]);
}
