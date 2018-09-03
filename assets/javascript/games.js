// Word List
var wordList = ["elephant", "giraffe", "tiger", "turtle"];

//Image List
var wordImage =["imageE.jpg", "imageG.jpg", "imageT.jpg", "imageTU.jpg"];

// Variables

var userGuess = [];
var wrongLetter = [];
var rightLetter = [];
var allowedGuesses = 9;

var currentWord = document.getElementById("currentWord");
var guessRemaining = document.getElementById("guessesRemaining");
var letterGuessed = document.getElementById("guessedLetter");


function startGame (){

//Choose word randomly 
    ranWord = wordList[Math.floor(Math.random() * wordList.length)];

    for (var i = 0; i < ranWord.length; i++){

// Create underscores
     rightLetter.push(" _ ");
}
   currentWord.innerHTML = rightLetter.join(" ");
   guessRemaining.innerHTML = allowedGuesses; 

} 

function updateGuessed(letter){
    allowedGuesses--;
    guessRemaining.innerHTML = allowedGuesses;

    if (ranWord.indexOf(letter) === -1){
    wrongLetter.push(letter);
    letterGuessed.innerHTML = wrongLetter.join(" , ");
    console.log(wrongLetter);
    
}
    else{
        for(var i = 0; i < ranWord.length; i++){
            if( ranWord[i] === letter){
                rightLetter[i] = letter;
            }
        }

        currentWord.innerHTML = rightLetter.join(" ");
    }
}

function winLose(){

    if(rightLetter.indexOf(ranWord) == -1){
        alert("Congratulations You Win");
    }
    else if(allowedGuesses === 0){
        alert("Sorry you Lost");
    }
    winLose();
}  

// Get user guess

document.onkeyup = function(event){

   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   updateGuessed(userGuess);
    
};

startGame();

