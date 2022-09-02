// Javascript Rock Paper Scissors Applet


// Function called getComputerChoice will randomly return either rock, paper or scissors
function getComputerChoice() {
    const choices = ['rock','paper', 'scissors']
    const pick = Math.floor(Math.random() * 3)
    return choices[pick];
}
// Function called playRound takes playerChoice and computerChoice as parameters, and declares the winner of the round.
function playRound(computerChoice, playerChoice){
    console.log("Player Choice: "+playerChoice)
    console.log("Computer Choice: "+computerChoice)
    if (computerChoice == playerChoice) { //Logic for if the computer and player pick the same element
        console.log("You have both picked "+computerChoice+", this round is a tie")
    }
    else if (computerChoice == "rock") { //Logic for if the computerChoice is rock. 
        if (playerChoice == "scissors") {
            console.log("Computer Wins!")
        }
        else if (playerChoice == "paper") {
            console.log("Player Wins!")
        }
        else {
            console.log("Something ain't right here...")
        }
    }
    else if (computerChoice == "paper") { // Logic for if the computerChoice is scissors
        if (playerChoice == "rock") {
            console.log("Computer Wins!")
        }
        else if (playerChoice == "scissors") {
            console.log("Player Wins!")
        }
        else {
            console.log("Something ain't right here 2")
        }
    }
    else if (computerChoice == "scissors") {
        if (playerChoice == "rock") {
            console.log("Player Wins!")
        }
        else if (playerChoice == "paper") {
            console.log("Computer Wins!")
        }
        else {
            console.log("Something ain't right here 4")
        }
    }
    else {
        console.log("Something ain't right here 3")
    }
}

// Function called game runs playRound function five times, keeps track of score and declares a winner
function game() {
    for (let i = 0; i < 5; i++) {
         const playerPick = prompt("Rock, Paper, or Scissors?: ")
         playRound(getComputerChoice(), playerPick)
    }
}




// Testing code
game()