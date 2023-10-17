"use strict";

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".again").addEventListener("click", () => {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎆🎉 Correct number!!!");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 To high!!!" : "📉 To low!!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢 You lost the game!!");
      document.querySelector("body").style.backgroundColor = "#e41c1c";
      document.querySelector(".score").textContent = 0;
    }
  }
});
