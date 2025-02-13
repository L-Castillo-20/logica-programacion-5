
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = [];

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    const userGuess = parseInt(guessInput.value);

  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Error: Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    attempts.push(userGuess);
  
    if (userGuess === secretNumber) {
        message.textContent = "Felicidades, adivinaste el número secreto!";
        attemptsDisplay.textContent = "Números introducidos: " + attempts.join(', ');
    } else {
        message.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        guessInput.value = ''; 
        guessInput.focus(); 
    }
}