console.log("Hello World!");


// Randomly generates a hand. Rock, Paper, or Scissors
function getRandomInt() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    if (randomChoice == 1) {
        return "rock";
    } else if (randomChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
  }

let randomChoice = getRandomInt()
console.log(randomChoice);

// Get user input. Valid: rock, paper, or scissors

function getHumanChoice () {
    let userInput = prompt("rock, paper, or scissors");
    return userInput.toLowerCase();
}

let userChoice = getHumanChoice();
console.log(userChoice);









let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        return `You tied`;
    }

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissors" && computerChoice == "paper"))
    {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice =="paper")){
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
} 

console.log(playRound(userChoice, randomChoice));