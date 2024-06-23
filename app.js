console.log("Hello World!");

function getRandomInt() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    if (randomChoice == 1) {
        return "Rock";
    } else if (randomChoice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
  }

console.log(getRandomInt());