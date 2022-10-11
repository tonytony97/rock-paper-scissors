
function getComputerChoice (){
    let choice;
    const rand=Math.floor(Math.random()*3);
    if (rand === 1){
        choice = "rock";
    }
    else if(rand === 2){
        choice= "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelect,computerSelect) {
    let result;
    if( playerSelect == "rock" && computerSelect == "paper"){
        result = "You Lose! Paper beats Rock";
    }

    else if(playerSelect == "rock" && computerSelect == "rock"){
        result = "Rock Draw!";  
    }

    else if(playerSelect == "rock" && computerSelect == "scissors"){
        result = "You Rock! Rock beats Scissors";
    }

    else if(playerSelect == "paper" && computerSelect == "paper"){
        result ="Paper Draw!";
    }

    else if(playerSelect == "paper" && computerSelect == "rock"){
        result = "That's a Wrap! Paper beats Rock";
    }

    else if(playerSelect == "paper" && computerSelect == "scissors"){
        result = "You Lose! Scissors beats Paper";
    }

    else if(playerSelect == "scissors" && computerSelect == "paper"){
        result = "Cut! Scissors beats Paper";
    }

    else if(playerSelect == "scissors" && computerSelect == "rock"){
       result = "You Lose! Rock beats Scissors";
    }

    else if (playerSelect == "scissors" && computerSelect == "scissors"){
        result = "Scissors Draw!";
    }

    else{
        alert("Something went wrong...")
        console.log(playerSelect);
        console.log(getComputerChoice());
        }
    return result;
};



const container = document.querySelector('#container');

const div = document.createElement('div');
const playerScore = document.createElement('p');
playerScore.textContent = 'Player: ';

const compScore = document.createElement('p');
compScore.textContent = 'Computer: ';

const result = document.createElement('h3');
result.textContent= 'Match Results: '

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click',function (){
        let win = 0;
        let lose = 0;
        playRound(button.id,getComputerChoice());
        result.textContent= 'Match Results: '+ playRound(button.id,getComputerChoice());

    });
});

div.appendChild(playerScore);
div.appendChild(compScore);
div.appendChild(result);
container.appendChild(div);


//Old Code
/*function playRound(playerSelect,computerSelect){
    if(playerSelect.toLowerCase() === "rock" && computerSelect === "paper"){
        return("You Lose! Paper beats Rock");
    }

    else if(playerSelect.toLowerCase() === "rock" && computerSelect === "rock"){
            return("Rock Draw!");
    }

    else if(playerSelect.toLowerCase() === "rock" && computerSelect === "scissors"){
        return("You Rock! Rock beats Scissors");
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "paper"){
        return("Paper Draw!");
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "rock"){
        return("That's a Wrap! Paper beats Rock");
    }

    else if(playerSelect.toLowerCase() === "paper" && computerSelect === "scissors"){
        return("You Lose! Scissors beats Paper");
    }

    else if(playerSelect.toLowerCase() === "scissors" && computerSelect === "paper"){
        return("Cut! Scissors beats Paper");
    }

    else if(playerSelect.toLowerCase() === "scissors" && computerSelect === "rock"){
        return("You Lose! Rock beats Scissors");
    }

    else if (playerSelect.toLowerCase() === "scissors" && computerSelect === "scissors"){
        return("Scissors Draw!")
    }
    else{
        return("Invalid Choice! You Lose!");
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0;i<5;i++){
        const playerSelect = prompt("Rock, Paper or Scissors?");
        const computerSelect = getComputerChoice();

        console.log(playRound(playerSelect,computerSelect));

        if(playRound(playerSelect,computerSelect) === "You Rock! Rock beats Scissors" || 
        playRound(playerSelect,computerSelect) === "That's a Wrap! Paper beats Rock" || 
        playRound(playerSelect,computerSelect) === "Cut! Scissors beats Paper")
        {
            playerScore +=1;
        }
        else if(playRound(playerSelect,computerSelect) === "You Lose! Paper beats Rock" || playRound(playerSelect,computerSelect) === "You Lose! Scissors beats Paper" || playRound(playerSelect,computerSelect) === "You Lose! Rock beats Scissors")
        {
            compScore +=1;
        }

        console.log("Player:",playerScore);
        console.log("Computer:",compScore); 
    }

    if (playerScore > compScore){
        return("The Player WINS!");
    } 
    else if(playerScore < compScore){
        return("The Computer WINS!");
    }

    else{
        return("The game ended in a DRAW!");
    }
}*/


