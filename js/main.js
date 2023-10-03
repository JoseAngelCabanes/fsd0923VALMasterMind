// Combinación secreta generada aleatoriamente
const secretCode = generateRandomCode();
let attempts = 0;

// Función para generar una combinación secreta aleatoria
function generateRandomCode() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        code.push(colors[randomIndex]);
    }
    return code;
}

// Función para comprobar la adivinanza del jugador
function checkGuess() {
    attempts++;

    const guess = document.querySelectorAll('#guess .color');
    const guessColors = Array.from(guess).map(color => color.style.backgroundColor);

    if (JSON.stringify(guessColors) === JSON.stringify(secretCode)) {
        alert(`¡Felicidades! Has adivinado la combinación secreta en ${attempts} intentos.`);
    } else {
        alert('Intenta de nuevo.');
    }

    // Reiniciar la adivinanza
    resetGuess();
    document.getElementById('attempts').textContent = attempts;
}

// Función para reiniciar la adivinanza
function resetGuess() {
    const guess = document.querySelectorAll('#guess .color');
    guess.forEach(color => color.style.backgroundColor = 'white');
}

// Agregar eventos de cambio de color al color picker
const colorPickerInputs = document.querySelectorAll('.color-picker');
colorPickerInputs.forEach(input => {
    input.addEventListener('input', function () {
        const color = this.value;
        const emptySlot = document.querySelector('#guess .color[style*="background-color: white"]');
        if (emptySlot) {
            emptySlot.style.backgroundColor = color;
        }
    });
});

// Agregar evento de clic al botón de comprobar
const checkButton = document.getElementById('check');
checkButton.addEventListener('click', checkGuess);
