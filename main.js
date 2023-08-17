const progressBar = document.getElementById("progress-bar-fill");
const questions = [
  {
    question: "What is the process by which plants convert sunlight into energy?",
    answers: ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"],
    correctAnswer: 0,
  },
  {
    question: "What is the SI unit of force?",
    answers: ["Joule", "Newton", "Watt", "Hertz"],
    correctAnswer: 1,
  },
  {
    question: "What is the process of boiling and condensing a substance to purify it?",
    answers: ["Filtration", "Distillation", "Crystallization", "Chromatography"],
    correctAnswer: 1,
  },
  {
    question: "What is the smallest unit of matter?",
    answers: ["Atom", "Molecule", "Cell", "Electron"],
    correctAnswer: 0,
  },
  {
    question: "What is the layer of the Earth's atmosphere that protects us from harmful UV rays?",
    answers: ["Mesosphere", "Stratosphere", "Troposphere", "Exosphere"],
    correctAnswer: 1,
  },
  {
    question: "What is the process by which liquids turn into gas?",
    answers: ["Condensation", "Evaporation", "Sublimation", "Melting"],
    correctAnswer: 1,
  },
  {
    question: "What is the process by which rocks are broken down into smaller pieces?",
    answers: ["Erosion", "Weathering", "Deposition", "Transportation"],
    correctAnswer: 1,
  },
  {
    question: "What is the study of the distribution and movement of water on Earth?",
    answers: ["Meteorology", "Climatology", "Hydrology", "Geology"],
    correctAnswer: 2,
  },
  {
    question: "What is the term for the resistance of a fluid to flow?",
    answers: ["Viscosity", "Inertia", "Friction", "Gravity"],
    correctAnswer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Cu", "Fe"],
    correctAnswer: 0,
  },
  {
    question: "What is the term for a chemical reaction in which an acid and a base react to form a salt and water?",
    answers: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    correctAnswer: 2,
  },
  {
    question: "What is the process by which energy is released from glucose in the absence of oxygen?",
    answers: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
    correctAnswer: 2,
  },
  {
    question: "What is the study of the Earth's magnetic field?",
    answers: ["Geomagnetism", "Geography", "Geology", "Meteorology"],
    correctAnswer: 0,
  },
  {
    question: "What is the term for the phenomenon in which light is bent as it passes through a medium?",
    answers: ["Refraction", "Reflection", "Diffraction", "Interference"],
    correctAnswer: 0,
  },
  {
    question: "What is the study of the structure, function, and diseases of the heart?",
    answers: ["Cardiology", "Dermatology", "Neurology", "Oncology"],
    correctAnswer: 0,
  },
  {
    question: "What is the term for the force per unit area exerted by a gas on a surface?",
    answers: ["Pressure", "Temperature", "Volume", "Density"],
    correctAnswer: 0,
  },
  {
    question: "What is the process by which an electric current is produced from a chemical reaction?",
    answers: ["Electrolysis", "Electromagnetism", "Electroplating", "Electrochemical cell"],
    correctAnswer: 0,
  },
  {
    question: "What is the term for the change of state from solid directly to gas?",
    answers: ["Sublimation", "Melting", "Evaporation", "Condensation"],
    correctAnswer: 0,
  },
  {
    question: "What is the process by which water changes from a gas to a liquid?",
    answers: ["Condensation", "Evaporation", "Sublimation", "Melting"],
    correctAnswer: 0,
  },
  {
    question: "What is the term for the process by which organisms produce offspring that are genetically identical to themselves?",
    answers: ["Fertilization", "Meiosis", "asexual reproduction", "Cloning"],
    correctAnswer: 3,
  },
  {
    question: "What is the process of converting a solid directly into a gas without passing through a liquid state called?",
    answers: ["Condensation", "Sublimation", "Evaporation", "Melting"],
    correctAnswer: 1,
  },
  {
    question: "Which gas do plants use during photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
  },
  {
    question: "What is the study of the behavior and properties of matter?",
    answers: ["Biology", "Physics", "Chemistry", "Geology"],
    correctAnswer: 2,
  },
  {
    question: "What is the name of the process by which cells divide to create two identical copies of themselves?",
    answers: ["Mitosis", "Meiosis", "Fertilization", "Replication"],
    correctAnswer: 0,
  },
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    answers: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2,
  },
  {
    question: "What is the name for the smallest particle of an element that retains the properties of that element?",
    answers: ["Proton", "Neutron", "Electron", "Atom"],
    correctAnswer: 3,
  },
  {
    question: "What is the process by which an organism develops from an egg to a fully-grown individual?",
    answers: ["Germination", "Metabolism", "Reproduction", "Development"],
    correctAnswer: 4,
  },
  {
    question: "What is the force that pulls all objects towards the center of the Earth?",
    answers: ["Magnetism", "Friction", "Gravity", "Inertia"],
    correctAnswer: 2,
  },
  {
    question: "What is the process of a liquid turning into a solid called?",
    answers: ["Freezing", "Condensation", "Evaporation", "Sublimation"],
    correctAnswer: 0,
  },
  {
    question: "Which vitamin is commonly referred to as the 'sunshine vitamin'?",
    answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    correctAnswer: 2,
  },
  {
    question: "What is the study of heredity and how traits are passed from parents to offspring called?",
    answers: ["Genetics", "Ecology", "Anatomy", "Botany"],
    correctAnswer: 0,
  },
  {
    question: "Which process involves the conversion of light energy into chemical energy by plants?",
    answers: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
    correctAnswer: 0,
  },
  {
    question: "What is the name for the process by which a liquid turns into a gas below its boiling point?",
    answers: ["Sublimation", "Evaporation", "Condensation", "Vaporization"],
    correctAnswer: 1,
  },
];

