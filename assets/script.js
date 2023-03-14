var body = document.body;
//creating question and buttons for quiz
var questionHeader = document.querySelector('#question-header');
var answerButtonsContainer = document.querySelector('.answer-buttons');
var answerButtons = document.querySelectorAll('.answer-choices');
var timer = document.getElementById('time-left');
var startButton = document.getElementById('start');
var answerChoice1 = document.querySelector('#answer-choice-1');
var answerChoice2 = document.querySelector('#answer-choice-2');
var answerChoice3 = document.querySelector('#answer-choice-3');
var answerChoice4 = document.querySelector('#answer-choice-4');

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
                    'c': 'HyperText Markup Language', 'd': 'HighTight Marker Language'},

    'answer2' : {'a': 'Cascading Short Script', 'b': 'Cascading Style Script',
                    'c': 'Cascading Style Sheet', 'd': 'Cat Stye Shet'},

    'answer3' : {'a': 'Styles the webpage', 'b': 'Contains the content of the webpage',
                    'c': 'Changes the style of the document body', 'd': 'Makes the webpage interactive'},

    'answer4' : {'a': 'Styles the paragraphs of a webpage', 'b': 'Holds the content of the page',
                    'c': 'Makes the webpage interactive', 'd': 'Styles the webpage'},

    'answer5' : {'a': 'Makes the webpage interactive', 'b': 'Holds the content of the page',
                    'c': 'Changes the font of the page', 'd': 'Styles the webpage'}
                
}


//Initiates the start of the application
function quizStart() {
  
    startTimer();
    hideHome();
    displayQuestion();
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


function hideHome() {
    document.querySelector('p').style.visibility = 'hidden';
    startButton.style.visibility = 'hidden';
   
}

function hideChoices() {
    answerButtonsContainer.style.visibility = 'hidden';

}


function displayQuestion() {
    document.body.style.backgroundColor = 'blue';
    answerButtonsContainer.style.visibility = 'visible';


    answerChoice1.textContent = Object.values(answerChoices.answer1)[0];
    answerChoice2.textContent = Object.values(answerChoices.answer1)[1];
    answerChoice3.textContent = Object.values(answerChoices.answer1)[2];
    answerChoice4.textContent = Object.values(answerChoices.answer1)[3];

    for (var i = 0; i < Object.keys(questions).length; i++) {
        var question = questionHeader.textContent = Object.values(questions)[i];
        return question;
    }

}

//Next Question Function
function nextQuestion() {
    body.backgroundColor = 'yellow';

    //Object.keys allows you to get the length of the keys of your object
    //Object.values allows you to pull the values from your object

        for (var i = 0; i < Object.keys(questions).length; i++) {
            var question = document.querySelector('h2').textContent = Object.values(questions)[i];
            return question;
        }


}


console.log(document.querySelectorAll('.answer-choices'));


//Create Questions for the test

//Add event listeners for each button
startButton.addEventListener('click', quizStart);

answerButtons.forEach(element => {
    element.addEventListener('click', function(){
        questionHeader.style.color = 'blue';
    })
}) 
