// Rock, Paper, Scissors game

// computers move is random from rock, paper or scissors

// rock beats scissors
// paper beats rock
// scissors beats paper

// function to randomly select between rock, paper and scissors (computer's move)
function computerPlay() {
  moves = ["Rock", "Paper", "Scissors"];

  return moves[Math.floor(Math.random(0) * 3)];
}

// play a round player choice vs computer choice
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // check for a draw
  if (computerSelection.toLowerCase() === playerSelection) {
    return "It's a draw - choose again";
  }

  //   check other options
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
      } else {
        return `You Lose! ${computerSelection} beats Rock`;
      }

      break;

    case "paper":
      if (computerSelection === "Rock") {
        return "You win! Paper beats Rock";
      } else {
        return `You Lose! ${computerSelection} beats Paper`;
      }

    case "scissors":
      if (computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
      } else {
        return `You Lose! ${computerSelection} beats Scissors.`;
      }

    default:
      return "Please choose Rock, Paper or Scissors";
  }
}

// play a game of 5 rounds
// keep score and report at end
function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound("scissors", computerPlay()));
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
