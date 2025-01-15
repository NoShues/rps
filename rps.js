// Test that "rps.js" file is linked to "index.html" file.
console.log('Hello World!'); //success: printed to console

// logic to get the computer choice of a random number between 0 an 3
function getComputerChoice(max){
    return Math.floor(Math.random() * max);

}
    // check if getComputerChoice function is working in console
    console.log(getComputerChoice(3));//success