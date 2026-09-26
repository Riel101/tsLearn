let compGuess = Math.floor(Math.random() * 100) + 1
let userGuess = Number(prompt("Guess a nuber between 1 and 100: "))
let attempts = 0

do {
    if (isNaN(userGuess)) {
        console.log("Please enter a valid number.")
        continue
    }
    
    if (userGuess <= compGuess) {
        console.log("Your guess is too low. Try again.")
    } else if (userGuess >= compGuess) {
        console.log("Your guess is too high. Try again.")
    } else if (userGuess == compGuess) {
        console.log("You guessed the correct number!")
        break
    } 
    
    userGuess = Number(prompt("Guess a nuber between 1 and 100: "))
    attempts++
    
} while (attempts !== 7);

if (attempts === 7) {
    console.log("You have exceeded the maximum number of attempts. The correct number was " + compGuess)
}

