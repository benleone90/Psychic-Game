// Create variables for wins, losses, attempts and
// letters for computer to pick from
var won = 0;
var loss = 0;
var attempts = 10;
var letters = "abcdefghijklmnopqrstuvwxyz"
var usedArray = []

// Create variable for the random letter picked by computer
// and print to the console
var randLetter = letters[Math.floor(Math.random()*letters.length)];
console.log(randLetter);

// Create function for game to call on that will generate
// random letter to compare against user input
function compGuess() {
    randLetter=letters[Math.floor(Math.random()*letters.length)];
    console.log(randLetter);
}

// Win Game Function
function win(){
    usedArray=[];
    won++;
    attempts=10+1;
    compGuess();
    document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;
}

// Lose Game Function
function loseGame(){
    loss++        
    usedArray=[]
    attempts=10
    compGuess();
    document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;

}

// Display elements at beginning of game
document.getElementById("wins").innerHTML = "Your Wins: " + won;
document.getElementById("losses").innerHTML = "Your Losses: " + loss;
document.getElementById("guessLeft").innerHTML = "Remaining Guesses: " + attempts;
document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;


// Captures user guess and stores as variable "userGuess"
// and runs the logic to check userGuess against randLetter
document.onkeyup=function (event) {
    var userGuess=event.key;
    console.log(userGuess);
    
    usedArray.push(userGuess);
    
    var regexp = /[a-z]/gi;
        if (!regexp.test(userGuess)){
            usedArray.pop(userGuess);
            alert("Please choose a letter");
            attempts++;
        }


    console.log(usedArray);

    if(userGuess === randLetter){
        win();
    
    }

    if(userGuess !== randLetter){
        attempts--
    }

    if(attempts == 0){
        loseGame();
    }
    
    document.getElementById("wins").innerHTML = "Your Wins: " + won;
    document.getElementById("losses").innerHTML = "Your Losses: " + loss;
    document.getElementById("guessLeft").innerHTML = "Remaining Guesses: " + attempts;
    document.getElementById("pastGuess").innerHTML = "Your Guesses: " + usedArray;
}