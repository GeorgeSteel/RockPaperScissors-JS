let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.querySelector('#r');
const paperDiv = document.querySelector('#p');
const scissorsDiv = document.querySelector('#s');

const smallUserWord = 'user'.fontsize(3).sup();
const smallCompWord = 'comp'.fontsize(3).sup();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function translate(choice) {
    switch (choice) {
        case 'r':
            return 'Rock';
            break;
        case 'p':
            return 'Paper';
            break;
        case 's':
            return 'Scissors'
            break;
    
        default:
            return 'WOTF!?'
            break;
    }
}

function wins(user, computer){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    resultDiv.innerHTML = `${translate(user)}${smallUserWord} beats ${translate(computer)}${smallCompWord}. You Win!!!`;
}

function lose(user, computer){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;   

    resultDiv.innerHTML = `${translate(computer)}${smallCompWord} beats ${translate(user)}${smallUserWord}. You Lost...`;
}

function draw(user, computer){
    userScore++;
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;    
    
    resultDiv.innerHTML = 'DRAWWW!!!';
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            wins(userChoice, computerChoice);          
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);            
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);           
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

