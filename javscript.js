let wins = 0;
let losses = 0;

let getComputerChoice = function() {
    let randomNumber = (Math.random() * 99);

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
        for (let roundCount = 0; wins < 3 && losses < 3; roundCount++) {
            round();
            console.log(`Round ${roundCount + 1} Player Wins: ${wins} Computer Wins: ${losses}.`)
        } if (wins === 3) {
            console.log(`You Win the Game ${wins} to ${losses}. Refresh the page to play again.`)
        } else if (losses === 3) {
            console.log(`You Lose the Game ${losses} to ${wins}. Refresh the page to play again`)
        }
    }
