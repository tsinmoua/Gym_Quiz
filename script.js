var containerEl = document.querySelector(".container");
var instructionsEl = document.querySelector(".instructions");
var timerEl = document.querySelector(".timer");
var questionContainerEl = document.querySelector(".questionContainer, .hide");
var questionEl = document.querySelector(".question");
var picEl = document.querySelector(".pic");
var answerContainerEl = document.querySelector(".answerContainer");
var buttonEl = document.querySelector(".button");
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
            { text: 'Dumbell Bench Press', correct: false }, // Array 0
            { text: 'Skullcrusher', correct: false }, // Array 1
            { text: 'Barbell Bench Press', correct: true }, // Array 2
            { text: 'Push-up', correct: false }, // Array 3
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
            { text: 'Cable Row', correct: false },
            { text: 'Lat Pulldown', correct: true },
            { text: 'Pull Over', correct: false },
            { text: 'Shrug', correct: false },
        ]
    },
    // Array 3
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        pic: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1500547685239-22WB8YGJZLO6805RK2TL/ke17ZwdGBToddI8pDm48kJeMd1aOD9wY74Xieafi8WFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG1tpL9CMMzc7q55vPoFbo6M0KGpCpuE1jRFw9f6blgQFtO8nJtk629tZGIWiyY3XQ/Bent+Bar+Seated+Cable+Row",
        answers: [
            { text: 'Lat Pulldown', correct: false },
            { text: 'Bicep Curl', correct: false },
            { text: 'Row Row Row Your Boat', correct: false },
            { text: 'Cable Row', correct: true },
        ]
    },
]


startEl.addEventListener("click", startGame);

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

    currentQuestionIndex = 0;



    // console.log(questions[0].question);
    questionEl.innerText = questions[0].question; // sets question as a random question

    picEl.src = questions[0].pic; // sets picture of the random question

    console.log(questions[0].answers);

    var question1 = questions[0].answers;

    console.log(question1);

    buttonEl.forEach(function(answers) {
        buttonEl.textContent = answers;
    });

   

    function answers(item, index) {
        buttonEl.innerText += item;

        console.log(item);
        console.log(index);
    } 

    quizTimer();
}


function quizTimer() {
    var timeLeft = 100; //timer start at 100 seconds

    var timeInterval = setInterval(function () {
        timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
        timerEl.style.cssText = "display: block;"; //styles timer on screen
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds remaining: " + timeLeft;
            // timeOut();
            clearInterval(timeInterval);
        }

//         function timeOut() {
//             document.querySelector(".question").textContent = "Your score: " + timeLeft;
//             document.querySelector("#picture").style.cssText = "display: none;";
//             document.querySelector(".answer1").style.cssText = "display: none;";
//             document.querySelector(".answer2").style.cssText = "display: none;";
//             document.querySelector(".answer3").style.cssText = "display: none;";
//             document.querySelector(".answer4").style.cssText = "display: none;";
//         }

    }, 1000);
}



    function nextQuestion() {
        showQuestion(shuffleQuestions[currentQuestionIndex]);
    }


    console.log(questions);

    function showQuestion(question) {
        questionEl.innerText = questions.question;
    }

    function showQuestion(questions) {
        questionEl.innerText = questions[0];
    }






//     // var timerEl = document.querySelector(".timer");

// // quizTimer();

// // function quizTimer() {
// //     var timeLeft = 5; //timer start at 100 seconds

// //     var timeInterval = setInterval(function () {
// //         timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
// //         timerEl.style.cssText = "display: block;"; //styles timer on screen
// //         timeLeft--;

// //         if (timeLeft === 0) {
// //             timerEl.textContent = "Seconds remaining: " + timeLeft;
// //             // timeOut();
// //             clearInterval(timeInterval);
// //         }

// //         function timeOut() {
// //             document.querySelector(".question").textContent = "Your score: " + timeLeft;
// //             document.querySelector("#picture").style.cssText = "display: none;";
// //             document.querySelector(".answer1").style.cssText = "display: none;";
// //             document.querySelector(".answer2").style.cssText = "display: none;";
// //             document.querySelector(".answer3").style.cssText = "display: none;";
// //             document.querySelector(".answer4").style.cssText = "display: none;";
// //         }

