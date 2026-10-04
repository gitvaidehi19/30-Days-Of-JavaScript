// ================================
// Questions
// ================================

const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "print", "echo", "display"],
        answer: "var"
    },

    {
        question: "Which method is used to add an item to the end of an array?",
        options: [".add()", ".push()", ".insert()", ".append()"],
        answer: ".push()"
    },

    {
        question: "Which symbol is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },

    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },

    {
        question: "Which keyword is used to create a function?",
        options: ["function", "method", "define", "func"],
        answer: "function"
    }
];


// ================================
// Get HTML Elements
// ================================

const questionElement = document.getElementById("question");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const nextBtn = document.getElementById("nextBtn");

const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");

const scoreElement = document.getElementById("score");


// ================================
// Variables
// ================================

let currentQuestion = 0;
let score = 0;
let answerSelected = false;


// ================================
// Store Options
// ================================

const optionButtons = [
    option1,
    option2,
    option3,
    option4
];


// ================================
// Display Total Questions
// ================================

totalQuestions.textContent = questions.length;


// ================================
// Display Question
// ================================

function showQuestion() {

    const current = questions[currentQuestion];

    // Display question
    questionElement.textContent = current.question;

    // Display question number
    questionNumber.textContent = currentQuestion + 1;

    // Display options
    optionButtons.forEach(function(button, index) {
        button.textContent = current.options[index];

        // Reset button styling
        button.style.backgroundColor = "";
        button.style.borderColor = "";
        
        // Enable button
        button.disabled = false;
    });

    // Reset answer selection
    answerSelected = false;
}


// ================================
// Check Answer
// ================================

function checkAnswer(event) {

    // Prevent selecting multiple answers
    if (answerSelected === true) {
        return;
    }

    answerSelected = true;

    const selectedAnswer = event.target.textContent;

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {

        score++;

        event.target.style.backgroundColor = "#b8e6a1";
        event.target.style.borderColor = "#72b956";

    } else {

        event.target.style.backgroundColor = "#f4b6b6";
        event.target.style.borderColor = "#d66b6b";

        // Highlight correct answer
        optionButtons.forEach(function(button) {

            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "#b8e6a1";
                button.style.borderColor = "#72b956";
            }

        });
    }

    // Update score
    scoreElement.textContent = score;

    // Disable all options
    optionButtons.forEach(function(button) {
        button.disabled = true;
    });
}


// ================================
// Add Click Event to Options
// ================================

optionButtons.forEach(function(button) {

    button.addEventListener("click", checkAnswer);

});


// ================================
// Next Question
// ================================

nextBtn.addEventListener("click", function() {

    // Don't move to next question
    // until an answer has been selected
    if (answerSelected === false) {
        alert("Please select an answer first!");
        return;
    }

    currentQuestion++;

    // Check if quiz is finished
    if (currentQuestion >= questions.length) {

        showFinalResult();

    } else {

        showQuestion();

    }

});


// ================================
// Show Final Result
// ================================

function showFinalResult() {

    questionElement.textContent =
        "Quiz Completed! 🎉";

    questionNumber.textContent = questions.length;

    // Remove options
    optionButtons.forEach(function(button) {
        button.style.display = "none";
    });

    // Change Next button
    nextBtn.textContent = "Restart Quiz";

    // Change button behavior
    nextBtn.onclick = restartQuiz;

    // Show final score
    scoreElement.textContent =
        score + " / " + questions.length;
}


// ================================
// Restart Quiz
// ================================

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    answerSelected = false;

    scoreElement.textContent = score;

    // Show options again
    optionButtons.forEach(function(button) {
        button.style.display = "block";
    });

    // Change button back
    nextBtn.textContent = "Next Question";

    // Remove restart behavior
    nextBtn.onclick = null;

    // Show first question
    showQuestion();
}


// ================================
// Start Quiz
// ================================

showQuestion();