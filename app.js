let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.querySelector('#r');
const paperDiv = document.querySelector('#p');
const scissorsDiv = document.querySelector('#s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function wins(){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

function lose(){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;    
}

function draw(){
    userScore++;
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;    
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            wins();          
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();            
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();           
            break;   
        default:
            console.log('WOTF?!');
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () =>{
        game('r');
    });
    
    paperDiv.addEventListener('click', () =>{
        game('p');
    });
    
    scissorsDiv.addEventListener('click', () =>{
        game('s');
    });
}

main();

