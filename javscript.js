let wins = 0;
let losses = 0;

let getComputerChoice = function() {
    let randomNumber = (Math.random() * 1);

    return (randomNumber <= 33) ? ("rock") 
    : (randomNumber >= 66) ? ("paper")
    : ("scissors") ;
};



function round() {
    let playerChoice = (prompt("Choose rock, paper, or scissors.", ""));
    let computerChoice = getComputerChoice();
    let win = `You win. ${playerChoice} beats ${getComputerChoice()}.`;
    let loss = `You lose. ${playerChoice} loses to ${getComputerChoice()}.`;
    let tie = `It's a tie. ${playerChoice} ties with ${getComputerChoice()}.`;

    if (playerChoice.toLowerCase() === "rock" && getComputerChoice() === "scissors"
    || playerChoice.toLowerCase() === "scissors" && getComputerChoice() === "paper"
    || playerChoice.toLowerCase() === "paper" && getComputerChoice() === "rock") {
        console.log(win);
        wins++;
    } else if (getComputerChoice() === "rock" && playerChoice.toLowerCase() === "scissors"
    || getComputerChoice() === "scissors" && playerChoice.toLowerCase() === "paper"
    || getComputerChoice() === "paper" && playerChoice.toLowerCase() === "rock") {
        console.log(loss);
        losses++;
    } else if (playerChoice.toLowerCase() === "rock" && getComputerChoice() === "rock"
    || playerChoice.toLowerCase() === "scissors" && getComputerChoice() === "scissors"
    || playerChoice.toLowerCase() === "paper" && getComputerChoice() === "paper") {
        console.log(tie);
    } else {
        prompt(`Invalid response. Try again.`)
    }
}

    function game() {
        for (let roundCount = 0; roundCount < 5; roundCount++) {
            if (wins < 4) {
                round();
            }
            else if (losses < 4) {
                round();
            }
        }
    }