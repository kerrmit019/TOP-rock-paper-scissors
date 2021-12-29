// Rock, Paper, Scissors game

// computers move is random from rock, paper or scissors

// rock beats scissors
// paper beats rock
// scissors beats paper

let playerScore = 0;
let computerScore = 0;

// function to randomly select between rock, paper and scissors (computer's move)
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
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
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

// play a game of 5 rounds
// keep score and report at end
function game() {
  //    play 5 rounds
  for (i = 0; i < 5; i++) {
    console.log(playRound("rock", computerPlay()));
    console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
  }

  return;
}

console.log(game());
// const playerSelection = "PAPER";
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
