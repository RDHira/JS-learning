document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Saturn", "Venus"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Jane Austen"],
            answer: "Harper Lee"
        }
    ];

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const resultElement = document.getElementById("result");

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(function(option) {
            const optionBtn = document.createElement("button");
            optionBtn.textContent = option;
            optionBtn.addEventListener("click", function() {
                checkAnswer(option);
            });
            optionsElement.appendChild(optionBtn);
        });
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            score++;
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = "Wrong!";
        }
        nextBtn.disabled = false;
    }

    nextBtn.addEventListener("click", function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
            resultElement.textContent = "";
            nextBtn.disabled = true;
        } else {
            showResult();
        }
    });

    function showResult() {
        questionElement.textContent = "";
        optionsElement.innerHTML = "";
        resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
        nextBtn.style.display = "none";
    }

    // Start the quiz
    showQuestion();
});
