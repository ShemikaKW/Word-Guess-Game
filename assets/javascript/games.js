// Word List
var wordList = ["elephant", "giraffe", "tiger", "turtle"];

//Image List
var wordImage =["imageE.jpg", "imageG.jpg", "imageT.jpg", "imageTU.jpg"];

// Variables
var wins = 0;
var losses =0;
var guessesRemaining = 0;
var guessedLetter = [];
var underScore = [];
var answerupdate = [];

//Choose word randomly
var ranWord = Math.floor(Math.random() * wordList.length);
var choosenWord = wordList[ranWord];


// Create underscores based on word length

 for (let i = 0; i < choosenWord.length; i++){
        underScore.push("_");
    var word = document.getElementById("currentWord");
    word.innerHTML = underScore;
    answerupdate = underScore;
}


// Get user guess

document.onkeyup = function(event){
    var userGuess = event.key;
    var matched = false;
    for (let j = 0; j < ranWord.length; j++){
        var char = ranWord[j];
        if(char == userGuess) {
            matched = true;
            answerupdate[j] = userGuess;
        }
    }

    if (matched == true){
        var nextword = document.getElementById("currentWord");
        var wins = document.getElementById ("ws")
        nextword.innerHTML = answerupdate;
    }

    if (answerupdate.join("") === ranWord){
        wins++;
        document.getElementById("ws").innerHTML = wins;
        console.log(wins);
    }

    else if (matched == false){
        var takeid = document.getElementById("guessedAlready");
        var guessleft = document.getElementById("guesses")
        var lose = document.getElementById("ls")
        takeid.innerHTML += event.key;
        guessesRemaining--;
        guessesRemaining.innerHTML = guessesRemaining;
        
        if (guessesRemaining == 0){
            var lost = document.getElementById("ls");
            console.log("reset");
            losses++;
            lost.innerHTML = losses;
        }
    }
}



