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
function getWinner(userSelection, computerSelection) {
  let roundWinner = "";
  if (userSelection === computerSelection) {
    roundWinner = "tie";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "user";
  } else {
    roundWinner = "computer";
  }
  return roundWinner;
}

function updateScore(winner, userScore, computerScore) {
  switch (winner) {
    case "user":
      userScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }
  return [userScore, computerScore];
}

function sendScoreUpdate(winner, userScore, computerScore) {
  let totalScoreCopy =
    "computer total score is " +
    computerScore +
    ", your total score is " +
    userScore;
  switch (winner) {
    case "tie":
      console.log("Its a tie! " + totalScoreCopy);
      break;
    case "user":
      console.log("You won! " + totalScoreCopy);
      break;
    case "computer":
      console.log("You lost :( " + totalScoreCopy);
      break;
  }
}

function game(userScore, computerScore) {
  let computerSelection = getComputerChoice();
  let userSelection = getUserChoice();
  let winner = getWinner(userSelection, computerSelection);
  [userScore, computerScore] = updateScore(winner, userScore, computerScore);
  sendScoreUpdate(winner, userScore, computerScore);
  return [userScore, computerScore];
}

function getRoundWinner(userScore, computerScore) {
  if (userScore === computerScore) {
    console.log("Its a tie!");
  } else if (userScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose :(");
  }
}

function playRound() {
  let userScore = 0;
  let computerScore = 0;
  [userScore, computerScore] = game(userScore, computerScore);
  [userScore, computerScore] = game(userScore, computerScore);
  [userScore, computerScore] = game(userScore, computerScore);
  [userScore, computerScore] = game(userScore, computerScore);
  [userScore, computerScore] = game(userScore, computerScore);
  getRoundWinner(userScore, computerScore);
}

//playRound();

//event listeners on all three buttons 'click'
//when one is clicked, fire off a function, pass in id of button
//assign userchoice variable based on id that's passed in
//determine winner function
//print result to h1

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {

  btn.addEventListener('click', () => {
console.log(btn.id);
  });
  
});
