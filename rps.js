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
