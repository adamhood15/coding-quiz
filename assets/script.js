//References for elements on the webpage
var questionHeader = document.querySelector('#question-header');
var answerButtonsContainer = document.querySelector('.answer-buttons');
var answerButtons = document.querySelectorAll('.answer-choices');
var answerChoice1 = document.querySelector('#answer-choice-1');
var answerChoice2 = document.querySelector('#answer-choice-2');
var answerChoice3 = document.querySelector('#answer-choice-3');
var answerChoice4 = document.querySelector('#answer-choice-4');
var nextButton = document.querySelector('#next-question');
var scoreDisplay = document.querySelector('#score');
var contentContainer = document.querySelector('.content');
var tryAgainButton = document.querySelector('#try-again');
var timer = document.getElementById('time-left');
var startButton = document.getElementById('start');
var gameOn = false;


//counter for next question loop
var time = 60;
var counter = 0;
var score = 0;
var highScoreArray = [];
var finalScoreArray = [];



//Stores each question as objects in array
var questions = [
    {
    'question': 'What does HTML stand for?',
    'choices': ['HyperText Markdown Language', 
                'HooperText Markup Language',
                'HyperText Markup Language', 
                'HighTight Marker Language'],
    'answer': 'HyperText Markdown Language'
    },
    
    {
    'question': 'What does CSS stand for?',
    'choices': ['Cascading Short Script',
                'Cascading Style Script', 
                'Cascading Style Sheet', 
                'Cat Style Sheet'],
    'answer': 'Cascading Style Sheet'
    },

    {
    'question': 'What does HTML do?',
    'choices': ['Reads all text on the screen',
                'Creates the content of the webpage', 
                'Changes the style of the document body', 
                'Sends the browser data to a server'],
    'answer': 'Creates the content of the webpage'
    },

    {
    'question': 'What does CSS do?',
    'choices': ['Styles the paragraphs of a webpage',
                'Holds the content of the webpage', 
                'Contains the content of a webpage', 
                'Styles the webpage'],
    'answer': 'Styles the webpage'
    },

    {
    'question': 'What does JavaScript do?',
    'choices': ['Makes the webpage interactive',
                'Holds the content of the page', 
                'Changes the font of the page', 
                'Styles the look of the webpage'],
    'answer': 'Makes the webpage interactive'
    }
]


//Initiates the start of the application
function quizStart() {

    gameOn = true;
    //Removes homepage content
    answerButtonsContainer.style.visibility = 'visible';

    startButton.style.visibility = 'hidden';
    document.querySelector('p').remove();

    //Starts Timer and Displays first question
    startTimer();
    nextQuestion();
    document.body.style.backgroundColor = 'blue';

}

//Loops through to the next question every time a user clicks on an answer choice
function nextQuestion() {
    document.body.style.backgroundColor = 'green';
    scoreDisplay.textContent = `Score: ${score}`;


    for (let i = 0; i <= counter; i++) {

        if (questions[i] && questions[i].question) {
            questionHeader.textContent = questions[i].question;
            answerChoice1.textContent = questions[i].choices[0];
            answerChoice2.textContent = questions[i].choices[1];
            answerChoice3.textContent = questions[i].choices[2];
            answerChoice4.textContent = questions[i].choices[3];
       
        } else {
            endQuiz();
            clearInterval(startTimer);
        }
    }
    counter++;
    
}

//Starts Timer function
function startTimer() {
    var startTimer = setInterval (function () {

        if (gameOn) {
        time--;
        timer.textContent = `Time left: ${time} seconds`;
        }
        if (time <= 0) {
            clearInterval(startTimer);
            endQuiz();
            timer.textContent = `TIME'S UP!`;
        }
    }, 1000);

}

//Currently hard coded all answers into feedback loop. Will need to hardcode answers as you create new ones
//If question is correct, changes background color and moves to next question
//If question is wrong, changes background color to red and subtracts time from timer
function feedback(event) {

    for (let j = 0; j <= questions.length; j++) {

        if ((event.target.textContent == questions[0].answer) ||
            (event.target.textContent == questions[1].answer) ||
            (event.target.textContent == questions[2].answer) ||
            (event.target.textContent == questions[3].answer) ||
            (event.target.textContent == questions[4].answer)) {

            score +=5;
            nextQuestion();
            return;

        } else {
            document.body.style.backgroundColor = 'red';
            time -= 5;
            score -= 5;
            return;
        }
    }


}


//Ends the quiz and allows user to input high score
//Triggers when you answer last question correctly or time runs out
function endQuiz() {
    
    var finalScore = score += time;
    finalScoreArray.push(finalScore);
    //Create Form to submit your initials for leaderboard
    var form = document.createElement('form');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    var initialsInput = document.createElement('input');
    var submitButton = document.createElement('button');

    answerButtonsContainer.remove();
    questionHeader.remove();

    gameOn = false;
   
    document.body.style.backgroundColor = 'yellow';
    tryAgainButton.style.visibility = 'visible';
    scoreDisplay.textContent = `Final Score: ${finalScore}`;
    timer.textContent = 'Quiz Over';
    form.textContent = 'Great Job! Please input your name to register your high score to the leaderboard.'
    label1.textContent = `Initials: `;
    label2.textContent = `Score: ${finalScore}`;
    submitButton.textContent = 'Submit Score';
    label1.style.display = 'block';
    label2.style.display = 'block';
    submitButton.setAttribute('class', 'submit');

    contentContainer.appendChild(form);
    form.appendChild(label1);
    form.appendChild(label2);
    label1.appendChild(initialsInput);
    form.appendChild(submitButton);

}

//Displays leaderboard that was stored by localStorage
function leaderBoardDisplay(event) {

    var input = document.querySelector('input');
    event.preventDefault();
    var getHiScore = localStorage.getItem('High Score List');

   
//Creates leader board page when you click on the Submit Score Button
    if (event.target.textContent == 'Submit Score') {

        //Stores user initials and score in an object
        var userInput = input.value;
        //Validation of initials
        if (userInput === '') {
            alert('Please type in a name');
            leaderBoardDisplay();
        }
        var highScore = {'initials': userInput, 'score': finalScoreArray[0]}
        var form = document.querySelector('form');
        form.remove();

        /*Checks if there is a score in local storage. If there is it replaces the high score
        array with the value in local storage*/
        if (getHiScore) {
            highScoreArray = (JSON.parse(getHiScore));
        }
        highScoreArray.push(highScore);
        localStorage.setItem('High Score List', JSON.stringify(highScoreArray));

        var leaderBoard = document.createElement('ol');
        leaderBoard.textContent = 'Leader Board';
        contentContainer.appendChild(leaderBoard);
   
        highScoreArray.sort(
            (hs1, hs2) =>
            (hs1.score < hs2.score) ? 1 : (hs1.score > hs2.score) ? -1: 0);

        for (i = 0; i < highScoreArray.length; i++) {
            var liEl = document.createElement('li')
            liEl.textContent = highScoreArray[i].initials + ': ' + highScoreArray[i].score;
            leaderBoard.appendChild(liEl);

        }


    }
}


//Starts quiz when you click startButton
startButton.addEventListener('click', quizStart);

//Click events for answer choices either provides feedback or goes to next question
answerButtons.forEach(element => {
    element.addEventListener('click', feedback)});

//When you click submit form, this executes
contentContainer.addEventListener('click', leaderBoardDisplay);

tryAgainButton.addEventListener('click', function() {
    window.location.reload();
})