//create computer choice function
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
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

function convertButtonToChoice(id) {
  switch (id) {
    case "rock-button":
      userChoice = "rock";
      break;

    case "paper-button":
      userChoice = "paper";
      break;

    case "scissors-button":
      userChoice = "scissors";
      break;

    default:
      userChoice = "invalid";
      break;
  }

  return userChoice;
}


function createWinnerText(winner) {
  let winnerText = '';
  switch (winner) {
    case "tie":
      winnerText = "Its a tie!";
      break;
    case "user":
      winnerText = "You won!";
      break;
    case "computer":
      winnerText = "You lost :(";
      break;
  }

  return winnerText;
}


const btns = document.querySelectorAll("button");
const userScoreUI = document.querySelector('#user-score');
const computerScoreUI = document.querySelector('#computer-score');
const headingText = document.querySelector('#heading-text');

function updateUI(winner, userScore, computerScore) {
  userScoreUI.textContent = userScore;
  computerScoreUI.textContent = computerScore;
  headingText.textContent = createWinnerText(winner);

}

let userScore = 0;
let computerScore = 0;


btns.forEach((btn) => {
  btn.addEventListener("click", () => {



    let computerChoice = getComputerChoice();
    let userChoice = "";
    userChoice = convertButtonToChoice(btn.id);

    let winner = getWinner(userChoice, computerChoice);

    [userScore, computerScore] = updateScore(winner, userScore, computerScore);

    console.log(userScore);
    updateUI(winner, userScore, computerScore);

  });
});


