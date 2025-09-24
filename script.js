function getComputerChoice(){
    let compChoice = ""
    // get random number between 0 and 1
    let rngChoice = Math.random();
    // cut result to 2 decimals
    rngChoice = rngChoice.toFixed(2);
    console.log("Computer rolled: " + rngChoice);
    // if 0 ~ 0.33 choose Rock 
    if (rngChoice <= .33){
        compChoice = "rock"
    }
    // if .33 ~ .66 choose Paper 
    if (rngChoice > .33 && rngChoice <= .66){
        compChoice = "paper"
    }
    // if .66 ~ 1 choose Scissors
    if (rngChoice > .66){
        compChoice = "scissors"
    }
    console.log("Computer plays: " + compChoice);
    return compChoice;
};

function getHumanChoice(){
    let humanChoice = prompt("Please enter you choice");
    console.log("You played: " + humanChoice);
    return humanChoice;
    // give player choice
};

function playRound(computerChoice, playerChoice){

    if (computerChoice == "rock" && playerChoice == "scissors"){
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    }
    if (computerChoice == "rock" && playerChoice == "paper"){
        playerScore++;
        console.log("You win! Paper beats Rock.");
    }
    if (computerChoice == "rock" && playerChoice == "rock"){
        console.log("Draw. You both picked Rock.");
    }

    if (computerChoice == "paper" && playerChoice == "scissors"){
        playerScore++;
        console.log("You win! Scissors beat Paper.");
    }
    if (computerChoice == "paper" && playerChoice == "paper"){
        console.log("Draw. You both picked Paper.");
    }
    if (computerChoice == "paper" && playerChoice == "rock"){
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    }

    if (computerChoice == "scissors" && playerChoice == "scissors"){
        console.log("Draw. You both picked Scissors.");
    }
    if (computerChoice == "scissors" && playerChoice == "paper"){
        computerScore++;
        console.log("You lose! Scissors beat Paper.");
    }
    if (computerChoice == "scissors" && playerChoice == "rock"){
        playerScore++;
        console.log("You win! Rock beat Scissors.");
    }
};

function determineWinner(){

   if (playerScore > computerScore){
    console.log("Player wins!");
    }
    if (computerScore > playerScore){
        console.log("Computer wins!");
    }
    if (computerScore == playerScore){
        console.log("Draw! No winner.")
    }
};

console.log("Let's play Rock Paper Scissors!");
console.log("===============================")

let playerScore = 0
let computerScore = 0

for (let roundCounter = 0; roundCounter < 5; roundCounter++){
    let playerChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(computerChoice, playerChoice);
    console.log("===============================");
}

console.log("Player scored: " + playerScore);
console.log("Computer scored: " + computerScore);
determineWinner();



