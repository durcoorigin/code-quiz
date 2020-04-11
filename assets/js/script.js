
// ****** Global Variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// ****** Quiz Array
var codeQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers"
        },
        correctAnswer: "c"
    },

    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: {
            a: "Quotes",
            b: "Curley Brackets",
            c: "Parenthesis",
            d: "Square Brackets"
        },
        correctAnswer: "c"
    },

    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: "Numbers and Strings",
            b: "Other Arrays",
            c: "Booleans",
            d: "All of the above"
        },
        correctAnswer: "d"
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            a: "Commas",
            b: "Curly Brackets",
            c: "Quotes",
            d: "Parenthesis"
        },
        correctAnswer: "c"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "console.log",
            b: "Terminal/Bash",
            c: "for loops",
            d: "JavaScript"
        },
        correctAnswer: "a"
    },
    
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: "Numbers and Strings",
            b: "Other Arrays",
            c: "Booleans",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
]

// ****** Build the Quiz
function buildQuiz() {

}

// ****** Display Results
function showResults() {

}

buildQuiz()

// ****** Event Listeners
submitButton.addEventListener('click', showResults)
