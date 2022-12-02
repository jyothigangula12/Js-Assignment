const userSelection = (userInput) => {
  if (userInput.toLowerCase() === "rock") {
    return userInput;
  } else if (userInput.toLowerCase() === "paper") {
    return userInput;
  } else if (userInput.toLowerCase() === "scissors") {
    return userInput;
  } else {
    console.log("Not Valid!");
  }
};
// userSelection function is to get input from user.
const computerSelection = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};
//computerSelection function is to get random value.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};
//determineWinner function is used to get winner
const playRound = (input) => {
  const userChoice = userSelection(input.toLowerCase());
  const computerChoice = computerSelection();
  console.log("You threw:" + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  return determineWinner(userChoice, computerChoice);
};
let yourScore = 0;
let computerScore = 0;
let tie = 0;
startGameEvent = () => {
  yourScore = 0;
  computerScore = 0;
  tie = 0;
  let roundResult = "You have total 5 rounds.";
  for (i = 0; i <= 4; i++) {
    let input = prompt(
      `${roundResult}\nThis is your round  ${
        i + 1
      }.\n Please choose rock, paper or scissors`
    );
    roundResult = playRound(input);
    if (roundResult === "The computer won!") {
      computerScore += 1;
    } else if (roundResult === "You won!") {
      yourScore += 1;
    } else {
      tie += 1;
    }
  }
  //startGameEvent function is to get result after every round.
  if (yourScore >= 2 || computerScore >= 2 || tie >= 2) {
    document.getElementById("visibleResult").style.visibility = "visible";
  }
  console.log(Number(yourScore), computerScore, tie);
  if (yourScore) document.getElementById("you").innerHTML = Number(yourScore);
  document.getElementById("computer").innerHTML = Number(computerScore);
  document.getElementById("tie").innerHTML = Number(tie);

  if (yourScore > computerScore) {
    document.getElementById("result").innerHTML = "YOU WON !";
  } else if (yourScore < computerScore) {
    document.getElementById("result").innerHTML = "COMPUTER WON !";
  } else {
    document.getElementById("result").innerHTML = "GAME IS TIE !";
  }
  //these are all statements to diplay result on webpage.
};
