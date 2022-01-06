// Rock, Paper, Scissors game

// computers move is random from rock, paper or scissors

// rock beats scissors
// paper beats rock
// scissors beats paper

let playerScore = 0;
let computerScore = 0;

// run the game
// game();

// // let player input their selection [rock, paper, scissors] for the round
// function playerMove() {
//   // let playerMove = prompt("What's your move (Rock, Paper, or Scissors)?");
//   let playerMove = "rock";
//   if (playerMove === null) {
//     return "Move skipped.";
//   }
//   return playerMove;
// }

//  select between rock, paper and scissors (computer's move)
function computerPlay() {
  moves = ["Rock", "Paper", "Scissors"];

  return moves[Math.floor(Math.random(0) * 3)];
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else {
    computerScore++;
  }
  //   console.log(playerScore, computerScore);
}

// replaced with checkForWinner in update of the game
// function calculateGameWinner() {
//   if (playerScore === computerScore) {
//     return "The game is a draw!";
//   } else if (playerScore > computerScore) {
//     return "You win the game!";
//   } else {
//     return "You Lose the game!";
//   }
// }

// First to 5 points wins
function checkForGameWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      return "You win the game!";
    } else {
      return "You Lose the game!";
    }
  } else {
    return "Choose again";
  }
}

// play a round player choice vs computer choice
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  //   player wins round
  function playerWinner(playerSelection, computerSelection) {
    updateScore("player");
    return `You Win! ${
      playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  }

  //   player loses round--- pc wins
  function playerLoser(playerSelection, computerSelection) {
    updateScore("computer");
    return `You Lose! ${computerSelection} beats ${
      playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)
    }`;
  }

  // check for a draw
  if (computerSelection.toLowerCase() === playerSelection) {
    return "It's a draw - choose again";
  }

  //   check other options
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "Scissors") {
        return playerWinner(playerSelection, computerSelection);
      } else {
        return playerLoser(playerSelection, computerSelection);
      }

    case "paper":
      if (computerSelection === "Rock") {
        return playerWinner(playerSelection, computerSelection);
      } else {
        return playerLoser(playerSelection, computerSelection);
      }

    case "scissors":
      if (computerSelection === "Paper") {
        return playerWinner(playerSelection, computerSelection);
      } else {
        return playerLoser(playerSelection, computerSelection);
      }

    default:
      return "Please choose Rock, Paper or Scissors";
  }
}

// DOM manipulation
const buttons = document.querySelectorAll("button");

// set up DOM to insert results
const resultsSpace = document.querySelector(".results");
// create round outcome para and append to resultsSpace
const roundPara = document.createElement("p");
resultsSpace.appendChild(roundPara);

// create score para, and append to resultsSpace
const scorePara = document.createElement("p");
resultsSpace.appendChild(scorePara);

// event listeners
// button - Rock, Paper or Scissors, to the playRound function
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    // add click event listener for each button, which returns the label of the
    const roundOutcome = playRound(e.target.textContent, computerPlay());

    // update results div with roundOutcome and score
    roundPara.textContent = roundOutcome;
    scorePara.textContent = `Player: ${playerScore}; Computer: ${computerScore}`;

    // check for a winner
    console.log(checkForGameWinner());
  })
);

// TODOS
// For now, remove the logic that plays exactly five rounds. - DONE
// Create three buttons, one for each selection - DONE.
// Add an event listener to the buttons that calls your playRound
//  function with the correct playerSelection every time a button is clicked.
// (you can keep the console.logs for this step) - DONE

// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this.
// That’s OK! Reworking old code is an important part of a programmer’s life.
// Once you’re all done with your UI and make sure everything’s satisfactory,
// it’s time to merge our current branch rps-ui to our main branch.

// My Extra task for me...
// Also add a score reset once at 5 pts (i.e. game over) with button pop up to play again?
