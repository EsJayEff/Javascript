function carInfo (manufacturerInput,modelInput,colorInput,doorsInput)
{

if( manufacturerInput!= undefined && modelInput !=undefined )
{
    const car=
    {
    manufacturer : manufacturerInput,
    modelname : modelInput,
    color : colorInput,
    doors : doorsInput,
    };
    console.log(car);
    
}
if(manufacturerInput===undefined && modelInput=== undefined)
{
  console.log("Manufacturer and Model is not defined.");
}
}
carInfo(undefined,undefined,1,2);
carInfo(1,2,3,4);


