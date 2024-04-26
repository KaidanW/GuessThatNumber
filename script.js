// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

// Starting Alert Message
alert(`Welcome to Guess the Number! Click OK to begin`);

//Game restarts as long as the restartGame has a value of true
while(restartGame){


    rangeNum = prompt(`Please enter a number for the max range.`);
    rangeNum = parseInt(rangeNum);

    //Verifies the users entry for a range number is a number greater than one(All numbers positive and negative have a default boolean value of true, except for zero which has a value of false)
    while (rangeNum <= 1 || !range){
        rangeNum = prompt(`Please enter a number greater than 1`);
        rangeNum = parseInt(rangeNum);
    }
    
    //alert(rangeNum);
    
    //Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // alert(randomNum);

    //  :)
    attempts = parseInt(prompt(`Please enters a number of attempts allowed:`));


    // Verifies the users entry for number of attemps allowed is a number greater than zero and less than the range they set
    while (attempts < 1 || !attempts || attempts >= rangeNum){
        attempts = prompt(`Please enter a numbe from 1 ${rangeNum -1}`);
        attempts = parseInt(attempts);
    }

    //Ask user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left`);

    //Continue looping until the user guesses the correct number or runs out of attempts
    while (true){

        //Gives user the number if strict password is entered
        if (guess === `Mellon`){
            alert(`The number is ${randomNum}`);
        }

        //Tries to convert a users guess into a number
        guess = parseInt(guess)

        //
        while (!guess || guess < 1 || guess > rangeNum){
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}.`);
            guess = parseInt(guess)
        }

        //Removes an attempt
        attempts--;

        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break; 
        } else if (attempts === 0) {
            alert(`Sorry you are out of attempts :(\nThe Number was${randomNum}`);
            break;

            // Checks if user's guess was too low and prompts the user to guess again if so
        } else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);
            
        } else if (guess > randomNum){
            guess = prompt(`Too High. You have ${attempts} attempt(s) left.`);
            
        }

        // break;
    }

    //Prompts to see if the player wants to try again
    playAgain = prompt(`Would you like to play again? Y for yes. N for no`);

    //Loop continues until a valid response is entered
    while(true){

        //Checks if user's answer is no (N or n)
        if (playAgain.toUpperCase() === `N`){

            //Alerts uer the game is over and doesn't restart
            alert(`Thanks for playing!`);
            restartGame = false;
            break;

            //Checks if user's answer is yes (Y or y)
        } else if (playAgain.toUpperCase() === `Y`){
            break;

            //prompts user to enter a valid response and starts the loop again
        } else {
            playAgain = prompt(`Please enter Y or N`);
        }
    
        // break;
    }

    // break; 
}
