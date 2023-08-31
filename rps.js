const plays = {
    rock:     "rock",
    paper:    "paper",
    scissors: "scissors"
}

const winner = {
    player:   "player",
    computer: "computer",
    tie:      "tie"
}

function getComputerChoice() {
    const random_index = Math.floor(Math.random() * Object.keys(plays).length);
    return plays[Object.keys(plays)[random_index]];
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) { //My kingdom for a match statement
        case plays.rock: {
            switch(computerSelection) {
                case plays.rock:     return winner.tie;
                case plays.paper:    return winner.computer;
                case plays.scissors: return winner.player;
            }
        }

        case plays.paper: {
            switch(computerSelection) {
                case plays.rock:     return winner.player;
                case plays.paper:    return winner.tie;
                case plays.scissors: return winner.computer;
            }
        }

        case plays.scissors: {
            switch(computerSelection) {
                case plays.rock:     return winner.computer;
                case plays.paper:    return winner.player;
                case plays.scissors: return winner.tie;
            }
        }
    }
}

function clickedChoice(e) {
    const playerchoice = plays[this.dataset.choice];
    const computerchoice = getComputerChoice();
    const result = playRound(playerchoice, computerchoice);

    let matches = document.querySelector("div.matches");
    
    let playeremoji, computeremoji, resultemoji;
    switch (playerchoice) {
        case plays.rock: {
            playeremoji = "✊";
            break;
        }
        case plays.paper: {
            playeremoji = "✋";
            break;
        }
        case plays.scissors: {
            playeremoji = "✌️";
            break;
        }
    }

    switch (computerchoice) {
        case plays.rock: {
            computeremoji = "🪨";
            break;
        }
        case plays.paper: {
            computeremoji = "📄";
            break;
        }
        case plays.scissors: {
            computeremoji = "✂️";
            break;
        }
    }

    switch (result) {
        case winner.player: {
            resultemoji = "✅";
            break;
        }
        case winner.computer: {
            resultemoji = "❌";
            break;
        }
        case winner.tie: {
            resultemoji = "⚠️";
            break;
        }
    }

    let div_result = document.createElement("div");
    div_result.textContent = `${playeremoji}${computeremoji}${resultemoji}`;
    matches.appendChild(div_result);
}

const options = document.querySelectorAll("div.option");
options.forEach(option => option.addEventListener("click", clickedChoice));