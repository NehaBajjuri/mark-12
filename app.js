var inputs = document.querySelectorAll('.input-angle');
var isTriBtn = document.querySelector('#is-triangle-btn');
var output1 = document.querySelector('#out-put');
function calculateSum(angle1,angle2,angle3){
  
 var sumOfAngles = angle1 + angle2 + angle3;
return sumOfAngles;
}
function isTriangle()
{
 var sumOfAngles= calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
 if(sumOfAngles === 180)
 {
    output1.innerText = "Yayy! Angles form a triangle!";
 }
 else if(inputs[0].value === ""|| inputs[1].value === "" || inputs[2].value === "")
 {
   output1.innerText = "Please fill up everything!";
 }
 else if(inputs[0].value<=0 || inputs[1].value<=0 || inputs[2].value<=0)
 {
   output1.innerText = "Please give positive angles!";
 }
 else{
   output1.innerText ="The angles don't form a triangle.";
}
}
isTriBtn.addEventListener("click",isTriangle)