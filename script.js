// How the computer picks at random out of the three choices
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };
  // Scoreboard variables = 0
var wins = 0;
var losses = 0;
var draws = 0;

// Choices and conquences
while   (true)  {
    if  (window.confirm("Do you want to play again?"))  {
        var player = window.prompt("For Rock type R, For Paper type P, for Scissors type S.");

        var opponent = random(1, 3);

        // How the choice "rock" functions when picking the choice of rock
        if  (player.toLowerCase() == "r")   {
            if  (opponent == 1) {
                window.alert("You're opponent chose Rock, its a draw!");
                draws++;

            }   else if (opponent == 2) {
                window.alert("You're opponent chose Paper, you've lost!");
                losses++;

            }   else if (opponent == 3) {
                window.alert("You're opponent chose Scissors, you've won!");
                wins++;

            };

            // How the choice "paper" functions when picking the choice of paper
        }   else if (player.toLowerCase() == "p")   {
            if  (opponent == 1) {
                window.alert("You're opponent chose Rock, you've won!");
                wins++;

            }   else if (opponent == 2) {
                window.alert("You're opponent chose Paper, its a draw!");
                draws++;

            }   else if (opponent == 3) {
                window.alert("You're opponent chose Scissors, you've lost!");
                losses++;

            };
            
            // How the choice "scissors" functions when picking the choice of paper
        }   else if (player.toLowerCase() == "s")   {
            if  (opponent == 1) {
                window.alert("You're opponent chose Rock, you've lost!");
                losses++;

            }   else if (opponent == 2) {
                window.alert("You're opponent chose Paper, you've won!");
                wins++;

            }   else if (opponent == 3) {
                window.alert("You're opponent chose Scissors, its a draw!");
                draws++;

            };

            // If you did not pick any of the choices given, then window promppt will restart
        }   else    {
            window.alert("Please pick Rock, Paper, or Scissors.")
        }

        // This shows current score 
        window.alert("Here is the score: \nwins: " + wins + "\nlosses: " + losses + "\ndraws: " + draws);

        // Ending the game session
    }   else    {
        window.alert("Thanks for playing!");
        break;

    };



};