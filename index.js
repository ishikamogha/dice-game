let player1Name = "Player 1";
let player2Name = "Player 2";

function startGame() {
  const p1 = document.getElementById("player1").value;
  const p2 = document.getElementById("player2").value;

  player1Name = p1.trim() === "" ? "Player 1" : p1.trim();
  player2Name = p2.trim() === "" ? "Player 2" : p2.trim();

  // Set dice labels
  document.querySelectorAll(".dice p")[0].textContent = player1Name;
  document.querySelectorAll(".dice p")[1].textContent = player2Name;

  // Hide input section
  document.querySelector(".player-inputs").style.display = "none";

  // Show roll button
  document.querySelector(".roll-btn").style.display = "inline-block";

  // Update header
  document.getElementById("heading").textContent = "Click to Roll the Dice!";
}

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", dice${randomNumber2}.png`);

  const heading = document.getElementById("heading");

  if (randomNumber1 > randomNumber2) {
    heading.textContent = `🚩 ${player1Name} Wins!`;
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = `${player2Name} Wins! 🚩`;
  } else {
    heading.textContent = "It's a Draw!";
  }
}
