// Create a function called getComputerChoice
// Randomly generate a number between 0 and 1 and store it
// Assign a rock,paper,scissors based on the values -- equally splitting
// return the value
function getComputerChoice() {
  let n = Math.random() * 3;
  if (n <= 1) {
    return "rock";
  } else if (n <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Crate a function call getHumanChoice
// Prompt the user for a choice (assume they will enter a valid option)
// return the input
function getHumanChoice() {
  return prompt("Enter Rock, Paper, or Scissors:");
}

let humanScore = 0;
let computerScore = 0;

// Create a function called playRound(humanChoice, computerChoice)
// Convert human choice to lowercase (matches computerChoice)
// Compare choices to determine the winner
// increment one of the score global variables depending on winner
// print the winner

function playRound(humanChoice, computerChoice) {
  let lowerHumanChoice = humanChoice.toLowerCase();

  if (
    (lowerHumanChoice == "rock" && computerChoice == "scissors") ||
    (lowerHumanChoice == "paper" && computerChoice == "rock") ||
    (lowerHumanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log(`You win! ${lowerHumanChoice} beats ${computerChoice}`);
  } else if (
    (lowerHumanChoice == "rock" && computerChoice == "rock") ||
    (lowerHumanChoice == "paper" && computerChoice == "paper") ||
    (lowerHumanChoice == "scissors" && computerChoice == "scissors")
  ) {
    console.log(`It's a tie! You both chose ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${lowerHumanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
