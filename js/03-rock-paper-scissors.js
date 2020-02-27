// FUNCTION TO DISPLAY TITLE
function displayTitle() {
    "use strict";
    window.alert("Let's play Rock, Paper, Scissors!");
}

// FUNCTION TO COLLECT INPUT, VALIDATE AND OUTPUT RESULTS
function playGame() {
    "use strict";
    let playerChoice;
    let rock;
    let paper;
    let scissors;
    let compRandom;
    let compRock;
    let compPaper;
    let compScissors;
    let win;
    let lose;

    playerChoice = window.prompt("Choose 'Rock', 'Paper', or 'Scissors' ");

    rock = (playerChoice === "Rock" || playerChoice === "rock");
    paper = (playerChoice === "Paper" || playerChoice === "paper");
    scissors = (playerChoice === "Scissors" || playerChoice === "scissors");

    while (!rock && !paper && !scissors) {

        playerChoice = window.prompt("Choose 'Rock', 'Paper', or 'Scissors' ");

        rock = (playerChoice === "Rock" || playerChoice === "rock");
        paper = (playerChoice === "Paper" || playerChoice === "paper");
        scissors = (playerChoice === "Scissors" || playerChoice === "scissors");
    }

    window.alert("You play: " + playerChoice);

    compRandom = Math.round(Math.random(compRandom)) + Math.round(Math.random(compRandom)) + Math.round(Math.random(compRandom));

    if (compRandom === 1) {
        compRock = "Rock";
        window.alert("Computer plays: " + compRock);
    } else if (compRandom === 2) {
        compPaper = "Paper";
        window.alert("Computer plays: " + compPaper);
    } else {
        compScissors = "Scissors";
        window.alert("Computer plays: " + compScissors);
    }

    if(rock){
        win = compScissors
        lose = compPaper

        if (win) {
            window.alert("Rock destroys Scissors.  You win!");
        } else if (lose) {
            window.alert("Paper covers Rock.  You Lose!");
        } else {
            window.alert("We both used Rock.  It's a tie.  Try again!");
        }

    } else if (paper) {
        win = compRock
        lose = compScissors

        if (win) {
            window.alert("Paper covers Rock.  You win!");
        } else if (lose) {
            window.alert("Scissors cut Paper.  You Lose!");
        } else {
            window.alert("We both used Paper.  It's a tie.  Try again!");
        }
        
    } else {
        win = compPaper
        lose = compRock

        if (win) {
            window.alert("Scissors cut Paper.  You win!");
        } else if (lose) {
            window.alert("Rock destroys Scissors.  You Lose!");
        } else {
            window.alert("We both used Scissors.  It's a tie.  Try again!");
        }
    }
}

// FUNCTION TO RUN FULL GAME
function main() {
    "use strict";
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Wanna play again (y/n)?");
        while (playAgain !== "y" && playAgain !== "n") {
            playAgain = window.prompt("Wanna play again (y/n)?");
        }
    }
    window.alert("Thanks for playing.");
}

// CALL MAIN() TO RUN GAME
main();
