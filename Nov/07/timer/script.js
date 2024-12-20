const text = document.getElementById('text')

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
            text.textContent = "Est ce que c'est bon pour vous ?";
            displayTime(0)
        }
    }, 1000);
}

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('timerDisplay').textContent =
        `${setPadStart(hours)}:${setPadStart(minutes)}:${setPadStart(secs)}`;
}

function setPadStart(time) {
    return String(time).padStart(2, '0')
}

startTimer();