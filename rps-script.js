
function getComputerChoice (){
    let choice;
    const rand=Math.floor(Math.random()*3);
    if (rand === 1){
        choice = "rock";
    }
    else if(rand === 2){
        choice="paper";
    }
    else {
        choice = "scissors";
    }
    return choice;

    
}

const playerSelect = prompt("Rock, Paper or Scissors?");
const computerSelect = getComputerChoice();

function playRound(playerSelect, computerSelect){
    if(playerSelect.toLowerCase() === "rock" && computerSelect === "paper"){
        return("You Lose! Paper beats Rock")
    }

    else if(playerSelect.toLowerCase() === "rock" && computerSelect === "rock"){
            return("Rock Draw!")
    }

    else if(playerSelect.toLowerCase() === "rock" && computerSelect === "scissors"){
        return("You Rock! Rock beats Scissors")
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "paper"){
        return("Paper Draw!")
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "rock"){
        return("That's a Wrap! Paper beats Rock")
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "scissors"){
        return("You Lose! Scissors beats Paper")
    }

    else if(playerSelect.toLowerCase() === "scissors" && computerSelect === "paper"){
        return("Cut! Scissors beats Paper")
    }

    else if(playerSelect.toLowerCase() === "scissors" && computerSelect === "rock"){
        return("You Lose! Rock beats Scissors")
    }

    else if (playerSelect.toLowerCase() === "scissors" && computerSelect === "scissors"){
        return("Scissors Draw!")
    }
    else{
        return("Invalid Choice! You Lose!");
    }
}



console.log(playRound(playerSelect,computerSelect));