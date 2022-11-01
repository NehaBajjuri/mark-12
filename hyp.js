var sides = document.querySelectorAll('.side-input');
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
     var sumSquares=calcSumOfSquares(Number(sides[0].value),Number(sides[1].value));

    var lengthOfHypotenuse = Math.sqrt(sumSquares);
    output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`

}
