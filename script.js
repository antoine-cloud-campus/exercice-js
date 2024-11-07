let text = document.getElementById('text')

function startTimer() {
    let seconds = parseInt(prompt('Donnez un nombre de seconde pour le timer'))
    while (isNaN(seconds) || seconds <= 0) {
        seconds = parseInt(prompt("Veuillez entrer un nombre de secondes valide."));
    }

    displayTime(seconds);

    let countdownInterval = setInterval(() => {
        seconds--;
        displayTime(seconds);
        if (seconds == 551) {
            const gif = document.querySelector('.gif-container');
            gif.style.display = 'block';
            setTimeout(() => {
                gif.style.display = 'none';
            }, 2500);
        }
        if (seconds <= 0) {
            const gifEnd = document.querySelector('.gif-end');
            gifEnd.style.display = 'block';
            setTimeout(() => {
                gif.style.display = 'none';
            }, 2500);
            clearInterval(countdownInterval);
            text.style.display = 'block';
            text.textContent = "Voilà c'est fini";
            displayTime(0)
        }
    }, 1000);
}

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('timerDisplay').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

startTimer();