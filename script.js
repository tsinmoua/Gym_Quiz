function quizTimer() {
    var timeLeft = 100;
  
    var timeInterval = setInterval(function() {
        document.querySelector(".timer").textContent = "Seconds remaining: " + timeLeft;
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

quizTimer();
