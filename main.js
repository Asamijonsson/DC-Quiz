// byta färg på sidan (mörk backgrund med ljus text, ljus backgrund med mörk text)
let darkMode = document.querySelector("#change-background");
let questionOne = document.querySelector("#question1X3");


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

//tre frågor (sant eller falsk)



//tre frågor (tre svarsalternativ)



//en fråga (besvaras med checkboxar, minst fyra svarsalternativ)

//Längst ned i quizet ska det finnas en knapp med texten “Get results!”

// resultat ska skrivas ut i DOM:en

//över hälften rätt =>orange färg text
//alla rätt =>grön färg text
//annars =>röd färg text
