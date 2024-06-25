function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    if (randomChoice == 1) {
        return "rock";
    } else if (randomChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
  }


function getHumanChoice () {
    let userInput = prompt("rock, paper, or scissors");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    
    let countRound = 0;

        function playRound(humanChoice, computerChoice) {

            console.log(`Computer choice: ${computerChoice}`);
            console.log(`Your choice: ${humanChoice}`)
            if (humanChoice == computerChoice) {
                countRound++;
                
                console.log(`You both tied. Your score: ${humanScore}. Computer score ${computerScore}`);
                console.log(`Current round ${countRound}`);
            }

            if ((humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "paper" && computerChoice == "rock") || 
            (humanChoice == "scissors" && computerChoice == "paper"))
            {
                humanScore++;
                countRound++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                console.log(`Your score ${humanScore} - Computer score ${computerScore} - Current round ${countRound}`);
            } else if ((computerChoice == "rock" && humanChoice == "scissors") || 
            (computerChoice == "paper" && humanChoice == "rock") || 
            (computerChoice == "scissors" && humanChoice =="paper")){
                computerScore++;
                countRound++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                console.log(`Your score ${humanScore} - Computer score ${computerScore} - Current round ${countRound}`);
            }
        }

        
    

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();

if (humanScore == computerScore) {
    console.log("Game Tied!") ;
} else if (humanScore > computerScore) {
    console.log("You won!");
} else {
    console.log("Computer won!");
}