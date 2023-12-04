// function userChoice(userSelection){
//     //create a function to handle users choices

//     const choices = ['rock', 'paper', 'scissors'];
//     //create an array of possible choices for the  computer 

//     const computerSelection = choices[Math.floor(Math.random() * 3)];
//     //computers random choice

//     alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
//     //displaying the choices values on a pop up

//     const result = determineWinner(userSelection, computerSelection);
//     alert(result);

// }
// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return "It's a tie!";
//     } else if (
//         (userChoice === 'rock' && computerChoice === 'scissors') ||
//         (userChoice === 'paper' && computerChoice === 'rock') ||
//         (userChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         return "You win!";
//     } else {
//         return "Computer wins!";
//     }
// }






    // let userWins = 0;
    // let computerWins = 0;
    // let roundsPlayed = 0;
    // const maxRounds = 3;

    // function userChoice(userSelection) {
    //     const choices = ['rock', 'paper', 'scissors'];
    //     const computerSelection = choices[Math.floor(Math.random() * 3)];

    //     alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);

    //     const result = determineWinner(userSelection, computerSelection);
    //     alert(result);

    //     updateScores(result);

    //     roundsPlayed++;

    //     if (roundsPlayed === maxRounds) {
    //         determineOverallWinner();
    //         resetGame();
    //     }
    // }

    // function determineWinner(userChoice, computerChoice) {
    //     if (userChoice === computerChoice) {
    //         return "It's a tie!";
    //     } else if (
    //         (userChoice === 'rock' && computerChoice === 'scissors') ||
    //         (userChoice === 'paper' && computerChoice === 'rock') ||
    //         (userChoice === 'scissors' && computerChoice === 'paper')
    //     ) {
    //         userWins++;
    //         return "You win!";
    //     } else {
    //         computerWins++;
    //         return "Computer wins!";
    //     }
    // }

    // function updateScores(result) {
    //     if (result.includes("win")) {
    //         // Only update scores if there is a winner (user or computer)
    //         console.log("Updating scores");
    //     }
    // }

    // function determineOverallWinner() {
    //     if (userWins > computerWins) {
    //         alert("You are the overall winner!");
    //     } else if (userWins < computerWins) {
    //         alert("Computer is the overall winner!");
    //     } else {
    //         alert("It's a tie in the overall game!");
    //     }
    // }

    // function resetGame() {
    //     userWins = 0;
    //     computerWins = 0;
    //     roundsPlayed = 0;
    // }




     // Initialize variables to keep track of scores and rounds
     let userWins = 0;
     let computerWins = 0;
     let roundsPlayed = 0;
     const maxRounds = 3;
 
     // Function called when the user makes a choice
     function userChoice(userSelection) {
         const choices = ['rock', 'paper', 'scissors'];
         // Generate a random choice for the computer
         const computerSelection = choices[Math.floor(Math.random() * 3)];
 
         // Display user and computer choices
         alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
 
         // Determine the winner of the round and display the result
         const result = determineWinner(userSelection, computerSelection);
         alert(result);
 
         // Update scores based on the result
         updateScores(result);
 
         // Increment the number of rounds played
         roundsPlayed++;
 
         // Check if the maximum number of rounds has been reached
         if (roundsPlayed === maxRounds) {
             // Determine the overall winner and reset the game
             determineOverallWinner();
             resetGame();
         }
     }
 
     // Function to determine the winner of a round
     function determineWinner(userChoice, computerChoice) {
         if (userChoice === computerChoice) {
             return "It's a tie!";
         } else if (
             (userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')
         ) {
             // User wins
             userWins++;
             return "You win!";
         } else {
             // Computer wins
             computerWins++;
             return "Computer wins!";
         }
     }
 
     // Function to update scores based on the result of a round
     function updateScores(result) {
         // Only update scores if there is a winner (user or computer)
         if (result.includes("win")) {
             console.log("Updating scores");
         }
     }
 
     // Function to determine the overall winner after all rounds
     function determineOverallWinner() {
         if (userWins > computerWins) {
             alert("You are the overall winner!");
         } else if (userWins < computerWins) {
             alert("Computer is the overall winner!");
         } else {
             alert("It's a tie in the overall game!");
         }
     }
 
     // Function to reset scores and rounds for a new game
     function resetGame() {
         userWins = 0;
         computerWins = 0;
         roundsPlayed = 0;
     }
