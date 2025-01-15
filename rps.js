// Test that "rps.js" file is linked to "index.html" file.
console.log('Hello World!'); //success: printed to console

// logic to get the computer choice of a random number between 0 an 3
function getComputerChoice(max){
    return Math.floor(Math.random() * max);

}

if (getComputerChoice(3) == 0) {
    choice = "Rock";
} else if (getComputerChoice(3) == 1){
    choice = "Paper";
}
else {
    choice = "Scissors";
}
    // check if getComputerChoice function is working in console
    console.log(choice);//success
