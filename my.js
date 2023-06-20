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

let playerScore = 0;
let computerScore = 0;

/* I don't really need parameters in playRound function because
I wrote the computerSelection and playerSelection variables
inside the function but I'll leave them here as a reminder */

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please enter your choice: Rock, paper or scissors?");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    alert("Computer says: " + computerSelection);
        if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You won, Paper beats Rock!";
        }
        else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose, Scissors beat Paper";
  }
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "It's a tie!";
  }
       else if (playerSelection === "Rock" && computerSelection === "Scissors") {
          playerScore++;
          return "You won, Rock beats Scissors!";
  }
     else if (playerSelection === "Rock" && computerSelection === "Paper") {
       computerScore++;
       return "You lose, Paper beats Rock";
  }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
      return "It's a tie!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      computerScore++;
      return "You lose, Rock beats Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
      playerScore++;
      return "You won, Scissors beat Paper!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
      return "It's a tie!";
    }
    else {
      return "Not a valid value";
    }
    
    }
  
  console.log(playerScore, computerScore);
  
  function determineWinner() {
    if (playerScore > computerScore) {
      alert("YOU WON MORE ROUNDS! YOU WIN!!");
    }
    else if (playerScore === computerScore) {
    alert("NO WINNERS IN THIS ONE");
    }
    else alert("COMPUTER WON, BETTER LUCK NEXT TIME :(");
      }
    