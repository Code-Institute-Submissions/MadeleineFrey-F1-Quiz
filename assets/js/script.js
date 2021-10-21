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
    {
        question: '6What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    }, 
    {
        question: '7What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'choiceA'
    } 
]

const playButton = document.getElementById('play-btn')
const nextButton = document.getElementById('next')
playButton.addEventListener('click', startGame)
nextButton.addEventListener('click', getNextQuestion)

// choices here (buttons) + eventlistener

const firstChoiceBtn = document.getElementById('firstBtn');
const secondChoiceBtn = document.getElementById('secondBtn');
const thirdChoiceBtn = document.getElementById('thirdBtn');
const fourthChoiceBtn = document.getElementById('fourthBtn');

firstChoiceBtn.addEventListener('click', checkAnswer);
secondChoiceBtn.addEventListener('click', checkAnswer);
thirdChoiceBtn.addEventListener('click', checkAnswer);
fourthChoiceBtn.addEventListener('click', checkAnswer);


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

    if(i < questionBank.length) {
        do{
            i++;
    
    document.getElementById('questions').innerHTML = questionBank[i].question;
    document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
    document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
    document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
    document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;
    
    
        }while (i < questionBank.length && document.getElementById('next').clicked)
    } else if (i = questionBank.length){
      
        result();
    }
   
}


function checkAnswer() {

}

function rightAnswer() {

}

function wrongAnswer() {

}

function allQuestionsDone() {
    
}