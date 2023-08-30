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

for (let pchoice in plays)
    for (let cchoice in plays)
        console.log(`p: ${pchoice} c: ${cchoice} w: ${playRound(pchoice, cchoice)}`);