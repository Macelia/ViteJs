export const Questions = [
  {
    question: 'Comment déclarer une variable qui ne peut pas être modifiée ?',
    answers: ['const', 'let', 'var'],
    correct: 'const',
  },
  {
    question:
      'Quelle méthode transforme une chaîne de caractères en nombre entier ?',
    answers: ['parseInt', 'parseFloat', 'toString'],
    correct: 'parseInt',
  },
  {
    question: 'Quel est le résultat de "2" + 2 en JavaScript ?',
    answers: ['4', '"22"', '22', 'Erreur'],
    correct: '"22"',
  },
  {
    question: "Comment appelle-t-on une fonction qui s'appelle elle-même ?",
    answers: ['Fonction circulaire', 'Fonction récursive', 'Fonction miroir'],
    correct: 'Fonction récursive',
  },
  {
    question: 'Quelle fonction permet de créer un délai en JavaScript ?',
    answers: ['delay()', 'setTimeout()', 'wait()'],
    correct: 'setTimeout()',
  },
  {
    question:
      'Quel est le nom de la fonction qui permet de répéter une action à intervalles réguliers ?',
    answers: ['setInterval()', 'repeat()', 'loop()'],
    correct: 'setInterval()',
  },
  {
    question: "Quelle méthode permet de retirer le dernier élément d'un tableau ?",
    answers: ['shift()', 'pop()', 'splice()'],
    correct: 'pop()',
  },
  {
    question: 'Comment vérifier si une variable est un tableau en JavaScript ?',
    answers: ['isType()', 'typeof', 'Array.isArray()'],
    correct: 'Array.isArray()',
  },
  {
    question:
      'Quelle est la valeur de "null" lorsqu\'elle est convertie en nombre ?',
    answers: ['0', '1', 'undefined', 'null'],
    correct: '0',
  },
  {
    question: 'Comment accéder au premier élément d\'un tableau appelé "myArray" ?',
    answers: ['myArray[1]', 'myArray[0]', 'myArray.first()', 'myArray.one'],
    correct: 'myArray[0]',
  },
];



//--------------------------------------------------------------------

const app = document.querySelector("#app");

const startbutton = document.querySelector("#Start");

startbutton.addEventListener("click", startQuiz)


function startQuiz(event){                //-----startQuiz() pour stoquer des infos

event.stopPropagation();

let currentQuestion = 0;
let score = 0;                    //le score actuel

 function clean(){
  while(app.firstElementChild){
        app.firstElementChild.remove();
  }



 }   

// displayQuestion pour afficher la question actuelle 

function displayQuestion(index){

    const question = Questions[index];

    if(!question) {
      //finish the quiz
    }

    const title = getTitleElement(question.question);
    app.appendChild(title);

    const answersDiv = creatAnswers(question.answers);
    app.appendChild(answersDiv);


    const submitButton = getSubmitButton();
    submitButton.addEventListener("click", submit);
    app.appendChild(submitButton);                   
    
    //////******** 1h 10 mins */

 }

clean();
displayQuestion(currentQuestion);   

function submit(){

  const selectedAnswer = app.querySelector('input[name="answer"]:checked');

    const value = selectedAnswer.value;

    const question =Questions[currentQuestion];
    
    const isCorrect = question.correct === value;

    alert(`Submit ${isCorrect ? "Correct" : "Incorrect"}`);

    if(isCorrect) {score++;}

    showfeedback(isCorrect, question.correct, value);
    const feedback = getFeedbackMessage(isCorrect, question.correct)
    app.appendChild(feedback);
}


function showfeedback(isCorrect, correct, answer){

  const correctAnswerId = formatId(correct);
  const correctElement = document.querySelector(
    `label[for="${correctAnswerId}"]`
  )
  const selectedAnswerId = formatId(answer);
  const selectedAnswer = document.querySelector(
    `label[for="${selectedAnswerId}"]`
  )

  if(isCorrect){
    selectedAnswer.classList.add("correct");
  }
  else{
    selectedAnswer.classList.add("incorrect");
    correctElement.classList.add("correct");
  }

 

}
function getFeedbackMessage(isCorrect, correct){

  const paragraph = document.createElement("p");
  paragraph.innerText= isCorrect ? "bravo! tu as eu la bonne répense" :`Désolée! Mais la bonne répense était ${correct}`;
  return paragraph;
}
}



//------------------afficher les répenses du quiz-------

function creatAnswers(answers){

const answersDiv = document.createElement("div");

answersDiv.classList.add("answers");

for (const answer of answers){
  const label = getAnswerElement(answer);
  answersDiv.appendChild(label);
}

return answersDiv;
}

function getTitleElement(text){

const title = document.createElement("h3");
title.innerText = text;
return title;

}

function formatId(text){
return text.replaceAll(" ", "-").toLowerCase();

}
function getAnswerElement(text){

const label = document.createElement("label");
label.innerText= text;

const input =document.createElement("input");
const id = formatId(text);
input.id = id;
label.htmlFor =id;
input.setAttribute("type", "radio");
input.setAttribute("name", "answer");
input.setAttribute("value", text);

label.appendChild(input);
return label ;


}

function getSubmitButton(){
const submitButton = document.createElement("button");
submitButton.innerText="Submit";

return submitButton;
}

//1-----------------annuler l'effet par default-------

// const link = document.querySelector("a");
// link.addEventListener("click", (e)=>{
//   e.preventDefault();

// }
// )

//------------------------fin-1--





// const colors = ["red","yellow","blue","green"];

// let k=0;
// let i=0

// startbutton.addEventListener("click", () => {

//     app.style.background=colors[k];
//     k++;
//     if(k > colors.length - 1){
//         k=0
//     }
//     console.log("hello Devs");

//     const question1 = document.querySelector("#id-question1") ?? document.createElement("p");
//     question1.id="id-question1";
//     question1.innerText = Questions[i].question;
//     app.insertBefore(question1, startbutton);

//     i++;
//     if(i > Questions.length -1){
//         i = 0;
//         console.log("remove questions");
//         question1.remove();
//     }

// });

//-----------------------------------------------------

// app.addEventListener("click", () => {
//     alert("Click App");
// },true);

// startbutton.addEventListener("click", () => {
//     alert("Click Start");
// }, true);

// 1H.21