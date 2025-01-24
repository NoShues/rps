
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
    const computerSelection = document.querySelector('#playerSelection');
    const contentComputerSelection= document.createElement('div');
    const scores = document.querySelector('#playerSelection');
    const contentScores = document.createElement('div');
    const roundResult = document.querySelector('#playerSelection');
    const contentRoundResult = document.createElement('div');
    
    
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
        
       return  contentRoundResult.textContent = result,
        contentComputerSelection.textContent = 'Computer Choice: ' + computerChoice,
        computerSelection.appendChild(contentComputerSelection),
       
        contentScores.textContent = 'Human Score: ' + humanInitialScore + ' Computer Score: ' + computerInitialScore,
        scores.appendChild(contentScores),
        
       
        contentRoundResult.textContent = result,
        roundResult.appendChild(contentRoundResult),
        score()
  

        // console.log('Human Score: ' + humanInitialScore + ' Computer Score: ' + computerInitialScore), 
        // console.log('Computer Choice: ' + computerChoice), 
        // console.log(score());
    }

function score(){

    if (humanInitialScore == 5){
        message = alert('🎉Congratulations🎉 🏆 YOU WIN! 🏆');
     
    } else if (computerInitialScore == 5){
        message = alert('Better luck next time: YOU LOSE');
    
    } else
        message = 'Keep Playing!'

    return message
    
}
