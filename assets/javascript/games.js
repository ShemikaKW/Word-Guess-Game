// Word List
var wordList = ["elephant", "giraffe", "tiger", "turtle", "zebra", "lion", "gorilla"];

//Image List
var wordImage =["assets/images/imageE.jpg", "assets/images/imageG.jpg", "assets/images/imageT.jpg", "assets/images/imageTU.jpg", "assets/images/imagesZ.jpg",
"assets/images/lion.jpg", "assets/images/gorilla.jpg"];

// Variables

var userGuess = [];
var wrongLetter = [];
var rightLetter = [];
var wins = 1;
var allowedGuesses = 9;

var currentWord = document.getElementById("currentWord");
var guessRemaining = document.getElementById("guessesRemaining");
var letterGuessed = document.getElementById("guessedLetter");
var won = document.getElementById("win");
var outputW = document.getElementById("winText");
var outputL = document.getElementById("loseText");
// var image = document.getElementById("wordImage");

// Start of Game
function startGame(){

// Reset for after each word
rightLetter = [];
allowedGuesses = 9;
wrongLetter = [];
// outputL = [];
// outputW =[];

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

// Win or Lose output
function winLose(){

    if(rightLetter.indexOf(" _ ") === -1){
        won.innerHTML = wins;
        outputW.innerHTML = ("Congratulations You Win");
    var image = wordList.indexOf(ranWord);
        document.getElementById("wordImage").src = wordImage[image];
        wins++;
        startGame();
    
    }
    else if(allowedGuesses === 0){
        outputL.innerHTML = ("Sorry you Lost");
        startGame();
    
    }
    
}  



// User input

document.onkeyup = function(event){

   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   updateGuessed(userGuess);
   winLose();
};


startGame();

