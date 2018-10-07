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

//Setting variables and zeroing counters (`var attempts` set to 9 yeilds 10 total attempts as numbering begins with zero)
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

//GENERATING THE COMPUTERS SECRET LETTER
//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to the nearest whole number by the Math.floor method. 
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//CAPTURING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
      var playerGuess = event.key;

      // HANDELING CORRECT GUESSES
      //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //HANDELING INCORRECT GUESSES
      //tests if players guess Does Not Equal ranLetter and decriments attempts by 1
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //HANDELING INCORRECT GUESSES - OUTPUT
      //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      //these statements write the values/scores generated to the HTML
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}