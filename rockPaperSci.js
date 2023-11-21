// Not part of the Bootcamp
// Whorkshop with Mad Lab 

//Prompt not working on Node 
// try it on codepen



function playerChoice() {
  let player = prompt("Enter rock (r), paper (p) or scissors(s)?")
  if (player == "r") {
    alert("You have chosen ROCK");
  }
  else if (player == "p") {
    alert("You have chosen PAPER");
  }
  else {
    alert("You have chosen SCISSORS");
  }
  return player
}

function computerChoice() {
  let random = Math.floor(Math.random() * 3) + 1
  let computer = 0;
  
  if(random == 1) {
    alert("Computer has chosen ROCK")
    computer = "r";
  }
  else if(random == 2) {
    alert("Computer has chosen PAPER")
    computer = "p";
  }
  else {
    alert("Computer has chosen SCISSORS")
    computer = "s";
  }
  return computer
  }

function whoWins(player, computer) {
  let result = 0;
  if (player == computer) {
    result = alert("It's a DRAW")
  }
  else if (player == "r") {
    if (computer == "s") {
      result = alert("You Win!")
    }
    else {
      result = alert("You Lose :(")
    }
  }
  else if (player == "s") {
    if (computer == "p") {
      result = aler("You Win!")
    }
    else {
      result = alert("You Lose :(")
    }
  }
  return result
}

function playGame() {
  whoWins(playerChoice(), computerChoice());
}

playGame();