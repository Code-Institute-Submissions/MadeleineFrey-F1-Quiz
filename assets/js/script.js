const questionBank = [
    {
        question: '1What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    },
    {
        question: '2What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    },
    {
        question: '3What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    },
    {
        question: '4What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    },
    {
        question: '5What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    }, 
]

const startButton = document.getElementById('play-btn')
const nextButton = document.getElementById('next')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', getNextQuestion)

let i = 0;
let currentQuestionIndex = i;



document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;




function startGame() {
currentQuestionIndex = 0
getNextQuestion()

    
}



 function getNextQuestion() { 

i++;

document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;
}


function checkAnswer() {

}

function rightAnswer() {

}

function wrongAnswer() {

}

function allQuestionsDone() {
    
}