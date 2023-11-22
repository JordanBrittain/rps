//function that returns either rock, paper, or scissors randomly
//function that prompts user to input rock, paper or scissors
//function that compares results of the above two functions, and returns winner

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

console.log(getComputerChoice());