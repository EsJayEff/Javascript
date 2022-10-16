function make_shirt(size,message)
{
if(size===undefined || size==="large" && message === undefined)
{
    size = "large";
    message = "I love Javascript";

console.log("You have ordered %s size shirt.", size);
console.log("The message to be printed on the shirt is %s. ", message);
}
if (size === "medium" && message === undefined)
{
    message = "I love Javascript";
    console.log("You have ordered %s size shirt.", size);
    console.log("The message to be printed on the shirt is %s. ", message);

}
if (size != undefined && size != "large" && size != "medium")
{
console.log("You have ordered %s size shirt.", size);
console.log("The message to be printed on the shirt is Work Hard Stay Humble.");
}
}

make_shirt("large");
