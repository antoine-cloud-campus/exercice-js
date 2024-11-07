function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}
// Son recu de la DB avec leur nom
const soundData = [
    { sound: 'sounds_crash.mp3', label: 'Crash' },
    { sound: 'sounds_kick-bass.mp3', label: 'Kick Bass' },
    { sound: 'sounds_snare.mp3', label: 'Snare' },
    { sound: 'sounds_tom-1.mp3', label: 'Tom 1' },
    { sound: 'sounds_tom-2.mp3', label: 'Tom 2' },
    { sound: 'sounds_tom-3.mp3', label: 'Tom 3' },
    { sound: 'sounds_tom-4.mp3', label: 'Tom 4' },
    { sound: 'secret.mp3', label: '???' }
];
// Touches du clavier azerty dans l'ordre
const keyAzertyBoard = ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'w', 'x', 'c', 'v', 'b', 'n'];

const container = document.getElementById('container');
// Créer chaque boutton leut attribue 1 son et 1 touche dans l'ordre
soundData.forEach((data, index) => {
    const button = document.createElement('button');
    button.classList.add('sound-btn');
    button.setAttribute('data-sound', data.sound);
    button.setAttribute('data-key', keyAzertyBoard[index]);  // Associer la touche en fonction de l'index
    button.innerHTML = `${data.label}<br>${keyAzertyBoard[index].toUpperCase()}`;
    container.appendChild(button);
});

const buttons = document.querySelectorAll('.sound-btn');

// on click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

// on key down event
document.addEventListener('keydown', (event) => {
    const button = Array.from(buttons).find(button => button.dataset.key === event.key.toLowerCase());

    if (button) {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    }
});
