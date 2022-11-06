var inputs = document.querySelectorAll('.side-input');
var hypBtn = document.querySelector('#hypo-button');
var output = document.querySelector('#out-put');

hypBtn.addEventListener("click",calcHyp);

function calcSumOfSquares(a,b)
{
    var sumSquares = a*a + b*b;
   return sumSquares;
}
function calcHyp()
{
     var sumSquares=calcSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
     var lengthOfHypotenuse = Math.sqrt(sumSquares);
     if(inputs[0].value === ""|| inputs[1].value === "")
     {
          output.innerText = "Please fill up everything!";
     }
     
     else if (inputs[0].value<=0 || inputs[1].value<=0 )
     {
          output.innerText = "Please give positive integers!";
     }
     else{
    var lengthOfHypotenuse = Math.sqrt(sumSquares);

    output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`

     }
}
