var timerEl = document.querySelector(".timer");

quizTimer();

function quizTimer() {
    var timeLeft = 5; //timer start at 100 seconds

    var timeInterval = setInterval(function () {
        timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
        timerEl.style.cssText = "display: block;"; //styles timer on screen
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds remaining: " + timeLeft;
            // timeOut();
            clearInterval(timeInterval);
        }

        function timeOut() {
            document.querySelector(".question").textContent = "Your score: " + timeLeft;
            document.querySelector("#picture").style.cssText = "display: none;";
            document.querySelector(".answer1").style.cssText = "display: none;";
            document.querySelector(".answer2").style.cssText = "display: none;";
            document.querySelector(".answer3").style.cssText = "display: none;";
            document.querySelector(".answer4").style.cssText = "display: none;";
        }

    }, 1000);
}

var questionEl = document.querySelector(".question");
var pictureEl = document.querySelector("#picture");
var answerEl1 = document.querySelector(".answer1");
var answerEl2 = document.querySelector(".answer2");
var answerEl3 = document.querySelector(".answer3");
var answerEl4 = document.querySelector(".answer4");

var equipment = {
    barbellbench: "https://image.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-260nw-430936051.jpg",
    hacksquat: "https://image.shutterstock.com/image-illustration/hack-squats-3d-illustration-260nw-421042363.jpg",
    latpulldown: "https://bodybuilding-wizard.com/wp-content/uploads/2018/07/machine-lat-pulldown-exercise-guide-image.jpg",
    cablerow: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1500547685239-22WB8YGJZLO6805RK2TL/ke17ZwdGBToddI8pDm48kJeMd1aOD9wY74Xieafi8WFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG1tpL9CMMzc7q55vPoFbo6M0KGpCpuE1jRFw9f6blgQFtO8nJtk629tZGIWiyY3XQ/Bent+Bar+Seated+Cable+Row"
};

questionEl.textContent = "What excercise is being performed in the picture below?"

// Adding the element img to the HTML under id "picture"
var picture = document.createElement("img");
var pictureEl = document.querySelector("#picture");
pictureEl.appendChild(picture).src = equipment.barbellbench;




var questions = [
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        answers: [
            { text: 'Dumbell Bench', correct: false},
            { text: 'Skullcrusher', correct: false},
            { text: 'Barbell Bench', correct: true},
            { text: 'Push-up', correct: false},
        ]
    },
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        answers: [
            { text: 'Hack Squat', correct: true},
            { text: 'Smith Machine Squat', correct: false},
            { text: 'Barbell Squat', correct: false},
            { text: 'Leg Press', correct: false},
        ]
    },
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        answers: [
            { text: 'Cable Row', correct: false},
            { text: 'Lat Pulldown', correct: true},
            { text: 'Pull Over', correct: false},
            { text: 'Shrug', correct: false},
        ]
    },
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        answers: [
            { text: 'Lat Pulldown', correct: false},
            { text: 'Bicep Curl', correct: false},
            { text: 'Row Row Row Your Boat', correct: false},
            { text: 'Cable Row', correct: true},
        ]
    },
]


var startEl = document.querySelector(".start");

startEl.addEventListener("click", function(event){
    questionEl.textContent = questions.question
});

answerEl1.addEventListener("click", function(event){
    event.preventDefault();
    questions.question
});