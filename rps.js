// Test that "rps.js" file is linked to "index.html" file.
console.log('Hello World!'); //success

// logic to get the computer choice of a random number between 0 an 3
function getComputerChoice(max){
    return Math.floor(Math.random() * max);

}

if (getComputerChoice(3) == 0) {
    computerChoice = "Rock";
} else if (getComputerChoice(3) == 1){
    computerChoice = "Paper";
}
else {
    computerChoice = "Scissors";
}
    // check if getComputerChoice function is working in console
    console.log('Computer Choice: ' + computerChoice); //success

// logic to get the human choice of a random number between 0 an 3
function getHumanChoice(){
    return String(prompt("Enter: Rock, Paper or Scissors"));
}
    // check if getHumanChoice function is working in console
console.log('Human Choice: ' + getHumanChoice()); //success