// //     }, 1000);
// // }

// var questionEl = document.querySelector(".question");
// var pictureEl = document.querySelector("#picture");
// var answerEl1 = document.querySelector(".answer1");
// var answerEl2 = document.querySelector(".answer2");
// var answerEl3 = document.querySelector(".answer3");
// var answerEl4 = document.querySelector(".answer4");


// console.log(answerEl1.classList);
// console.log(answerEl2.classList);
// console.log(answerEl3.classList);
// console.log(answerEl4.classList);

// var equipment = {
//     barbellbench: "https://image.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-260nw-430936051.jpg",
//     hacksquat: "https://image.shutterstock.com/image-illustration/hack-squats-3d-illustration-260nw-421042363.jpg",
//     latpulldown: "https://bodybuilding-wizard.com/wp-content/uploads/2018/07/machine-lat-pulldown-exercise-guide-image.jpg",
//     cablerow: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1500547685239-22WB8YGJZLO6805RK2TL/ke17ZwdGBToddI8pDm48kJeMd1aOD9wY74Xieafi8WFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG1tpL9CMMzc7q55vPoFbo6M0KGpCpuE1jRFw9f6blgQFtO8nJtk629tZGIWiyY3XQ/Bent+Bar+Seated+Cable+Row"
// };

// questionEl.textContent = "What excercise is being performed in the picture below?"

// // Adding the element img to the HTML under id "picture"
// var picture = document.createElement("img");
// var pictureEl = document.querySelector("#picture");
// pictureEl.appendChild(picture).src = equipment.barbellbench;




// var questions = [
//     // Array 0
//     {
//         question: 'What is the equipment/excercise being performed in the picture?', // Object 1
//         answers: [ // Object 2
//             { text: 'Dumbell Bench Press', correct: false}, // Array 0
//             { text: 'Skullcrusher', correct: false}, // Array 1
//             { text: 'Barbell Bench Press', correct: true}, // Array 2
//             { text: 'Push-up', correct: false}, // Array 3
//         ]
//     },
//     // Array 1
//     {
//         question: 'What is the equipment/excercise being performed in the picture?',
//         answers: [
//             { text: 'Hack Squat', 
//             correct: true},
//             { text: 'Smith Machine Squat', 
//             correct: false},
//             { text: 'Barbell Squat', 
//             correct: false},
//             { text: 'Leg Press', 
//             correct: false},
//         ]
//     },
//     // Array 2
//     {
//         question: 'What is the equipment/excercise being performed in the picture?',
//         answers: [
//             { text: 'Cable Row', correct: false},
//             { text: 'Lat Pulldown', correct: true},
//             { text: 'Pull Over', correct: false},
//             { text: 'Shrug', correct: false},
//         ]
//     },
//     // Array 3
//     {
//         question: 'What is the equipment/excercise being performed in the picture?',
//         answers: [
//             { text: 'Lat Pulldown', correct: false},
//             { text: 'Bicep Curl', correct: false},
//             { text: 'Row Row Row Your Boat', correct: false},
//             { text: 'Cable Row', correct: true},
//         ]
//     },
// ]


// var startEl = document.querySelector(".start");

// startEl.addEventListener("click", function(event){
//     event.preventDefault();
//     questionEl.textContent = questions[0].question;
//     startEl.classList.add("hide");
//     answerEl1.classList.remove("hide");
//     answerEl1.textContent = questions[0].answers[0].text;
//     answerEl2.classList.remove("hide");
//     answerEl2.textContent = questions[0].answers[1].text;
//     answerEl3.classList.remove("hide");
//     answerEl3.textContent = questions[0].answers[2].text;
//     answerEl4.classList.remove("hide");
//     answerEl4.textContent = questions[0].answers[3].text;

// });

// var nextEl = document.querySelector(".next");

// console.log(nextEl.classList);

// answerEl1.addEventListener("click", function(event){

//     if (questions[0].answers[0].correct === false) {
//         answerEl1.textContent = questions[0].answers[0].text + " INCORRECT";
//         answerEl1.style.cssText = "background-color: red;";
//         nextEl.classList.remove("hide");
//     }

// });