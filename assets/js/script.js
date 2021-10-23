
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
]

// const playButton = document.getElementById('play-btn')
// const nextButton = document.getElementById('next')
// playButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', getNextQuestion)

// choices here (buttons) + eventlistener

// const firstChoiceBtn = document.getElementById('firstBtn');
// const secondChoiceBtn = document.getElementById('secondBtn');
// const thirdChoiceBtn = document.getElementById('thirdBtn');
// const fourthChoiceBtn = document.getElementById('fourthBtn');

// firstChoiceBtn.addEventListener('click', checkAnswer);
// secondChoiceBtn.addEventListener('click', checkAnswer);
// thirdChoiceBtn.addEventListener('click', checkAnswer);
// fourthChoiceBtn.addEventListener('click', checkAnswer);


let i = 0;
let maxQuestion = 0;



document.getElementById('questions').innerHTML = questionBank[i].question;
document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;


function startGame() {
    console.log('Restert')

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

function jumpToLastQuestion() {

    while(maxQuestion < questionBank.length -1){
        console.log('loop')
        getNextQuestion(); 
    }
    result();
}

 function getNextQuestion() { 

    console.log('Räknar upp??')
if(maxQuestion == questionBank.length -1) {

    console.log('innan result')
    result();

 } else {

    i++;

    document.getElementById('questions').innerHTML = questionBank[i].question;
    document.getElementById('choiceA').innerHTML = questionBank[i].choiceA;
    document.getElementById('choiceB').innerHTML = questionBank[i].choiceB;
    document.getElementById('choiceC').innerHTML = questionBank[i].choiceC;
    document.getElementById('choiceD').innerHTML = questionBank[i].choiceD;

    console.log('räknar upp')
    maxQuestion++;

    console.log(maxQuestion)
    
    document.getElementById('current-num').innerHTML++

 } 
}

function checkAnswer(event) {

    let userAnswer = event.target.getAttribute('data-name');
    console.log(userAnswer);

    if (userAnswer == questionBank[i].correctAnswer){
        console.log('Rätttt')
        rightAnswer();
    } else {
        console.log('Felllll')
        wrongAnswer();
    }

    getNextQuestion();
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

function result() {

    console.log("DEN LYSSNAR")

    Swal.fire( {
        title: 'Good Job! you got',
        text: document.getElementById('score').innerHTML + ' / 7',
        showCancelButton: true,
        }).then((result) => {
            if(result.isConfirmed) {
                startGame();
            }
        })
}