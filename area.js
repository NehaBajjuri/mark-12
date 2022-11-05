 var inputs = document.querySelectorAll('.input');
var button = document.querySelector('#cal-btn');
 var output = document.querySelector('#out-put');

button.addEventListener("click",areaOfTriangle);
function calcProd(a,b)
{
 
    var area = (a*b)/2;
    
   return area;

}

function areaOfTriangle()
{
     
     
     var areaOfTri = calcProd(Number(inputs[0].value),Number(inputs[1].value));
     if(areaOfTri > 0)
     {
          output.innerText = "The area of the triangle is " +areaOfTri;
     }
     else{
          if(inputs[0].value === ""|| inputs[1].value === "")
          {
               output.innerText = "Please fill up everything!";
          }
          
          else if (inputs[0].value<=0 || inputs[1].value<=0 )
          {
               output.innerText = "Please give positive numbers!";
          }
     }
    

}
    
    


