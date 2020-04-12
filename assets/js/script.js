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
]




function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    // ****** Build the Quiz
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
    
        for(var i=0; i<questions.length; i++){
            
            answers = [];
    
            for(letter in questions[i].answers){
    
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        quizContainer.innerHTML = output.join('');
    }

    // ****** display results
    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
	
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
    
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
             
            }
            else{
               
            }
        }
    
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }  

}

function slide() {
    var indvQuestion = codeQuestions[0];
    var currentQuestion = document.getElementById("quiz");
    currentQuestion.textContent = indvQuestion.question;


    var indivAnswer = codeQuestions.question[0];
    var currentAnswer = document.getElementById("answerChoices");
    currentQuestion.textContent = indvQuestion.question.answers;
    
    indvQuestion.question.forEach(function (q, i) {
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent = q;
        buttonChoice.onclick = nextQuestion;
    })
}

// function nextQuestion() {


// }

// function timer() {
//     var timeLeft = 30;
//     var timerEl = document.createElement('h1');

//     var timeInterval = setInterval(function () {

//     })
// }


slide();


generateQuiz(codeQuestions, quizContainer, resultsContainer, submitButton);