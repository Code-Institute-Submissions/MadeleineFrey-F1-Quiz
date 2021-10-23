//change topic to F1
const questionBank = [
    {
        question: '1What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'A'
    },
    {
        question: '2What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'A'
    },
    {
        question: '3What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'D'
    },
    {
        question: '4What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'C'
    },
    {
        question: '5What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'B'
    }, 
    {
        question: '6What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'B'
    }, 
    {
        question: '7What are you?',
        choiceA: '1yes',
        choiceB: '1no',
        choiceC: '1noyes',
        choiceD: '1yesno',
        correctAnswer: 'C'
    } 
]

// const playButton = document.getElementById('play-btn')
// const nextButton = document.getElementById('next')
// playButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', getNextQuestion)

// choices here (buttons) + eventlistener

const firstChoiceBtn = document.getElementById('firstBtn');
const secondChoiceBtn = document.getElementById('secondBtn');
const thirdChoiceBtn = document.getElementById('thirdBtn');
const fourthChoiceBtn = document.getElementById('fourthBtn');

// firstChoiceBtn.addEventListener('click', checkAnswer);
// secondChoiceBtn.addEventListener('click', checkAnswer);
// thirdChoiceBtn.addEventListener('click', checkAnswer);
// fourthChoiceBtn.addEventListener('click', checkAnswer);


let i = 0;
// let currentQuestionIndex = i;
let maxQuestion = 0;



document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;

//Do comments on the function
//Remove consol.log() later
//username if you have time


function startGame() {
    // move play button to where it is suposed to be

    currentQuestionIndex = 0
    getNextQuestion()  

}

 function getNextQuestion() { 

    console.log('Räknar upp??')
if(maxQuestion == questionBank.length -1) {

    console.log("innan result")
    result();

 } else {

     console.log("räknar upp")
     maxQuestion++;

     console.log("räknar upp i")
     i++;

    document.getElementById('questions').innerHTML = questionBank[i].question;
    document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
    document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
    document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
    document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;

    document.getElementById('current-num').innerHTML++

 } 
}

function checkAnswer(event) {

    let userAnswer = event.target.getAttribute("data-name");
    console.log(userAnswer);

    if (userAnswer == questionBank[i].correctAnswer){
        console.log("Rätttt")
        rightAnswer();
    } else {
        console.log("Felllll")
        wrongAnswer();
    }
}

function rightAnswer() {

    console.log('yeeeop');
    document.getElementById('score').innerHTML++
}

function wrongAnswer() 
{
    console.log('neopop');
    document.getElementById('incorrect').innerHTML++
}

// show result in a div?
function result() {

    console.log("DEN LYSSNAR")


}