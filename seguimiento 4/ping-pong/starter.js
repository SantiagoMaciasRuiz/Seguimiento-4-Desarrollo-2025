const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playtoSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

function endGame(winnerDisplay, loserDisplay) {
    isGameOver = true;
    winnerDisplay.classList.add('has-text-success');
    loserDisplay.classList.add('has-text-danger');
}

function updateScores(player, opponent, playerDisplay, opponentDisplay) {
    if (isGameOver || winningScore === 0) return;

    player++;
    if (player === winningScore) {
        endGame(playerDisplay, opponentDisplay);
    }
    playerDisplay.textContent = player;
    return player;
}

p1Button.addEventListener('click', () => {
    if (winningScore === 0) {
        alert("Primero selecciona el número de puntos para jugar");
        return;
    }
    p1Score = updateScores(p1Score, p2Score, p1Display, p2Display);
});

p2Button.addEventListener('click', () => {
    if (winningScore === 0) {
        alert("Primero selecciona el número de puntos para jugar");
        return;
    }
    p2Score = updateScores(p2Score, p1Score, p2Display, p1Display);
});

playtoSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    if (!playtoSelect.value) {
        winningScore = 0;
    }
}
