// byta färg på sidan (mörk backgrund med ljus text, ljus backgrund med mörk text)
let darkMode = document.querySelector("#change-background");
let questionOne = document.querySelector("#question1X3");
let allQuestion = document.querySelector("#quiz");
darkMode.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
});
// body.style.background = "#131E3A";
// body.style.color ="#D9DDDC";

let button = document.createElement("button");
button.innerHTML = "Get reslut!";
allQuestion.appendChild(button);

button.addEventListener("click", () => {
  let score = 0;

  let answers = document.querySelectorAll("#answer");

  for (let x = 0; x < answers.length; x++) {
    let correctAnswers = answers[x];
    if (correctAnswers.value == "correct" && correctAnswers.checked) {
      score++;
    }
  }

  let q7Answers = document.querySelectorAll("#question7");

  for (let x = 0; x < q7Answers.length; x++) {
    let correctAnswers7 = q7Answers[x];
    if (
      correctAnswers7.value === "correct1" &&
      correctAnswers7.value === "correct2" &&
      correctAnswers7.value === "correct3" &&
      correctAnswers7.checked
    ) {
      score++;
    }
  }

  let totalScore = document.querySelector("#message");
  totalScore.innerHTML = score;
});
// function quiz1(){
//   let q1 = document.querySelector("#question1");
//   if()
//   if(q1.value == "correct"){
//     score++;
//       }
//  }

// function quiz2(){
//   let q2 = document.querySelector("#question2");
//   if(q2.answer.value == 'true'){
//     score++;
//   }
// }

// function quiz3(){
//   let q3 = document.querySelector("#question3");
//   if(q3.answer.value == 'false'){
//     score++;
//   }
// }

// let button = document.createElement("button");
// button.innerHTML = "Get reslut!";
// allQuestion.appendChild(button);

// // tre frågor (sant eller falsk)
// let answer1 = () => {
//   if (question1Btn === ture) {
//     window.alert("correct!!");
//   }
// };

// button.addEventListener("click", () => {
//   let totalScore = document.querySelector("#message");
//   totalScore.innerHTML = score;
// });

//tre frågor (tre svarsalternativ)

//en fråga (besvaras med checkboxar, minst fyra svarsalternativ)

//Längst ned i quizet ska det finnas en knapp med texten “Get results!”

// resultat ska skrivas ut i DOM:en

//över hälften rätt =>orange färg text
//alla rätt =>grön färg text
//annars =>röd färg text
