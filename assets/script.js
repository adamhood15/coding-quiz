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

//Stores all question in array with the answers
var questions = [
    {
    'question': 'What does HTML stand for?',
    'choices': ['HyperText Markdown Language', 
                'HooperText Markup Language',
                'HyperText Markup Language', 
                'HighTight Marker Language'],
    'answer': 'HyperText Markdown Language'},

    {
    'question': 'What does CSS stand for?',
    'choices': ['Cascading Short Script',
                'Cascading Style Script', 
                'Cascading Style Sheet', 
                'Cat Style Sheet'],
    'answer': 'Cascading Style Sheet'},

    {
    'question3': 'What does HTML do?',
    'choices': ['Styles the webpage',
                'Contains the content of the webpage', 
                'Changes the style of the document body', 
                'Makes the webpage interactive'],
    'answer': 'Contains the content of the webpage'},
    {
    'question4': 'What does CSS do?',
    'choices': ['Styles the paragraphs of a webpage',
                'Holds the content of the webpage', 
                'Makes the webpage interactive', 
                'Styles the webpage'],
    'answer': 'Styles the webpage'},
    {
    'question5': 'What does JavaScript do?',
    'choices': ['Makes the webpage interactive',
                'Holds the content of the page', 
                'Changes the font of the page', 
                'Styles the webpage'],
    'answer': 'Makes the webpage interactive'}
]



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
        } else {
            timer.textContent = `TIME'S UP!`;
            document.body.style.backgroundColor = 'red';
        }
    }, 1000);
}

//Removes home content from webpage
function hideHome() {
    document.querySelector('p').remove();
    startButton.textContent = 'Next Question';
    startButton.style.visibility = 'hidden';
}

//Hide answer choice buttons on page load
function hideChoices() {
    answerButtonsContainer.style.visibility = 'hidden';

}


function displayQuestion() {
    document.body.style.backgroundColor = 'blue';
    answerButtonsContainer.style.visibility = 'visible';

}

//Next Question Function
function nextQuestion() {
    body.backgroundColor = 'blue';



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
