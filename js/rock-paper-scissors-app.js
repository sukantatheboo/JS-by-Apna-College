let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#cmp-score");

// for(let choice of choices){
//     console.log(choice)
// }

const genCmpChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = `Game was Draw. Play again:)`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, cmpChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win:^) Your ${userChoice} beats   ${cmpChoice}`;
    msg.style.backgroundColor = "darkgreen";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose:| ${cmpChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor = "darkred";
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  //   Generate computer choice -> modular
  const cmpChoice = genCmpChoice();
  console.log(cmpChoice);

  if (userChoice === cmpChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock" && cmpChoice === "paper") {
      //   userWin = cmpChoice === "paper" ? false : true;
      userWin = false;
    } else if (userChoice === "rock" && cmpChoice === "scissors") {
      userWin = true;
    } else if (userChoice === "paper" && cmpChoice === "scissors") {
      userWin = false;
    } else if (userChoice === "paper" && cmpChoice === "rock") {
      userWin = true;
    } else if (userChoice === "scissors" && cmpChoice === "rock") {
      userWin = false;
    } else if (userChoice === "scissors" && cmpChoice === "paper") {
      userWin = true;
    }
    showWinner(userWin, userChoice, cmpChoice);
  }
};
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log(`You clicked ${userChoice}`);
    playGame(userChoice);
  });
});
