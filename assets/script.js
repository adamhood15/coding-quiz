/* When I click start, I want to start the timer 
and show the first question*/
var time = 60;

var timer = document.getElementById('time-left');
var startButton = document.getElementById('start');

//Initiates the start of the application
function quizStart() {
//Timer starts when user clicks start button
function startTimer() {
    setInterval (function () {
        if (time > 0) {
        time--;
        timer.textContent = `Time left: ${time} seconds`;
        } 
    }, 1000);
}
startTimer();


}

//Create Questions for the test


//Add event listeners for each button
startButton.addEventListener('click', quizStart);
