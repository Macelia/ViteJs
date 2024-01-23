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


const app =document.querySelector("#app");

const startbutton = document.querySelector("#Start");

const colors = ["red","yellow","blue","green"];

let k=0;
let i=0

startbutton.addEventListener("click", () => {
  
    app.style.background=colors[k];
    k++;
    if(k > colors.length - 1){
        k=0
    }
    console.log("hello Devs");

    const question1 = document.querySelector("#id-question1") ??
    document.createElement("p");
    question1.id="id-question1";
    question1.innerText = Questions[i].question;
    app.insertBefore(question1, startbutton);

    i++;
    if(i > Questions.length -1){
        i = 0;
    }

});

// app.addEventListener("click", () => {
//     alert("Click App");
// },true);

// startbutton.addEventListener("click", () => {
//     alert("Click Start");
// }, true);

// 46.36