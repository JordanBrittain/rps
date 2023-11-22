//create computer choice function
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

//capture user choice function
function getUserChoice() {
  const userChoice = prompt("Rock, Paper, or Scissors?");
  return userChoice.toLowerCase();
}

//function for determining winner
function getWinner() {
  if (userSelection === computerSelection) {
    return "Its a tie"
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    return "You win!"
  } else {
    return "You lose :("
  }
}


//game function
//let user score
//let computer score
//get user choice, get computer choice, get winner.
//get winner function increments score variables
//maybe console log scores
//check to see if user score + computer score = 5
//if yes check which score is higher. Declare winner
//if no then repeat function


    let computerSelection = getComputerChoice();
    let userSelection = getUserChoice();
    console.log(getWinner());


