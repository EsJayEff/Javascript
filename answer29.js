const currentUserList=[];
currentUserList[0]="apples";
currentUserList[1]="bananas";
currentUserList[2]="strawberries";
currentUserList[3]="pineapple";
currentUserList[4]="berries";
currentUserList[5]="cherries";
currentUserList[6]="avacados";
currentUserList[7]="pear";
currentUserList[8]="plum";
currentUserList[9]="grapes";

const newUserList =[];
newUserList[0]="apples";
newUserList[1]="bananas";
newUserList[2]="avacados";
newUserList[3]="grapes";
newUserList[4]="plum";

const randomSelect = Math.floor ((Math.random()*10));
console.log(currentUserList[randomSelect]);

var check =0;
for (i=0; i<=newUserList.length-1 ;i++)
{
    if (newUserList[i]===currentUserList[randomSelect])
{
    console.log ("Yes %s are my favorite fruit.",currentUserList[randomSelect]);
    check = 1;
    break;
}
}
if(check===0){
    console.log("No %s are not my favorite fruit.",currentUserList[randomSelect]);
}
