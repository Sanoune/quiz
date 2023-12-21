
let fichier = "questions.json"

fetch(fichier)
  .then((response) => response.json())
  .then((questions) => {
    const buttonTrue = document.getElementById("button-true");
    const buttonFalse = document.getElementById("button-false");
    const texteQuestion = document.getElementById("question");
    const questionNumber = document.getElementById("question-number");

    let scoreFinal = 0;

    function afficherQuestion() {
      if (counterQuestions < questions.length) {
        texteQuestion.textContent = questions[counterQuestions].question;
      } else {
        texteQuestion.textContent = "Fin de questionnaire";
        CalculeScore();
        afficherScoreFinal();
      }
    }

    let counterQuestions = 0;
    function nextQuestion() {
      counterQuestions++;

      afficherQuestion();
    }

    afficherQuestion();
    let tableauScore = [];

    buttonTrue.addEventListener("click", function () {
      const scoreTrue = true;
      tableauScore.push(scoreTrue);
      nextQuestion();
    });
    buttonFalse.addEventListener("click", function () {
      const scoreFalse = false;
      tableauScore.push(scoreFalse);
      nextQuestion();
    });

    function CalculeScore() {
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].reponse === tableauScore[i]) {
          scoreFinal++;
        }
      }
    }
    function afficherScoreFinal() {
      buttonTrue.style.display = "none";
      buttonFalse.style.display = "none";
      texteQuestion.textContent = `Votre score final est de ${scoreFinal} sur ${questions.length}.`;
    }

    // Code au dessus
  })

  .catch((error) =>
    console.error("Erreur de chargement du fichier JSON:", error)
  );
