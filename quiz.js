var quizForm = document.querySelector('.quiz-form');
var submitBtn = document.querySelector('#submit-btn');
var output = document.querySelector('#out-put');

var correctAnswers = ["90°","right angled"];

function calculate()
{
   let score=0;
   let index=0;
   var formResults = new FormData(quizForm);
   for(let value of formResults.values())
   {
      if(value === "")
      {
         output.innerText = "Guess all the answers";
      }
     if(value === correctAnswers[index])
     {
        score=score+1;
     }
     index=index+1;
   }
   console.log(score);
   output.innerText = `your score is ${score}`;
}
submitBtn.addEventListener("click",calculate);