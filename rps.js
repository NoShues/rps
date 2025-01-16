    // SEQUENCE computer choice
        // COMPUTE random number between 0 and 3 to be the computer choice
            // SET computer choice
                // IF-THEN-ELSE
                    // IF computer choice is equal to 0
                        // THEN Display: 'Rock'
                    // IF computer choice is equal to 1
                        // THEN Display: 'Paper'
                    // ELSE 
                        // Display: 'Scissors'
// *****************************************************************************************************//
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
// console.log('getComputerChoice fx: ' + getComputerChoice(3));
// *****************************************************************************************************//
    // SEQUENCE human choice
        // GET human choice
            // SET human choice to capitalize first letter ONLY
                // DETERMINE if the human choice is a valid choice
                    // IF-THEN-ELSE
                        // IF human choice is equal to 'Rock'
                            // THEN Display: 'Rock'
                        // IF human choice is equal to 'Paper' 
                            // THEN Display: 'Paper'
                        // IF human choice is equal to 'Scissors'
                            // THEN Display: 'Scissors'
                        // ELSE
                            // Display: 'Please choose '"Rock", "Paper" or "Scissors"'
                            // GET new human choice
// *****************************************************************************************************//
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
// console.log('getHumanChoice fx: ' + getHumanChoice());
// *****************************************************************************************************//
    // SEQUENCE declare scores
        // SET human score
            // INIT human score to a value of 0
        // SET computer score
            // INIT computer score to a value of 0
// *****************************************************************************************************//
let humanScore = 0;
let computerScore = 0;
console.log('Human Score: ' + humanScore + ' Computer Score: ' + computerScore)
// *****************************************************************************************************//
    // SEQUENCE play round
        // GET human choice and computer choice
            // IF human choice is equal to computer choice
                // THEN Display: 'It's a Draw!'
            // IF human choice is equal to 'Rock' and computer choice is equal to 'Scissors'
                // THEN Display: 'You win! Rock beats Scissors'
                // INCREMENT human score by 1
            // IF human choice is equal to 'Paper' and computer choice is equal to 'Rock'
                // THEN Display: 'You Win! Paper beats Rock'
                // INCREMENT human score by 1
            // IF human choice equals 'Scissors' and computer choice equals 'Paper'
                // THEN Display: 'You win! Scissors beats paper'
                // INCREMENT human score by 1
            // IF human choice equals 'Rock' and computer choice equals 'Paper'
                // THEN Display: 'You lose! Paper beats Rock'
                // INCREMENT computer score by 1
            // IF human choice equals 'Paper' and computer choice equals 'Scissors'
                // THEN Display: 'You lose! Scissors beats Paper'
                // INCREMENT computer score by 1
            // IF human choice equals 'Scissors' and computer choice equals 'Rock'
                // THEN Display: 'You lose! Rock beats Paper'
                // INCREMENT computer score by 1
            // ELSE
                // Display: 'Oh, oh! Looks like something went wrong'
// *****************************************************************************************************//
function playRound (humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        result = 'It is a draw!'
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        result = 'You Win! Rock beats Scissors'
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
        result = 'You Win! Paper beats Rock'
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
        result = 'You Win! Scissors beats Paper'
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        result = 'You lose! Paper beats Rock'
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
        result = 'You lose! Scissors beats Paper'
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
        result = 'You lose! Rock beats Scissors'
    } else
        result = 'Oh, oh! Looks like something went wrong!'
        return result
}
const humanSelection = (getHumanChoice());
const computerSelection = (getComputerChoice(3));
console.log('You: ' + humanSelection)
console.log('Computer: ' + computerSelection)
console.log(playRound(humanSelection, computerSelection));
// *****************************************************************************************************//
    // SEQUENCE play game
        // CALL play round 5 times
            // IF human score is greater than computer score
                // THEN Display: 'Congratulations: YOU WIN!'
            // IF human score is less than computer score
                // THEN Display: 'Better luck next time: YOU LOSE'
            // IF human score is equal to computer score
                // THEN Display: 'Unbelievable! It was a draw!'
            // ELSE
                // Display: 'Uh, oh! Something went wrong'
// *****************************************************************************************************//