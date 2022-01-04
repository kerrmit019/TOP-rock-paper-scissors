// Rock, Paper, Scissors game

// computers move is random from rock, paper or scissors

// rock beats scissors
// paper beats rock
// scissors beats paper

let playerScore = 0;
let computerScore = 0;

// run the game
game();

// let player input their selection [rock, paper, scissors] for the round
function playerMove() {
  // let playerMove = prompt("What's your move (Rock, Paper, or Scissors)?");
  let playerMove = "rock";
  if (playerMove === null) {
    return "Move skipped.";
  }
  return playerMove;
}

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

function calculateGameWinner() {
  if (playerScore === computerScore) {
    return "The game is a draw!";
  } else if (playerScore > computerScore) {
    return "You win the game!";
  } else {
    return "You Lose the game!";
  }
}

// play a round player choice vs computer choice
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  //   player wins round
  function winner(playerSelection, computerSelection) {
    updateScore("player");
    return `You Win! ${
      playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  }

  //   player loses round--- pc wins
  function loser(playerSelection, computerSelection) {
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
        return winner(playerSelection, computerSelection);
      } else {
        return loser(playerSelection, computerSelection);
      }

    case "paper":
      if (computerSelection === "Rock") {
        return winner(playerSelection, computerSelection);
      } else {
        return loser(playerSelection, computerSelection);
      }

    case "scissors":
      if (computerSelection === "Paper") {
        return winner(playerSelection, computerSelection);
      } else {
        return loser(playerSelection, computerSelection);
      }

    default:
      return "Please choose Rock, Paper or Scissors";
  }
}

// keep score and report at end
// announce the winner
function game() {
  console.log(playRound(playerMove(), computerPlay()));

  console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
  console.log(calculateGameWinner());
  return;
}

// TODOS
// For now, remove the logic that plays exactly five rounds. -DONE
// Create three buttons, one for each selection.
// Add an event listener to the buttons that calls your playRound
//  function with the correct playerSelection every time a button is clicked.
// (you can keep the console.logs for this step)

// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this.
// That’s OK! Reworking old code is an important part of a programmer’s life.
// Once you’re all done with your UI and make sure everything’s satisfactory,
// it’s time to merge our current branch rps-ui to our main branch.
