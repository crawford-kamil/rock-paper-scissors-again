let wins = 0;
let losses = 0;
let roundCount;



let getComputerChoice = function() {
    let randomNumber = (Math.random() * 99);

    return (randomNumber <= 34) ? ("rock") 
    : (randomNumber > 65) ? ("paper")
    : ("scissors") ;
};



function round() {
    const ComputerChoice = getComputerChoice();
    const playerChoice = (prompt("Choose rock, paper, or scissors.", ""));
    let win = `You win. ${playerChoice} beats ${ComputerChoice}.`;
    let loss = `You lose. ${playerChoice} loses to ${ComputerChoice}.`;
    let tie = `It's a tie. ${playerChoice} ties with ${ComputerChoice}.`;

    if (playerChoice.toLowerCase() === "rock" && ComputerChoice === "scissors"
    || playerChoice.toLowerCase() === "scissors" && ComputerChoice === "paper"
    || playerChoice.toLowerCase() === "paper" && ComputerChoice === "rock") {
        console.log(win);
        wins++;
    } else if (ComputerChoice === "rock" && playerChoice.toLowerCase() === "scissors"
    || ComputerChoice === "scissors" && playerChoice.toLowerCase() === "paper"
    || ComputerChoice === "paper" && playerChoice.toLowerCase() === "rock") {
        console.log(loss);
        losses++;
    } else if (playerChoice.toLowerCase() === "rock" && ComputerChoice === "rock"
    || playerChoice.toLowerCase() === "scissors" && ComputerChoice === "scissors"
    || playerChoice.toLowerCase() === "paper" && ComputerChoice === "paper") {
        console.log(tie);
    } else {
        roundCount--;
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

    game();