var timerEl = document.querySelector(".timer");

quizTimer();

function quizTimer() {
    var timeLeft = 5; //timer start at 100 seconds

    var timeInterval = setInterval(function () {
        timerEl.textContent = "Seconds remaining: " + timeLeft; //displays timer on screen
        timerEl.style.cssText = "float: right;"; //styles timer on screen
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "Seconds remaining: " + timeLeft;
            // timeOut();
            clearInterval(timeInterval);
        }

        function timeOut() {
            document.querySelector(".question").textContent = "Your score: " + timeLeft;
            document.querySelector(".answer1").style.cssText = "display: none;";
            document.querySelector(".answer2").style.cssText = "display: none;";
            document.querySelector(".answer3").style.cssText = "display: none;";
            document.querySelector(".answer4").style.cssText = "display: none;";
        
        }

    }, 1000);
}

var questionEl = document.querySelector(".question");
var answerEl1 = document.querySelector(".answer1");
var answerEl2 = document.querySelector(".answer2");
var answerEl3 = document.querySelector(".answer3");
var answerEl4 = document.querySelector(".answer4");

