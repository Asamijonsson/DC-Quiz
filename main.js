// Byta färg på sidan (mörk bakgrundsfärg med ljus text, ljus bakgrundsfärg med mörk text)
let darkMode = document.querySelector("#change-background");
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

//Längst ned i quizet ska det finnas en knapp med texten “Get results!”
let button = document.createElement("button");
button.innerHTML = "Get reslut!";
allQuestion.appendChild(button);

button.addEventListener("click", () => {
  let score = 0;
  let answers = document.querySelectorAll("#answer");

  //Tre frågor (tre svarsalternativ)
  for (let i = 0; i < answers.length; i++) {
    let correctAnswers = answers[i];
    if (correctAnswers.value == "correct" && correctAnswers.checked) {
      score++;
    }
  }

  //En fråga (besvaras med checkboxar, minst fyra svarsalternativ)
  //Hämta alla frågorna
  let lastQuestions = document.querySelectorAll("#question7");
  let finalAnswer = 0;
  let allCheckbox = 0;

  //Loopa igenom samtliga frågor från Q7
  for (let i = 0; i < lastQuestions.length; i++) {
    //Räknar alla checkboxar som har value="true" och som är markerade
    if (lastQuestions[i].checked && lastQuestions[i].value == "true") {
      finalAnswer++;
    }
    //Räknar alla checkboxar som är markerade
    if (lastQuestions[i].checked) {
      allCheckbox++;
    }
  }

  //Bara "finalAnswer" X3 får 1 poäng
  if (finalAnswer === 3 && allCheckbox < 4 && allCheckbox > 2) {
    score++;
  }
  //Resultatet ska skrivas ut i DOM:en
  let totalScore = document.querySelector("#message");
  totalScore.innerHTML = `Your score is ${score}`;

  //Över hälften rätt =>orange färg text
  //Alla rätt =>grön färg text
  //Annars =>röd färg text

  if (score > 3) {
    totalScore.style.color = "orange";
  }
  if (score < 3) {
    totalScore.style.color = "red";
  }
  if (score === 7) {
    totalScore.style.color = "green";
  }
});
