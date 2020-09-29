var containerEl = document.querySelector(".container");
var instructionsEl = document.querySelector(".instructions");
var timerEl = document.querySelector(".timer");
var questionContainerEl = document.querySelector(".questionContainer, .hide");
var questionEl = document.querySelector(".question");
var picEl = document.querySelector(".pic");
var answerContainerEl = document.querySelector(".answerContainer");
var buttonEl1 = document.querySelector("#button1");
var buttonEl2 = document.querySelector("#button2");
var buttonEl3 = document.querySelector("#button3");
var buttonEl4 = document.querySelector("#button4");
var buttonEl = document.querySelector(".btn");

var startEl = document.querySelector(".start");
var nextEl = document.querySelector(".next");

var hide = [startEl, nextEl, instructionsEl];
var appear = [questionEl, picEl, answerContainerEl];

var shuffleQuestions;
var currentQuestionIndex;



var questions = [
    // Array 0
    {
        question: 'What is the equipment/excercise being performed in the picture?', // Object 1
        pic: "https://image.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-260nw-430936051.jpg",
        answers: [ // Object 2
            {text: "Dumbell Bench Press", correct: false }, // Array 0
            {text: 'Skullcrusher', correct: false }, // Array 1
            {text: 'Barbell Bench Press', correct: true }, // Array 2
            {text: 'Push-up', correct: false }, // Array 3
        ]
    },
    // Array 1
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        pic: "https://image.shutterstock.com/image-illustration/hack-squats-3d-illustration-260nw-421042363.jpg",
        answers: [
            {text: 'Hack Squat', correct: true},
            {text: 'Smith Machine Squat', correct: false},
            {text: 'Barbell Squat', correct: false},
            {text: 'Leg Press', correct: false},
        ]
    },
    // Array 2
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        pic: "https://bodybuilding-wizard.com/wp-content/uploads/2018/07/machine-lat-pulldown-exercise-guide-image.jpg",
        answers: [
            {text: 'Cable Row', correct: false },
            {text: 'Lat Pulldown', correct: true },
            {text: 'Pull Over', correct: false },
            {text: 'Shrug', correct: false },
        ]
    },
    // Array 3
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        pic: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1500547685239-22WB8YGJZLO6805RK2TL/ke17ZwdGBToddI8pDm48kJeMd1aOD9wY74Xieafi8WFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG1tpL9CMMzc7q55vPoFbo6M0KGpCpuE1jRFw9f6blgQFtO8nJtk629tZGIWiyY3XQ/Bent+Bar+Seated+Cable+Row",
        answers: [
            {text: 'Lat Pulldown', correct: false },
            {text: 'Bicep Curl', correct: false },
            {text: 'Row Row Row Your Boat', correct: false },
            {text: 'Cable Row', correct: true },
        ]
    },
]



startEl.addEventListener("click", startGame);
nextEl.addEventListener("click", closeTab);


// Closes current tab
function closeTab () {
    var sureClose = confirm("Are you sure you want to exit?");
    if (sureClose === true) {
        close(); 
    }
}

// Starting point after hit Start button
function startGame() {
    console.log("Started");
    // console.log(hide);

    for (var i = 0; i < hide.length; i++) {
        hide[i].classList.add("hide");
    }

    // console.log(appear);

    for (var i = 0; i < appear.length; i++) {
        appear[i].classList.remove("hide");
    }

    // console.log(questionEl.innerText);
    // console.log(picEl.classList);


    // console.log(questions.sort(() => Math.random() -.5));
    shuffleQuestions = questions.sort(() => Math.random() - .5);

    console.log(questions[0].question);
    console.log(questions[0].answers[0].text);
    console.log(questions[0].answers[0].correct);


    questionEl.textContent = questions[0].question;
    picEl.src = questions[0].pic;
    buttonEl1.textContent = questions[0].answers[0].text;
    buttonEl2.textContent = questions[0].answers[1].text;
    buttonEl3.textContent = questions[0].answers[2].text;
    buttonEl4.textContent = questions[0].answers[3].text;

    quizTimer();
}

console.log(questions[0].answers[0].correct);

buttonEl1.addEventListener("click", showAnswer);
buttonEl2.addEventListener("click", showAnswer);
buttonEl3.addEventListener("click", showAnswer);
buttonEl4.addEventListener("click", showAnswer);


function showAnswer () {
    if (questions[0].answers[0].correct === false) {
        containerEl.style.cssText = "background-color: red";
        nextEl.textContent = "Next Question";
        nextEl.classList.remove("hide");
    } else {
        containerEl.style.cssText = "background-color: green";
        nextEl.textContent = "Next Question";
        nextEl.classList.remove("hide");
    }
}

var timeLeft = 100; //timer start at 100 seconds
var incorrectAnswer = timeLeft - 5;

function quizTimer() {

    var timeInterval = setInterval(function () {
        timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
        timerEl.style.cssText = "display: block;"; //styles timer on screen
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds remaining: " + timeLeft;
            timeOut();
            clearInterval(timeInterval);
        }

        function timeOut() {
            document.querySelector(".question").textContent = "Your score: " + timeLeft;
            picEl.style.cssText = "display: none;";
            buttonEl1.style.cssText = "display: none;";
            buttonEl2.style.cssText = "display: none;";
            buttonEl3.style.cssText = "display: none;";
            buttonEl4.style.cssText = "display: none;";
        }

    }, 1000);
}
