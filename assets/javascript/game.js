//alert("Let's play a game.")

//var answer = 3;
//var guess = prompt("What's your guess?");

//for (i=0; i<27;i++){
    //if (answer == guess) {
        //alert("You guess correctly");
        //break;
    //} else {
        //guess = prompt("Wrong!! Try Again.");
    //}
//}

//-Generate a random letter between "a" and "z".
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

$('#letter').html(randLetter())
//-Record the turn number the player is on. Start it on 1.
//-Provide the player with a way to guess what the letter is.
//-Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
//-Next, check whether it is the correct letter.
//-If it is correct:
    //-Display congratulations message.
	//-Stop the player from being able to enter more guesses (this would mess the game up).
	//-Game automatically restarts the game.
//-If it is wrong and the player has turns left:
	//-Tell the player they are wrong.
	//-Allow them to enter another guess.
	//-Increment the turn number by 1.
//-If it is wrong and the player has no turns left:
	//-Tell the player it is game over.
	//-Stop the player from being able to enter more guesses (this would mess the game up).
	//-Game automatically restarts the game.
//-Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.