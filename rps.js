// Create a function called getComputerChoice
// Randomly generate a number between 0 and 1 and store it
// Assign a rock,paper,scissors based on the values -- equally splitting
// return the value
function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  if (n === 0) {
    return "rock";
  } else if (n === 1) {
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

// Create a function called playRound(humanChoice, computerChoice)
// Convert human choice to lowercase (matches computerChoice)
// Compare choices to determine the winner
// increment one of the score global variables depending on winner
// print the winner

function playRound(humanChoice, computerChoice) {
  const lowerHumanChoice = humanChoice.toLowerCase();

  if (
    (lowerHumanChoice === "rock" && computerChoice === "scissors") ||
    (lowerHumanChoice === "paper" && computerChoice === "rock") ||
    (lowerHumanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${lowerHumanChoice} beats ${computerChoice}`);
    return "human";
  } else if (lowerHumanChoice == computerChoice) {
    console.log(`It's a tie! You both chose ${computerChoice}`);
    return "tie";
  } else {
    console.log(`You lose! ${computerChoice} beats ${lowerHumanChoice}`);
    return "computer";
  }
}

// Create a function called playGame();
// Move global variables to playGame()
// Refactor play round to return true or false to increment scores
// Create a for loop to play the round 5 times, asking for a new selection each time
// Compare the scores at the end to determine the winner

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const gameResult = playRound(humanSelection, computerSelection);

    switch (gameResult) {
      case "human":
        humanScore++;
        break;
      case "computer":
        computerScore++;
        break;
    }
  }

  if (humanScore > computerScore) {
    console.log(`You won with a score of ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost with a score of ${humanScore} to ${computerScore}`);
  } else {
    console.log(`You tied with a score of ${humanScore} to ${computerScore}`);
  }
}

playGame();
