
// always storage DOM elements in varibles on top because we won't need to repeat querySelector many times
const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p"); // get the p tag inside the result class
const rockDiv = document.querySelector("#r");
const paperDiv = document.querySelector("#p");
const scissorsDiv = document.querySelector("#s");

// default varibles, userScore and computerScore will be increased so we will use let to declare variable 
let userScore = 0;
let computerScore = 0;

// function that takes value from individual buttons
function main() {
    rockDiv.addEventListener("click", function () {
        game("r");
    });

    paperDiv.addEventListener("click", function () {
        game("p");
    });

    scissorsDiv.addEventListener("click", function () {
        game("s");
    });

}
main();


// make computer's choice (random choice between those 3 options)
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    //Math is a build-in object in JS and random() and floor() are methods that exists in Math object
    //random() gives random decimal numbers between 0 and 1
    // floor() give rounding Numbers 0,1,2 , because the array only has 3 elements
    return choices[randomNumber];
}
//console.log(getComputerChoice());


// compare user's choices againts computer's choices
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rs":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// check who wins
// then display the result back on to the DOM
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = ` Your choice: ${convertKeyWords(userChoice)} The choice of computer: ${convertKeyWords(computerChoice)} 🔥 You win! `;
    check(userScoreSpan.textContent, computerScoreSpan.textContent);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = ` Your choice: ${convertKeyWords(userChoice)} The choice of computer: ${convertKeyWords(computerChoice)} 🤣 You lose! `;
    check(userScoreSpan.textContent, computerScoreSpan.textContent);
}

function draw(userChoice, computerChoice) {
    resultDiv.innerHTML = ` Your choice: ${convertKeyWords(userChoice)} The choice of computer: ${convertKeyWords(computerChoice)} Tie Score 🤗 `;
    check(userScoreSpan.textContent, computerScoreSpan.textContent);
}

//convert
function convertKeyWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

// check who wins in total
function checkWinTotal(player){
    switch(player){
        case "hooman": {
            alert("You win !!!");
            userScore = 0;
            computerScore = 0;
            userScoreSpan.innerHTML = userScore;
            computerScoreSpan.innerHTML = computerScore;
            resultDiv.innerHTML = `Choose something`;
            break;
        }
        case "npc": {
            alert("Computer wins");
            userScore = 0;
            computerScore = 0;
            userScoreSpan.innerHTML = userScore;
            computerScoreSpan.innerHTML = computerScore;
            resultDiv.innerHTML = `Choose something`;
            break;
        }
    }
}

function check(playerOne, playerTwo){
    if(playerOne === "2"){
        setTimeout(() => {
            checkWinTotal("hooman");
        }, 10)
    }
    else if(playerTwo === "2"){
        setTimeout(() => {
            checkWinTotal("npc");
        }, 10);
    }
}