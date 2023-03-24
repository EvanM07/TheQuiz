const quiz = [
  {
    question:
      "What is the name for the smallest particle of an element that retains the properties of that element?",
    answers: ["Ion", "Molecule", "Atom", "Electron"],
    correct: 2,
  },
  {
    question:
      "What is the study of the earth's physical structure and substance, its history, and the processes that act on it called?",
    answers: ["Biology", "Geology", "Astronomy", "Chemistry"],
    correct: 1,
  },
  {
    question:
      "What is the process by which plants use sunlight, carbon dioxide, and water to produce oxygen and glucose called?",
    answers: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
    correct: 0,
  },
  {
    question:
      "What type of energy is stored in an object due to its position or state?",
    answers: [
      "Kinetic energy",
      "Thermal energy",
      "Potential energy",
      "Electrical energy",
    ],
    correct: 2,
  },
  {
    question:
      "What is the substance that speeds up a chemical reaction without being consumed or changed in the reaction called?",
    answers: ["Substrate", "Catalyst", "Enzyme", "Solvent"],
    correct: 1,
  },
  {
    question:
      "What is the study of the relationship between living organisms and their environment called?",
    answers: ["Biology", "Ecology", "Zoology", "Botany"],
    correct: 1,
  },
  {
    question:
      "What is the term for the process by which a gas turns into a liquid?",
    answers: ["Condensation", "Evaporation", "Melting", "Sublimation"],
    correct: 0,
  },
  {
    question:
      "What is the term for a substance that cannot be broken down into simpler substances by chemical means?",
    answers: ["Element", "Compound", "Mixture", "Solution"],
    correct: 0,
  },
  {
    question: "What is the unit of electrical resistance?",
    answers: ["Ohm", "Ampere", "Volt", "Watt"],
    correct: 0,
  },
  {
    question:
      "What is the term for the force that opposes motion between two surfaces that are in contact?",
    answers: ["Gravity", "Friction", "Inertia", "Acceleration"],
    correct: 1,
  },
  {
    question: "What is the term for a substance that dissolves in water?",
    answers: ["Soluble", "Insoluble", "Solute", "Solvent"],
    correct: 0,
  },
  {
    question:
      "What is the name for the process by which a liquid turns into a gas?",
    answers: ["Evaporation", "Condensation", "Melting", "Sublimation"],
    correct: 0,
  },
  {
    question: "What type of energy is associated with motion?",
    answers: [
      "Potential energy",
      "Thermal energy",
      "Kinetic energy",
      "Electrical energy",
    ],
    correct: 2,
  },
  {
    question:
      "What is the term for the smallest unit of a compound that retains the properties of that compound?",
    answers: ["Atom", "Molecule", "Ion", "Element"],
    correct: 1,
  },
  {
    question: "What is the atomic symbol for iron?",
    answers: ["Ir", "In", "Fe", "Au"],
    correct: 2,
  },

  {
    question: "What is the chemical formula for water?",
    answers: ["H2O2", "H2O", "HO2", "O2H"],
    correct: 1,
  },
  {
    question: "What type of bond forms when atoms share electrons?",
    answers: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    correct: 1,
  },
  {
    question: "What is the study of living organisms called?",
    answers: ["Ecology", "Botany", "Zoology", "Biology"],
    correct: 3,
  },
  {
    question: "Which of the following is a chemical change?",
    answers: [
      "Bending a wire",
      "Melting an ice cube",
      "Mixing sugar and water",
      "Burning wood",
    ],
    correct: 3,
  },
  {
    question: "Which of the following is an example of kinetic energy?",
    answers: [
      "A book on a shelf",
      "A compressed spring",
      "A battery",
      "A moving car",
    ],
    correct: 3,
  },
  {
    question: "What is the primary source of energy for most living organisms?",
    answers: ["Oxygen", "Carbon", "Water", "Sunlight"],
    correct: 3,
  },
  {
    question: "Which of the following is a greenhouse gas?",
    answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
    correct: 1,
  },
  {
    question: "What is the SI unit of force?",
    answers: ["Watt", "Joule", "Newton", "Pascal"],
    correct: 2,
  },
  {
    question: "What type of waves are used in cellular communication?",
    answers: ["Sound waves", "X-rays", "Gamma rays", "Radio waves"],
    correct: 3,
  },
];
const quizContainer = document.querySelector("#quiz-container");
const progressBar = document.querySelector("#progress-bar");
let currentQuestion = 0;
let numCorrectAnswers = 0;

function showQuestion() {
  const question = quiz[currentQuestion];
  quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
          ${question.answers
            .map(function (answer, index) {
              return `
              <li><button class="answer">${answer}</button></li>
            `;
            })
            .join("")}
        </ul>
      `;
  // Shuffle the quiz array randomly
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }

  const correctAnswer = question.correctAnswer;

  const answerButtons = quizContainer.querySelectorAll(".answer");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", () => {
      const isCorrect = i === question.correct;
      if (isCorrect) {
        document.body.style.backgroundColor = "green";
        numCorrectAnswers++;
      } else {
        document.body.style.backgroundColor = "red";
      }
      answerButtons.forEach((b) => {
        b.disabled = true;
      });
      setTimeout(() => {
        document.body.style.transition = "background-color 1s ease";
        document.body.style.backgroundColor = "";
        currentQuestion++;
        if (currentQuestion < quiz.length) {
          showQuestion();
          updateProgressBar();
        } else {
          quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
          showResults();
        }
      }, 2000);
    });
  }
  updateProgressBar();
}

function updateProgressBar() {
  const progressPercent = (currentQuestion / quiz.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  if (progressPercent > 50) {
    progressBar.classList.add("done");
  }
}

showQuestion();
function showResults() {
  let score = 0;
  const totalQuestions = quiz.length;
  quiz.forEach((question, index) => {
    const answerButton =
      quizContainer.querySelectorAll(".answer")[question.correct];
    if (answerButton.classList.contains("selected")) {
      answerButton.classList.remove("selected");
      if (index < totalQuestions - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
        const correctAnswers = quiz.filter((question, index) => {
          return (
            question.correct ===
            document.querySelectorAll(".selected")[index].parentNode.parentNode
              .dataset.index
          );
        });
        score = correctAnswers.length;
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Correct", "Incorrect"],
            datasets: [
              {
                label: "# of Votes",
                data: [score, totalQuestions - score],
                backgroundColor: [
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      }
    }
  });
}
