// Javascript Rock Paper Scissors Applet


// Function called getComputerChoice will randomly return either rock, paper or scissors
function getComputerChoice() {
    const choices = array['rock','paper', 'scissors']
    const pick = Math.floor(Math.random() * choices.length)
    return pick;
}
// Function called playRound takes playerChoice and computerChoice as parameters, and declares the winner of the round.

// Function called game runs playRound function five times, keeps track of score and declares a winner