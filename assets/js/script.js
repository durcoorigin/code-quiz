
// ****** Global Variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

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
    }
]

// ****** Build the Quiz
function buildQuiz() {
    var output = [];
    codeQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];    

            for(letter in currentQuestion.answers){
                answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                );
            }
      
            output.push(
              `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
              </div>`
            );
          }
        );
    quizContainer.innerHTML = output.join('');
}
// ****** Display Results
function showResults() {
var answerContainers = quizContainer.querySelectorAll('.answers');
let numCorrect = 0;

    codeQuestions.forEach( (currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
         //   answerContainer(questionNumber).style.color = 'lightgreen';
        }

        else{
        //   answerContainer[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${codeQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if(currentSlide === 0){
        previousButton.style.display = 'none';        
    }

    else{
        previousButton.style.display = 'inline-block';
    }

    if(currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }

    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
}

showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

buildQuiz()

// ****** Event Listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
