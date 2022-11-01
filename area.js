 var input = document.querySelectorAll('.input');
var button = document.querySelector('#cal-btn');
 var output = document.querySelector('#out-put');

button.addEventListener("click",areaOfTriangle);
function calcProd(a,b)
{
 
    var area = a*b;
   return (area)/2;

}

function areaOfTriangle()
{
 
     var areaOfTri=calcProd(Number(input[0].value),Number(input[1].value));
     output.innerText = `The area of the triangle is ${areaOfTri} ` ;

}
