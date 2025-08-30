let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;
let msg = document.querySelector("#msg").innerHTML;
const rock = document.querySelector("#rock");
const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
  randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    compChoice = "rock";
  } else if (randomChoice === 1) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
};

const checkWinners = ()=>{
  if (userChoice === compChoice) {
      console.log(`You choosed ${userChoice}\nComputer choosed ${compChoice}\ngame draw!`);
      msg = `You choosed ${userChoice}. Computer choosed ${compChoice}. Game draw!`;
      console.log(msg);
  } else  {
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper") 
    ){
      console.log(`You choosed ${userChoice}\nComputer choosed ${compChoice}\nYou won!`);

    }
    else{
      console.log(`You choosed ${userChoice}\nComputer choosed ${compChoice}\nComputer won!`);
    }
  }
}

const playGame = (userChoice) => {
  getCompChoice();
  checkWinners();
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
