var body = document.body;
//creating question and buttons for quiz
var question = document.createElement('h2');

var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var timer = document.getElementById('time-left');
var startButton = document.getElementById('start');
var questionHeader = document.getElementsByClassName('header');

var time = 60;

//Stores all question in object
var questions = {
    'question1': 'What does HTML stand for?',
    'question2': 'What does CSS stand for?',
    'question3': 'What does HTML do?',
    'question4': 'What does CSS do?',
    'question5': 'What does JavaScript do?'
}

//Store answer objects within an object called answers
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


//Initiates the start of the application
function quizStart() {
//Timer starts when user clicks start button
    startTimer();

}

//Timer function
function startTimer() {
    setInterval (function () {
        if (time > 0) {
        time--;
        timer.textContent = `Time left: ${time} seconds`;
        } 
    }, 1000);
}
    

//Next Question Function




//Create Questions for the test

//Add event listeners for each button
startButton.addEventListener('click', quizStart);
