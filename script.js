let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let Choice = prompt("What's Your Choice?");
  if (!Choice) return "";
  let humanChoice = Choice[0].toUpperCase() + Choice.slice(1).toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You won! Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You won! Paper beats rock");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You won! Scissors beats paper");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie");
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You won the match ${humanScore} to ${computerScore}`);
  } else {
    console.log(`You lost the match ${computerScore} to ${humanScore}`);
  }
}

playGame();
