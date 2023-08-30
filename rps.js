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

function getPlayerChoice(prompt_text) {
    let playerchoice;
    try {
        playerchoice = prompt(prompt_text).toLowerCase();
    } catch (typeError) {
        return getPlayerChoice("Sorry, but the cancel button isn't getting you out of this that easily.");
    }
    
    if (playerchoice === "r" || playerchoice === "rock")
        return plays.rock;
    if (playerchoice === "p" || playerchoice === "paper")
        return plays.paper;
    if (playerchoice === "s" || playerchoice === "scissors")
        return plays.scissors;
    return getPlayerChoice(`Sorry, ${playerchoice} is not a valid selection. Please try again`);
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


function playGame() {
    let playerwins = 0;
    let computerwins = 0;
    let resultstring = "";
    let playerchoice;
    let computerchoice;
    let result;

    for (let i = 0; i < 5; ++i) {

        if (i === 0)
            playerchoice = getPlayerChoice("Rock paper scissors, best of 5. What's your first move?");
        else
            playerchoice = getPlayerChoice(`${resultstring} You ${playerwins}, computer ${computerwins}. What's your next move?`);

        computerchoice = getComputerChoice();
        result = playRound(playerchoice, computerchoice);

        switch (result) {
            case winner.player:
                playerwins++;
                resultstring = `Radical! The computer chose ${computerchoice} to your ${playerchoice}.`;
                break;
            case winner.computer:
                computerwins++;
                resultstring = `Bummer! The computer chose ${computerchoice} to your ${playerchoice}.`;
                break;
            case winner.tie:
                resultstring = `That's a tie!`;
                break;
        }
        
        if (playerwins === 3) {
            prompt(`${resultstring} You win!!`);
            break;
        }
        if (computerwins == 3) {
            prompt(`${resultstring} You lose!!`);
            break;
        }
    }
}

playGame();