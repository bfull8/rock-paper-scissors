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
    return "human";
  } else if (lowerHumanChoice == computerChoice) {
    return "tie";
  } else {
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

  const buttons = document.querySelectorAll(".choice-btn");
  const humanSR = document.querySelector("#human-score");
  const computerSR = document.querySelector("#computer-score");
  const gameResultDisplay = document.querySelector("#game-result");
  const winner = document.createElement("p");
  gameResultDisplay.appendChild(winner);

  const roundResult = document.createElement("p");
  gameResultDisplay.appendChild(roundResult);

  const resetbtn = document.createElement("button");
  resetbtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanSR.innerHTML = humanScore;
    computerSR.innerHTML = computerScore;
    winner.innerHTML = "";

    buttons.forEach((button) => {
      button.disabled = false;
    });

    gameResultDisplay.removeChild(resetbtn);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanSelection = button.value;
      const computerSelection = getComputerChoice();
      const gameResult = playRound(humanSelection, computerSelection);

      roundResult.innerHTML = `You played ${humanSelection} and the computer played ${computerSelection}`;

      switch (gameResult) {
        case "human":
          humanScore++;
          humanSR.innerHTML = humanScore;
          break;
        case "computer":
          computerScore++;
          computerSR.innerHTML = computerScore;
          break;
      }

      if (humanScore == 5) {
        roundResult.innerHTML = "";
        winner.innerHTML = `You won with a score of ${humanScore} to ${computerScore}`;

        buttons.forEach((button) => {
          button.disabled = true;
        });

        resetbtn.innerHTML = "Reset";
        gameResultDisplay.appendChild(resetbtn);
      } else if (computerScore === 5) {
        roundResult.innerHTML = "";
        winner.innerHTML = `You lost with a score of ${humanScore} to ${computerScore}`;

        buttons.forEach((button) => {
          button.disabled = true;
        });

        resetbtn.innerHTML = "Reset";
        gameResultDisplay.appendChild(resetbtn);
      }
    });
  });
}

playGame();
