input = document.querySelectorAll('.input-value');
button = document.querySelector('#cal-btn');
output = document.querySelector('#out-put');

button.addEventListener("click",areaOfTri);
 function areaOfTri()
 {
    var calArea = calcProd(Number(input[0].value),Number(input[1].value));
    var areaOfTria = calArea;
    
 }
 
function calcProd(a,b)
{
   var area = (a*b)/2;
   output.innerText = `The area of the triangle is ${areaOfTria}`;
  
}


