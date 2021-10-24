
const questionBank = [
    {
        question: 'Which driver raced the most laps in 2020?',
        choiceA: 'Lando Norris',
        choiceB: 'Charles Leclerc',
        choiceC: 'Max Verstappen',
        choiceD: 'Daniel Ricciardo',
        correctAnswer: 'A'
    },
    {
        question: 'What year did Michael Schumacher retire from F1?',
        choiceA: '2008',
        choiceB: '2012',
        choiceC: '2011',
        choiceD: '2017',
        correctAnswer: 'B'
    },
    {
        question: 'What does the red flag mean?',
        choiceA: 'Warns racing drivers of a slow moving car on track',
        choiceB: 'Indicate start or end of the race',
        choiceC: 'All clear, you can continue with race',
        choiceD: 'Indicates to the drivers that a session or race has been stopped',
        correctAnswer: 'D'
    },
    {
        question: 'How many world titles did Michael Schumacher win?',
        choiceA: '3',
        choiceB: '8',
        choiceC: '7',
        choiceD: '4',
        correctAnswer: 'C'
    },
    {
        question: 'At what race did McLaren make their F1 debut in 1966?',
        choiceA: 'Hungary',
        choiceB: ' Monaco',
        choiceC: 'Italy',
        choiceD: 'Turkey',
        correctAnswer: 'B'
    }, 
    {
        question: 'What does drs stand for?',
        choiceA: 'Drag Reduction System',
        choiceB: 'Direct Registration System',
        choiceC: 'Driving Reduction System',
        choiceD: 'Dust Removal System',
        correctAnswer: 'A'
    }, 
    {
        question: 'Which position is pole position?',
        choiceA: 'Last',
        choiceB: 'Second',
        choiceC: 'First',
        choiceD: 'Third',
        correctAnswer: 'C'
    } 
];

let i = 0;
let maxQuestion = 0;

document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;

/**
 * Resets all values start value.
 * Makes it possible to play the quiz again.
 */

function startGame() {

    maxQuestion = 0;

    i = 0;

    document.getElementById('current-num').innerHTML = 1;

    document.getElementById('score').innerHTML = 0;

    document.getElementById('incorrect').innerHTML = 0;
 
document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;
}

/**
 * While loop to get through all of the questions.
 * Runs the result function at the end to get the result.
 */

function jumpToLastQuestion() {

    while(maxQuestion < questionBank.length -1){
        
        getNextQuestion(); 

    }

    result();
}

/**
 * If statement to log questions from question bank.
 * When maxQuestion gets to the last question in the array, the result function will run.
 */

 function getNextQuestion() { 

if(maxQuestion == questionBank.length -1) {

    result();

 } else {

    i++;

    document.getElementById('questions').innerHTML = questionBank[i].question;
    document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
    document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
    document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
    document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;

    maxQuestion++;
    
    document.getElementById('current-num').innerHTML++;
 } 
}

/**
 * Checks the user’s answer and compares it to the right answer to the question.
 * Runs the right function depending on the user’s answer.
 */

function checkAnswer(event) {

    let userAnswer = event.target.getAttribute('data-name');

    if (userAnswer == questionBank[i].correctAnswer){

        rightAnswer();

    } else {

        wrongAnswer();

    }

    getNextQuestion();
}

/**
 * Increment correct score if the user answers correctly
 */

function rightAnswer() {

    document.getElementById('score').innerHTML++;
}

/**
 * Increment the incorrect score if the user answers incorrectly
 */

function wrongAnswer() 
{
    document.getElementById('incorrect').innerHTML++;
}

/**
 * Triggers sweetalert2 when the user is finished with the game.
 * The alert shows the finished score.
 * Lets the user chose if they want to end the quiz or play again.
 */

/**
 * Credit
 * Used recipe gallery to clarify how to write the code below properly from SweetAlert2
 * https://sweetalert2.github.io/
*/

function result() {

    Swal.fire( {
        title: 'Good Job! you got',
        text: document.getElementById('score').innerHTML + ' / 7',
        showCancelButton: true,
        }).then((result) => {
            if(result.isConfirmed) {
                startGame();
            }
        });
}