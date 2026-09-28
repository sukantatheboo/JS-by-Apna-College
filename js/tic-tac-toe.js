let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Variables to track who is playing
let userVal = "X";
let compVal = "O";

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// --- 1. Start / Reset Game ---
const resetGame = () => {
  console.log("Game Resetting...");
 
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msgContainer.classList.add("hide");
  // 

  // Ask User preference with a small delay to ensure UI updates first
  setTimeout(() => {
    let userWantsX = confirm(
      "Do you want to play as X?\n(OK = Yes, Cancel = Play as O)",
    );

    if (userWantsX) {
      userVal = "X";
      compVal = "O";
      console.log("User chose X. User starts.");
    } else {
      userVal = "O";
      compVal = "X";
      console.log("User chose O. Computer starts.");
      disableAllClickable();
      setTimeout(computerMove, 600);
    }
 
  }, 100);
};

// --- 2. User Click Logic ---
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("User clicked a box");

    // User Move
    box.innerText = userVal;
    box.style.color = "black";
    box.disabled = true;

    // Check Result
    let gameWon = checkWinner();
    let isDraw = checkDraw();

    if (gameWon) {
      console.log("User Won!");
    } else if (isDraw) {
      console.log("Draw detected!");
    } else {
      console.log("No winner yet. Computer's turn...");
      disableAllClickable(); // Lock board
      setTimeout(computerMove, 800);
    }
  });
});

// --- 3. Computer Move Logic ---
const computerMove = () => {
  console.log("Computer thinking...");

  // Find empty boxes (Using trim to ignore spaces)
  let emptyIndices = [];
  boxes.forEach((box, index) => {
    if (box.innerText.trim() === "") {
      emptyIndices.push(index);
    }
  });

  if (emptyIndices.length > 0) {
    // Pick random index
    let randomIndex = Math.floor(Math.random() * emptyIndices.length);
    let boxIndex = emptyIndices[randomIndex];

    let box = boxes[boxIndex];

    // Make the move
    box.innerText = compVal;
    box.style.color = "#b0413e";
    box.disabled = true;
    console.log(`Computer picked box ${boxIndex}`);

    // Check result
    let gameWon = checkWinner();

    // Unlock board for user if game is not over
    if (!gameWon && !checkDraw()) {
      enableEmptyBoxes();
      console.log("Board unlocked for user.");
    }
  } else {
    console.log("Computer found no empty boxes!");
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // IMPORTANT: use .trim() to ignore empty HTML whitespace
    let pos1Val = boxes[pattern[0]].innerText.trim();
    let pos2Val = boxes[pattern[1]].innerText.trim();
    let pos3Val = boxes[pattern[2]].innerText.trim();

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
  return false;
};

const checkDraw = () => {
  if (!msgContainer.classList.contains("hide")) return false; // Already won

  let isDraw = true;
  for (let box of boxes) {
    if (box.innerText.trim() === "") isDraw = false;
  }

  if (isDraw) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    return true;
  }
  return false;
};

const showWinner = (winner) => {
  let winnerName = winner === userVal ? "You" : "Computer";
  msg.innerText = `${winnerName} Won`;
  msgContainer.classList.remove("hide");
  disableAllClickable();
};

const disableAllClickable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableEmptyBoxes = () => {
  for (let box of boxes) {
    if (box.innerText.trim() === "") {
      box.disabled = false;
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Start game
resetGame();
