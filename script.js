const displayPlayerScore = document.querySelector(".playerScore")
const displayComputerScore = document.querySelector(".computerScore");

const playerRolled = document.querySelector(".playerRolled");
const computerRolled = document.querySelector(".computerRolled");

const roundResults = document.querySelector(".roundResults");
const gameResults = document.querySelector(".gameResults");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = ""
    // get random number between 0 and 1
    let rngChoice = Math.random();
    // cut result to 2 decimals
    rngChoice = rngChoice.toFixed(2);
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
    computerRolled.textContent = "Computer plays " + compChoice + ".";
    return compChoice;
};

function playRound(computerChoice, playerChoice){

    if (computerChoice == "rock" && playerChoice == "scissors"){
        computerScore++;
        roundResults.textContent = "You lose! Rock beats Scissors.";
    }
    if (computerChoice == "rock" && playerChoice == "paper"){
        playerScore++;
        roundResults.textContent = "You win! Paper beats Rock.";
    }
    if (computerChoice == "rock" && playerChoice == "rock"){
        roundResults.textContent = "Draw. You both picked Rock.";
    }

    if (computerChoice == "paper" && playerChoice == "scissors"){
        playerScore++;
        roundResults.textContent = "You win! Scissors beat Paper.";
    }
    if (computerChoice == "paper" && playerChoice == "paper"){
        roundResults.textContent = "Draw. You both picked Paper.";
    }
    if (computerChoice == "paper" && playerChoice == "rock"){
        computerScore++;
        roundResults.textContent = "You lose! Paper beats Rock.";
    }

    if (computerChoice == "scissors" && playerChoice == "scissors"){
        roundResults.textContent = "Draw. You both picked Scissors.";
    }
    if (computerChoice == "scissors" && playerChoice == "paper"){
        computerScore++;
        roundResults.textContent = "You lose! Scissors beat Paper.";
    }
    if (computerChoice == "scissors" && playerChoice == "rock"){
        playerScore++;
        roundResults.textContent = "You win! Rock beat Scissors.";
    }
};

function determineWinner(){

    if (playerScore > computerScore){
        gameResults.textContent = "Player wins!";
        alert("You win!");
        location.reload();
    }
    if (computerScore > playerScore){
        gameResults.textContent = "Computer wins!";
        alert("Computer wins!");
        location.reload();
    }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

        let playerChoice;

        switch (event.target.id) {
        case "rock":
            playerChoice = "rock";
            playerRolled.textContent = "You play rock.";
            break;

        case "paper":
            playerChoice = "paper";
            playerRolled.textContent = "You play paper.";
            break;

        case "scissors":
            playerChoice = "scissors";
            playerRolled.textContent = "You play scissors.";
            break;

        default:
            return; // if somehow something else gets clicked
        }

        let computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);
        displayPlayerScore.textContent = "Player Score: " + playerScore;
        displayComputerScore.textContent = "Computer Score: " + computerScore;
        
        if (playerScore == 5 || computerScore == 5){
            determineWinner();
        }
    });
});


