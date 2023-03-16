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
var nextButton = document.querySelector('#next-question');
var scoreDisplay = document.querySelector('#score');
var contentContainer = document.querySelector('.content');

var time = 60;
//counter for next question loop
var counter = 0;
var score = 0;


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
    'question': 'What does HTML do?',
    'choices': ['Reads all text on the screen',
                'Creates the content of the webpage', 
                'Changes the style of the document body', 
                'Sends the browser data to a server'],
    'answer': 'Creates the content of the webpage'},
    {
    'question': 'What does CSS do?',
    'choices': ['Styles the paragraphs of a webpage',
                'Holds the content of the webpage', 
                'Contains the content of a webpage', 
                'Styles the webpage'],
    'answer': 'Styles the webpage'},
    {
    'question': 'What does JavaScript do?',
    'choices': ['Makes the webpage interactive',
                'Holds the content of the page', 
                'Changes the font of the page', 
                'Styles the look of the webpage'],
    'answer': 'Makes the webpage interactive'}
]




//Initiates the start of the application
function quizStart() {
  

    document.body.style.backgroundColor = 'blue';
    nextButton.style.visibility = 'visible';

    timeLeft;
    hideHome();
    nextQuestion();

}

//Timer function
var timeLeft = function startTimer() {
    setInterval (function () {
        if (time > 0) {
        time--;
        timer.textContent = `Time left: ${time} seconds`;
        } else {
            timer.textContent = `TIME'S UP!`;
            document.body.style.backgroundColor = 'red';
        }
    }, 1000);

    function stopTimer() {
        clearInterval(timeLeft);
    }
}

function displayScore() {
    scoreDisplay.textContent = `Score: ${score}`;
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


//Loops through to the next question every time a user clicks on an answer choice
function nextQuestion() {
    answerButtonsContainer.style.visibility = 'visible';
    document.body.style.backgroundColor = 'blue';

    endQuiz();


    for (let i = 0; i <= counter; i++) {
            questionHeader.textContent = questions[i].question;
            answerChoice1.textContent = questions[i].choices[0];
            answerChoice2.textContent = questions[i].choices[1];
            answerChoice3.textContent = questions[i].choices[2];
            answerChoice4.textContent = questions[i].choices[3];
        }
    
    counter++;

    
}


function feedback(event) {



    for (let j = 0; j <= questions.length; j++) {

        if ((event.target.textContent == questions[0].answer) ||
            (event.target.textContent == questions[1].answer) ||
            (event.target.textContent == questions[2].answer) ||
            (event.target.textContent == questions[3].answer) ||
            (event.target.textContent == questions[4].answer)) {

            score +=5;
            displayScore();
            nextQuestion();
            document.body.style.backgroundColor = 'green';
            return;

        } else {
            document.body.style.backgroundColor = 'red';
            time -= 5;
            score -= 5;
            displayScore();
            return;
        }
    }


}

function endQuiz() {
    answerButtonsContainer.remove();
    questionHeader.remove();
    nextButton.remove();
    document.body.style.backgroundColor = 'yellow';

    var finalScore = score += time;
    timer.textContent = 'Quiz Over';
    
    //Create Form to submit your initials for leaderboard
    var form = document.createElement('form');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');


    form.textContent = 'Great Job! Please input your initials to register your high score to the leaderboard.'
    label1.textContent = `Score: ${finalScore}`;
    label2.textContent = `Score: ${finalScore}`;

    label1.style.display = 'block';
    label2.style.display = 'block';

    contentContainer.appendChild(form);
    form.appendChild(label1);
    form.appendChild(lable2);


    stopTimer();

}



//Create Questions for the test

//Add event listeners for each button
startButton.addEventListener('click', quizStart);

answerButtons.forEach(element => {
    element.addEventListener('click', feedback)});

nextButton.addEventListener('click', nextQuestion);
