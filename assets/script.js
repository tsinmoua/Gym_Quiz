var containerEl = document.querySelector(".container");
var instructionsEl = document.querySelector(".instructions");
var timerEl = document.querySelector(".timer, .hide");
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
var nameEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var hide = [startEl, nextEl, instructionsEl];
var appear = [questionEl, picEl, answerContainerEl, timerEl];
var disableButtons = [buttonEl1, buttonEl2, buttonEl3, buttonEl4];
var headerEl = document.querySelector("#header");
var user;
var currentQuestionIndex;
var timeLeft;
var timeInterval;

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
        ],
        correctAnswer: 'Barbell Bench Press'

    },
    // Array 1
    {
        question: 'What is the equipment/excercise being performed in the picture?',
        pic: "https://image.shutterstock.com/image-illustration/hack-squats-3d-illustration-260nw-421042363.jpg",
        answers: [
            { text: 'Hack Squat', correct: true },
            { text: 'Smith Machine Squat', correct: false },
            { text: 'Barbell Squat', correct: false },
            { text: 'Leg Press', correct: false },
        ],
        correctAnswer: 'Hack Squat'
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
        ],
        correctAnswer: 'Lat Pulldown'
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
        ],
        correctAnswer: 'Cable Row'
    },
]

// Start the quiz, it removes the directions and gives you the Q&A
startEl.addEventListener("click", startGame);
function startGame() {
    for (var i = 0; i < hide.length; i++) {
        hide[i].classList.add("hide");
    }
    for (var i = 0; i < appear.length; i++) {
        appear[i].classList.remove("hide");
    }
    change();
    quizTimer();
}
// Timer, starts off at 100s
function quizTimer() {
    timeLeft = 100;

    timeInterval = setInterval(function () {
        timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
        timerEl.style.cssText = "display: block;"; //styles timer on screen
        timeLeft--;

        if (timeLeft <= 0) {
            timerEl.textContent = "Seconds remaining: " + timeLeft;
            timeOut();
            clearInterval(timeInterval);
        }
    }, 1000);
}

function change() {
    questionEl.textContent = questions[currentQuestionIndex].question;
    picEl.src = questions[currentQuestionIndex].pic;
    buttonEl1.textContent = questions[currentQuestionIndex].answers[0].text;
    buttonEl2.textContent = questions[currentQuestionIndex].answers[1].text;
    buttonEl3.textContent = questions[currentQuestionIndex].answers[2].text;
    buttonEl4.textContent = questions[currentQuestionIndex].answers[3].text;
    nextEl.classList.add("hide");
}

currentQuestionIndex = 0
// The next button turns the answers back to white and cycles to the next Q&A
nextEl.addEventListener("click", nextQuestion);
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        finish();
    } else {
        for (let i = 0; i < disableButtons.length; i++) {
            disableButtons[i].disabled = false;
        }
        buttonEl1.style.cssText = "background-color: white";
        buttonEl2.style.cssText = "background-color: white";
        buttonEl3.style.cssText = "background-color: white";
        buttonEl4.style.cssText = "background-color: white";
        change();
    }
}

buttonEl1.addEventListener("click", showAnswer1);
buttonEl2.addEventListener("click", showAnswer2);
buttonEl3.addEventListener("click", showAnswer3);
buttonEl4.addEventListener("click", showAnswer4);

function disableTrue() {
    for (let i = 0; i < disableButtons.length; i++)
        disableButtons[i].disabled = true;
}
// See if the answers are wrong or correct
function wrong() {
    timeLeft = timeLeft - 5;
    nextEl.textContent = "Next Question";
    nextEl.classList.remove("hide");
}
function correct() {
    nextEl.textContent = "Next Question";
    nextEl.classList.remove("hide");
}

function showAnswer1() {
    if (buttonEl1.textContent !== questions[currentQuestionIndex].correctAnswer) {
        buttonEl1.style.cssText = "background-color: red";
        wrong();
        disableTrue();
    } else {
        buttonEl1.style.cssText = "background-color: green";
        correct();
        disableTrue();
    }
}

function showAnswer2() {
    if (buttonEl2.textContent !== questions[currentQuestionIndex].correctAnswer) {
        buttonEl2.style.cssText = "background-color: red";
        wrong();
        disableTrue();
    } else {
        buttonEl2.style.cssText = "background-color: green";
        correct();
        disableTrue();
    }
}

function showAnswer3() {
    if (buttonEl3.textContent !== questions[currentQuestionIndex].correctAnswer) {
        buttonEl3.style.cssText = "background-color: red";
        wrong();
        disableTrue()
    } else {
        buttonEl3.style.cssText = "background-color: green";
        correct();
        disableTrue();
    }
}

function showAnswer4() {
    if (buttonEl4.textContent !== questions[currentQuestionIndex].correctAnswer) {
        buttonEl4.style.cssText = "background-color: red";
        wrong();
        disableTrue();
    } else {
        buttonEl4.style.cssText = "background-color: green";
        correct();
        disableTrue();
    }
}
// Shows finish screen with input for name to see highscores
function finish() {
    document.querySelector(".question").textContent = "Your score: " + timeLeft;
    picEl.style.cssText = "display: none;";
    buttonEl1.style.cssText = "display: none;";
    buttonEl2.style.cssText = "display: none;";
    buttonEl3.style.cssText = "display: none;";
    buttonEl4.style.cssText = "display: none;";
    nextEl.classList.add("hide");
    clearInterval(timeInterval);
    timerEl.textContent = "";
    nameEl.classList.remove("hide")
    submitEl.classList.remove("hide")
}
// If time runs out, hides everything and alerts
function timeOut() {
    document.querySelector(".question").textContent = "Your score: " + timeLeft;
    picEl.style.cssText = "display: none;";
    buttonEl1.style.cssText = "display: none;";
    buttonEl2.style.cssText = "display: none;";
    buttonEl3.style.cssText = "display: none;";
    buttonEl4.style.cssText = "display: none;";
    nextEl.classList.add("hide");
    alert("You did not finish the quiz in time. Please try again by refreshing the page.")
}
// Shows high scores
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    user = nameEl.value
    if (user === "") {
        alert("Please enter in your name.")
    } else {
        submitEl.disabled = true;
        submitEl.classList.add("hide")
        localStorage.setItem("name", user);
        highScoreLog()
        instructionsEl.classList.remove("hide");
        nameEl.classList.add("hide");
        instructionsEl.removeChild(document.querySelector("h1"));
        instructionsEl.removeChild(document.querySelector("h2"));
        instructionsEl.removeChild(document.querySelector("p"));
        headerEl.textContent = "High Scores:";
        headerEl.style.cssText = "font-size: 60px"
        var list = document.createElement("ol");
        instructionsEl.appendChild(list);
        list.className = "list";
        for (let i = 0; i < highScores.length; i++) {
            var listEl = document.querySelector(".list");
            var liEl = document.createElement("li");
            listEl.appendChild(liEl);
            liEl.textContent = highScores[i].name + " " + highScores[i].score;
        }
    }
});

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);

function highScoreLog() {
    var score = {
        score: timeLeft,
        name: user,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);

    localStorage.setItem("highScores", JSON.stringify(highScores));
};