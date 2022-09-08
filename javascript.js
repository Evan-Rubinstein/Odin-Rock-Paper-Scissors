// Javascript Rock Paper Scissors Applet

// Function called getComputerChoice will randomly return either rock, paper or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const pick = Math.floor(Math.random() * 3);
  return choices[pick];
}
// Function called playRound takes playerChoice and computerChoice as parameters, and declares the winner of the round.
function playRound(computerChoice, playerChoice) {
  console.log("Player Choice: " + playerChoice);
  console.log("Computer Choice: " + computerChoice);
  if (computerChoice == playerChoice) {
    //Logic for if the computer and player pick the same element
    return "You have both picked " + computerChoice + ", this round is a tie";
  } else if (computerChoice == "rock") {
    //Logic for if the computerChoice is rock.
    if (playerChoice == "scissors") {
      return "Computer Wins!";
    } else if (playerChoice == "paper") {
      return "Player Wins!";
    } else {
      return "Something ain't right here...";
    }
  } else if (computerChoice == "paper") {
    // Logic for if the computerChoice is paper
    if (playerChoice == "rock") {
      return "Computer Wins!";
    } else if (playerChoice == "scissors") {
      return "Player Wins!";
    } else {
      return "Something ain't right here 2";
    }
  } else if (computerChoice == "scissors") {
    // Logic for if computerChoice is scissors
    if (playerChoice == "rock") {
      return "Player Wins!";
    } else if (playerChoice == "paper") {
      return "Computer Wins!";
    } else {
      return "Something ain't right here 4";
    }
  } else {
    return "Something ain't right here 3";
  }
}

// Function called game runs playRound function five times, keeps track of score and declares a winner
function game() {
  // Initialize variables that will keep track of score
  let playerPoint;
  let computerPoint;
  // Loops over the following steps 5 times
  for (let i = 0; i < 5; i++) {
    const playerPick = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
    let outcome = playRound(getComputerChoice(), playerPick);
    alert(outcome);
    if (outcome == "Computer Wins!") {
      computerPoint += 1;
    } else if (outcome == "Player Wins!") {
      playerPoint += 1;
    }
  }
  if (playerPoint > computerPoint) {
    alert("The Player won the Match!");
  } else if (playerPoint < computerPoint) {
    alert("The Computer won the Match!");
  } else {
    alert("It's a tie!");
  }
}

// Testing code
game();
