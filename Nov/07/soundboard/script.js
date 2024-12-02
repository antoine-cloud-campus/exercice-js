function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}

// Son reçu de la DB avec leur nom initial
let soundData = [
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

// Fonction pour ajouter dynamiquement un bouton
function addButton(soundData, index) {
    const button = document.createElement('button');
    button.classList.add('sound-btn');
    button.setAttribute('data-sound', soundData.sound);
    button.setAttribute('data-key', keyAzertyBoard[index]);
    button.innerHTML = `${soundData.label}<br>${keyAzertyBoard[index].toUpperCase()}`;
    container.appendChild(button);
}

// Créer les boutons initiaux
soundData.forEach((data, index) => {
    addButton(data, index);
});

// Formulaire ajout musique
document.getElementById('add-sound-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('sound-file');
    const labelInput = document.getElementById('sound-label');

    const file = fileInput.files[0];
    const label = labelInput.value;

    if (file && label) {
        const newSound = URL.createObjectURL(file);
        const newSoundData = { sound: newSound, label: label };

        soundData.push(newSoundData);

        addButton(newSoundData, soundData.length - 1);

        fileInput.value = '';
        labelInput.value = '';
    }
});

// Délégation d'événements pour les boutons dynamiques
container.addEventListener('click', (event) => {
    const button = event.target.closest('.sound-btn');
    if (button) {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    }
});

// On key down event
document.addEventListener('keydown', (event) => {
    const button = Array.from(document.querySelectorAll('.sound-btn')).find(button => button.dataset.key === event.key.toLowerCase());

    if (button) {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    }
});
