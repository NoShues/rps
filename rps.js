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
    
    function getHumanChoice(){
        const userValue = (prompt('Enter: "Rock", "Paper" or "Scissors"'));
        let humanChoice = userValue.toUpperCase().charAt(0) + userValue.toLowerCase().slice(1,8);
        if (humanChoice == 'Rock'){
            humanChoice = 'Rock'
        } else if (humanChoice == 'Paper'){
            humanChoice = 'Paper'
        } else if(humanChoice == 'Scissors'){
            humanChoice = 'Scissors'
        } else
        humanChoice = alert(`No ${userValue}'s allowed!`) + getHumanChoice(); 
        return String(humanChoice)
    }
    
    let humanInitialScore = 0;
    let computerInitialScore = 0;
    
    function playRound (){
        const humanChoice = getHumanChoice();
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
    return result 
}

// function playGame(){
//     for (let i =0; i < 5; i++){
//         playRound()
//            console.log(result);
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