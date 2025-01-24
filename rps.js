// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
 playRound(button.id);
  });
});


function getComputerChoice(max){
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice == 0){
        computerChoice = 'Rock';
    } else if (computerChoice == 1){
        computerChoice = 'Paper';
    } else
        computerChoice = 'Scissors';
        return computerChoice 
    }
    
    
    let humanInitialScore = 0;
    let computerInitialScore = 0;
    
    function playRound (humanChoice){
        const computerChoice = getComputerChoice(3);
        if (humanChoice == computerChoice){
            result = 'It is a draw!'
        } else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
            result = 'You Win! Rock beats Scissors', ++humanInitialScore
        } else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
            result = 'You Win! Paper beats Rock', ++humanInitialScore
        } else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
            result = 'You Win! Scissors beats Paper', ++humanInitialScore
        } else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
            result = 'You lose! Paper beats Rock', ++computerInitialScore
        } else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
            result = 'You lose! Scissors beats Paper', ++computerInitialScore
        } else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
            result = 'You lose! Rock beats Scissors', ++computerInitialScore
        } else
        result = 'Oh, oh! Looks like something went wrong!'
        return result, console.log(result), console.log('Human Score: ' + humanInitialScore + ' Computer Score: ' + computerInitialScore);
    }
    console.log('Computer Choice: ' + getComputerChoice());

// function playGame(){
//     for (let i =0; i < 5; i++){
//         playRound()
//         console.log('Computer Choice: ' + getComputerChoice());
//         console.log(result);
//         console.log('Human Score: ' + humanInitialScore + ' Computer Score: ' + computerInitialScore);}
//     if (humanInitialScore > computerInitialScore){
//         message = '🎉Congratulations🎉 🏆 YOU WIN! 🏆'
//     } else if (humanInitialScore < computerInitialScore){
//         message = 'Better luck next time: YOU LOSE'
//     } else if (humanInitialScore == computerInitialScore){
//         message = 'Unbelievable! It was a draw!'
//     } else
//     message = 'Uh, oh! Something went wrong'

//     return message;
    
// }
// playGame();
// console.log(message)