// Game buttons with event listeners

const rockButton = document.querySelectorAll('button')[0];
rockButton.addEventListener('click', () => {
  outcomeMessage.textContent = playRound("Rock", computerSelection);
  playerSays.textContent = "Player says: " + rockButton.textContent;
});

const paperButton = document.querySelectorAll('button')[1];
paperButton.addEventListener('click', () => {
  outcomeMessage.textContent = playRound("Paper", computerSelection);
  playerSays.textContent = "Player says: " + paperButton.textContent;
});

const scissorsButton = document.querySelectorAll('button')[2];
scissorsButton.addEventListener('click', () => {
  outcomeMessage.textContent = playRound("Scissors", computerSelection);
  playerSays.textContent = "Player says: " + scissorsButton.textContent;
});

// <p> elements that display the score and choices

let result = document.getElementsByClassName('result')[0];
let playerSays = result.children[0];
let compSays = result.children[1];
let outcomeMessage = result.children[2];
let score = result.lastElementChild;

// Computer random choice function

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
     return "Rock";
 } else if (randomNumber === 1) {
        return "Paper";
 } else if (randomNumber === 2) {
   return "Scissors";
 }
 }

// Check if someone won 5 rounds

function checkScore() {
  if (playerScore > 4) {
    setTimeout(function() {alert("YOU WON MORE ROUNDS, YOU WIN!!!")}, 0);
    gameReset();
  } else if (computerScore > 4) {
    setTimeout(() => alert("COMPUTER WON, BETTER LUCK NEXT TIME :/"), 0);
    gameReset();
  }
}

// reset score when one game completes

function gameReset() {
  playerScore = 0;
  computerScore = 0;
}

// Global variables for tracking the score

let playerScore = 0;
let computerScore = 0;

// Global variable for computer selection
let computerSelection;


function playRound(playerSelection, computerSelection) {

   computerSelection = getComputerChoice();

       compSays.textContent = "Computer says: " + computerSelection;
        if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You win, Paper beats Rock!";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You lose, Scissors beat Paper";
      } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It's a tie!";
      } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You win, Rock beats Scissors!";
      } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You lose, Paper beats Rock";
      } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It's a tie!";
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You lose, Rock beats Scissors";
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        score.textContent = `${playerScore} \: ${computerScore}`;
        checkScore();
        return "You win, Scissors beat Paper!";
      } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It's a tie!";
      } else {
        return "Not a valid value";
    }

    }