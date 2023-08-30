const plays = {
    rock:     "rock",
    paper:    "paper",
    scissors: "scissors"
}

function getComputerChoice() {
    const random_index = Math.floor(Math.random() * Object.keys(plays).length);
    return plays[Object.keys(plays)[random_index]];
}