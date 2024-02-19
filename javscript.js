let playerChoice = (prompt("Choose rock, paper, or scissors.", ""));

function getComputerChoice() {
    let randomNumber = (Math.random() * 1);

    return (randomNumber <= 33) ? (rock) 
    : (randomNumber >= 66) ? (paper)
    : (scissors) ;
};


function round() {
    let rock = "rock";
    let scissors = "scissors";
    let paper = "paper";
    let win = `You win. ${playerChoice} beats ${getComputerChoice()}.`;
    let loss = `You lose. ${playerChoice} loses to ${getComputerChoice()}.`;
    let tie = `It's a tie ${playerChoice} ties with ${getComputerChoice()}.`;

    if (playerChoice.toLowerCase === "rock" && getComputerChoice() === scissors
    || playerChoice.toLowerCase === "scissors" && getComputerChoice() === paper
    || playerChoice.toLowerCase === "paper" && getComputerChoice() === rock) {
        return win;
    } else if (getComputerChoice() === rock && playerChoice.toLowerCase === "scissors"
    || getComputerChoice() === scissors && playerChoice.toLowerCase === "paper"
    || getComputerChoice() === paper && playerChoice.toLowerCase === "rock") {
        return loss;
    } else if (playerChoice.toLowerCase === "rock" && getComputerChoice() === rock
    || playerChoice.toLowerCase === "scissors" && getComputerChoice() === scissors
    || playerChoice.toLowerCase === "paper" && getComputerChoice() === paper) {
        return tie;
    } 
}
    game(); {

    }
