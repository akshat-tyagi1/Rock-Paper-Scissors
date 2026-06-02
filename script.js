const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const score = document.querySelector(".score");
const roundResult = document.querySelector(".roundResult");
const gameDisplay = document.querySelector(".gameResult");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
  let computerChoice;

  let num = Math.floor(Math.random() * 3 + 1);
  if (num === 1) {
    computerChoice = "Rock";
  } else if (num === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

rockBtn.addEventListener("click", () => {
  humanSelection = "Rock";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  displayScore();
  gameResult();
});

paperBtn.addEventListener("click", () => {
  humanSelection = "Paper";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  displayScore();
  gameResult();
});

scissorsBtn.addEventListener("click", () => {
  humanSelection = "Scissors";
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  displayScore();
  gameResult();
});

function playRound(humanChoice, computerChoice) {
  if (humanScore === 0 && computerScore === 0) {
    gameDisplay.textContent = "";
  }
  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie!`;
  }
}

function displayScore() {
  humanScoreDisplay.textContent = `
  Your Score: ${humanScore}
  `;
  computerScoreDisplay.textContent = `
  Computer Score: ${computerScore}
  `;
}
displayScore();

function gameResult() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      gameDisplay.textContent = `You won the game ${humanScore}-${computerScore}!`;
    } else {
      gameDisplay.textContent = `You lost the game ${computerScore}-${humanScore}!`;
    }
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    displayScore();
  }
}
