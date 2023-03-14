var body = document.body;
//creating question and buttons for quiz
var questionHeader = document.querySelector('#question-header');
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
var answerChoices = {
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
    //clears out starting code for the questions
    displayChoices();

    nextQuestion();


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


function displayChoices() {
    document.querySelector('p').style.visibility = 'hidden';
    document.querySelector('#start').style.visibility = 'hidden';
    document.querySelector('#a').style.visibility = 'visible';
    document.querySelector('#b').style.visibility = 'visible';
    document.querySelector('#c').style.visibility = 'visible';
    document.querySelector('#d').style.visibility = 'visible';

}

function hideChoices() {
    document.querySelector('#a').style.visibility = 'hidden';
    document.querySelector('#b').style.visibility = 'hidden';
    document.querySelector('#c').style.visibility = 'hidden';
    document.querySelector('#d').style.visibility = 'hidden';
}

console.log(Object.keys(questions).length);

//Next Question Function
function nextQuestion() {
    
    //Object.keys allows you to get the length of the keys of your object
    //Object.values allows you to pull the values from your object
    for (var i = 0; i < Object.keys(questions).length; i++) {
        document.querySelector('h2').textContent = Object.values(questions)[i];
    }

}



//Create Questions for the test

//Add event listeners for each button
startButton.addEventListener('click', quizStart);
