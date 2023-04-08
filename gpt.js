const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest country in the world?",
      choices: ["USA", "China", "Russia"],
      answer: "Russia"
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yen", "Dollar", "Euro"],
      answer: "Yen"
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  
  function showResults() {
    let correctAnswers = 0;
  
    quizData.forEach((questionData, questionIndex) => {
      const selector = `div.choice.selected[data-question="${questionIndex}"]`;
      const userAnswer = quizContainer.querySelector(selector);
  
      if (userAnswer && userAnswer.dataset.answer === questionData.answer) {
        correctAnswers++;
      }
    });
  
    resultsContainer.innerHTML = `You answered ${correctAnswers} out of ${quizData.length} questions correctly.`;
  }
  
  submitButton.addEventListener("click", () => {
    showResults();
  });
  