window.addEventListener("load", function () {
  document.querySelector(".quiz_title").classList.add("animate");
});

let currentQuestionIndex = 0;
let correctAnswers = 0;
let unansweredQuestions = [...Array(questions.length).keys()];

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionTextElement = document.createElement("p");
  questionTextElement.textContent = currentQuestion.question;
  questionElement.appendChild(questionTextElement);

  const answersElement = document.createElement("div");
  answersElement.classList.add("answers");

  currentQuestion.answers.forEach((answer, index) => {
    const answerElement = document.createElement("button");
    answerElement.classList.add("answer");
    answerElement.textContent = answer;
    answerElement.addEventListener("click", () => {
      if (index === currentQuestion.correctAnswer) {
        answerElement.classList.add("correct");
        setTimeout(() => {
          answerElement.classList.remove("correct");
          document.body.style.backgroundColor = " ";
          goToNextQuestion();
        }, 1000);
        const correctAnswerElement = document.createElement("p");
        correctAnswerElement.textContent = `You are correct!`;
        questionElement.appendChild(correctAnswerElement);

        correctAnswers++;
      } else {
        setTimeout(() => {
          answerElement.classList.remove("wrong");
          goToNextQuestion();
        }, 2000);
        const correctAnswerElement = document.createElement("p");
        correctAnswerElement.classList.add("correct-answer");
        correctAnswerElement.textContent = `The correct answer is ${
          currentQuestion.answers[currentQuestion.correctAnswer]
        }`;
        questionElement.appendChild(correctAnswerElement);
      }
    });
    answersElement.appendChild(answerElement);
  });

  questionElement.appendChild(answersElement);
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = "";
  quizElement.appendChild(questionElement);
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}
function goToNextQuestion() {
  unansweredQuestions.splice(
    unansweredQuestions.indexOf(currentQuestionIndex),
    1
  );
  if (unansweredQuestions.length === 0) {
    unansweredQuestions = [...Array(questions.length).keys()];
    currentQuestionIndex = unansweredQuestions[0];
    showResults();
    return;
  }
  currentQuestionIndex = unansweredQuestions[0];
  updateProgressBar();
  displayQuestion();
}

function showResults() {
  const quizElement = document.getElementById("quiz_results");
  quizElement.innerHTML = "";
  const resultsElement = document.createElement("div");
  resultsElement.classList.add("results");
  const scoreElement = document.createElement("h4");
  scoreElement.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct.`;
  resultsElement.appendChild(scoreElement);
  quizElement.appendChild(resultsElement);
}

displayQuestion();
updateProgressBar();
