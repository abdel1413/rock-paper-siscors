function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hadPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hadPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie both choose ${userOption}`;
  } else {
    computerScore += 1;
    return `Compuert wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const optionContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  winnerMsg.innerText = `${
    playerScore === 3 ? "Player" : "Computer"
  } has won the game`;
  resetGameBtn.style.display = "block";
  optionContainer.style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionContainer.style.display = "block";
  winnerMsg.innerText = "";
  roundResultMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", () => {
  showResults("Paper");
});
scissorsBtn.addEventListener("click", () => {
  showResults("scissors");
});
