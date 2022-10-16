// Replacing \n \t from the string
const personName = "\n Shiraz \nJaved \tFarooq.\n";
const replacedString=personName.replace(/[\n\t]/gm,'');
console.log(replacedString);

