let age=0;
age = Math.floor((Math.random()*100)+1);
console.log("The person age is %s",age);
if( age>65)
{
    console.log("The person is an elder");
}

else if (age >20 && age <65)
{
console.log ("The person is a adult");
}

else if (age>13 && age<20) 
{
    console.log ("The person is a teenager");
}

else if (age>4 && age<13)
{
console.log ("The person is a kid");
}

else if (age>2 && age<4)
{
console.log ("The person is a toddler")
}

else 
{
    console.log("The person is a baby");
}
