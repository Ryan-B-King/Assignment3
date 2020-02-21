function displayTitle() {
    "use strict";
    window.alert("Let's play Rock, Paper, Scissors!");
}

function playGame() {
    "use strict";
    let playerChoice;
    let compRandom;
    let compChoice;

    playerChoice = window.prompt("Choose 'Rock', 'Paper', or 'Scissors' ");
    if (playerChoice === "Rock" ||
        playerChoice === "rock" ||
        playerChoice === "Paper" ||
        playerChoice === "paper" ||
        playerChoice === "Scissors" ||
        playerChoice === "scissors") {
            playerChoice;
    } else {
        do {

        } while ();
    }

    compRandom = Number(Math.random().round + Math.random().round);
    if (compRandom === 0) {
        return compchoice === "Rock";
    } else if (compRandom === 1) {
        return compChoice === "Paper";
    } else {
        return compChoice === "Scissors"
    }

    if(playerChoice) {
        
    } else {

    }
}

function main() {
    "use strict";
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Wanna play again (y/n)?");
    }
    window.alert("Thanks for playing.");
}
main();