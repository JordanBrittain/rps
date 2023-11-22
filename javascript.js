//function that returns either rock, paper, or scissors randomly
//function that prompts user to input rock, paper or scissors
//function that compares results of the above two functions, and returns winner


//create computer choice function
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

//capture user choice function
function getUserChoice() {
    return prompt('Rock, Paper, or Scissors?');
}

let computerSelection = getComputerChoice();
let userSelection = getUserChoice();
console.log(computerSelection);
console.log(userSelection);


//logic for determining winner
if (userSelection === computerSelection) {
    console.log('Its a tie');
} else if ((userSelection == 'Rock' && computerSelection == 'Scissors')
|| (userSelection == 'Scissors' && computerSelection == 'Paper')
|| (userSelection == 'Paper' && computerSelection == 'Rock')) {
    console.log('You win!');
} else {
    console.log('You lose :(');
}

