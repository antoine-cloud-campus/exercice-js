function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}

const buttons = document.querySelectorAll('.sound-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toLowerCase();
    const button = Array.from(buttons).find(button => button.dataset.key.toLowerCase() === keyPressed);
    if (button) {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    }
});
