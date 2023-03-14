var body = document.body;
//creating question and buttons for quiz
var question = document.createElement('h2');

var answerChoiceA = document.getElementById('a');
var answerChoiceB = document.getElementById('b');
var answerChoiceC = document.getElementById('c');
var answerChoiceD = document.getElementById('d');

var questions = {
    'question1': 'What does HTML stand for?',
    'question2': 'What does CSS stand for?',
    'question3': 'What does HTML do?',
    'question4': 'What does CSS do?',
    'question5': 'What does JavaScript do?'
}

var answers = {
    'answer1' : {'a': 'HyperText Mardown Language', 'b': 'HooperText Markup Language',
                    'b': 'HyperText Markup Language', 'd': 'HighTight Marker Language'},

    'answer2' : {'a': 'HyperText Mardown Language', 'b': 'HooperText Markup Language',
                    'b': 'HyperText Markup Language', 'd': 'HighTight Marker Language'},

    'answer3' : {'a': 'HyperText Mardown Language', 'b': 'HooperText Markup Language',
                    'b': 'HyperText Markup Language', 'd': 'HighTight Marker Language'},

    'answer4' : {'a': 'HyperText Mardown Language', 'b': 'HooperText Markup Language',
                    'b': 'HyperText Markup Language', 'd': 'HighTight Marker Language'},

    'answer' : {'a': 'HyperText Mardown Language', 'b': 'HooperText Markup Language',
                    'b': 'HyperText Markup Language', 'd': 'HighTight Marker Language'}
                
}

var answerA = 'Hyper Toddler Mark Language';
var answerB = 'Hello Sunny';
var answerC = 'Butt';
var answerD = 'Hyper Text Markup Language';

/* When I click start, I want to start the timer 
and show the first question*/
var time = 60;

var timer = document.getElementById('time-left');
var startButton = document.getElementById('start');
var questionHeader = document.getElementsByClassName('header');

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

//Question 1
document.querySelector('h2').textContent = 'What does HTML stand for?';
document.querySelector('p').textContent = '';
document.querySelector('button').style.visibility = 'hidden';

answerChoiceA.style.visibility = 'visible';
answerChoiceB.style.visibility = 'visible';
answerChoiceC.style.visibility = 'visible';
answerChoiceD.style.visibility = 'visible';

}

//Create Questions for the test

//Add event listeners for each button
startButton.addEventListener('click', quizStart);
