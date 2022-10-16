var check =0;
const customerSandwitch = [];

function sandwitch (arrayInput)
{
customerSandwitch[check]=arrayInput;
check ++;
}

sandwitch("bread");
sandwitch("ketchup");
sandwitch("mayonese");

console.log(customerSandwitch);
