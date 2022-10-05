function getComputerChoice (){
    let choice;
    const rand=Math.floor(Math.random()*3);
    if (rand === 1){
        choice = "Rock";
    }
    else if(rand === 2){
        choice="Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;

    
}

function playRound()

getComputerChoice();