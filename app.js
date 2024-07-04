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



let humanScore = 0;
let computerScore = 0;

let countRound = 0;

let buttons = document.querySelectorAll(".userChoice");
let result = document.querySelector(".result");

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        playRound(event.target.id, getComputerChoice());
        console.log(countRound);
    });
 });



function playRound(humanChoice, computerChoice){
    if (countRound > 4) {
        humanChoice = "";
        computerChoice = "";
        humanScore = 0;
        computerScore = 0;
        countRound = 0;
    }

    if (humanChoice == computerChoice) {
        countRound++;
        
        result.innerHTML = `Computer choice: ${computerChoice} <br>
        Your choice: ${humanChoice} <br>
        You both tied! <br>
        Your score: ${humanScore}. <br>
        Computer score: ${computerScore}. <br>
        Current round: ${countRound} <br>`; 
    }

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissors" && computerChoice == "paper"))
    {
        humanScore++;
        countRound++;

        result.innerHTML = `Computer choice: ${computerChoice} <br>
        Your choice: ${humanChoice}. <br>
        You win! ${humanChoice} beats ${computerChoice}. <br> 
        Your score: ${humanScore} <br>
        Computer score: ${computerScore} <br>
        Current round: ${countRound}`;
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || 
    (computerChoice == "paper" && humanChoice == "rock") || 
    (computerChoice == "scissors" && humanChoice =="paper")){
        computerScore++;
        countRound++;

        result.innerHTML = `Computer choice: ${computerChoice} <br>
        Your choice: ${humanChoice}. <br>
        You lose! ${computerChoice} beats ${humanChoice}. <br>
        Your score: ${humanScore} <br>
        Computer score: ${computerScore} <br>
        Current round: ${countRound} <br>`;
    }

    if (countRound == 5) {
        if (humanScore == 5) {
            result.innerHTML = `Computer choice: ${computerChoice} <br>
            Your choice: ${humanChoice} <br>
            You both tied! <br>
            Your score: ${humanScore}. <br>
            Computer score: ${computerScore}. <br>
            Current round: ${countRound} <br>
            Final winner: Game Tied`;
        } else if (humanScore > computerScore) {
            result.innerHTML = `Computer choice: ${computerChoice} <br>
            Your choice: ${humanChoice} <br>
            You both tied! <br>
            Your score: ${humanScore}. <br>
            Computer score: ${computerScore}. <br>
            Current round: ${countRound} <br>
            Final winner: "You won!`;
        } else {
            result.innerHTML = `Computer choice: ${computerChoice} <br>
            Your choice: ${humanChoice} <br>
            You both tied! <br>
            Your score: ${humanScore}. <br>
            Computer score: ${computerScore}. <br>
            Current round: ${countRound} <br>
            Final winner: Computer won!`;
        }
    }
}