// Variables
const select = document.querySelector('.exercice-1 select');

// Functions
function getDogList() {
    const breedRaceArray = [];

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            for (const [breed, races] of Object.entries(data.message)) {
                if (races.length === 0) {
                    breedRaceArray.push(breed);
                } else {
                    for (const race of races) {
                        breedRaceArray.push(`${breed} ${race}`);
                    }
                }
            }
            breedRaceArray.forEach(race => {
                const newOption = document.createElement("option");
                newOption.textContent = race;
                newOption.value = race;
                select.appendChild(newOption)
            });
        })
}

// Event Listeners
document.querySelector('.exercice-1 button').addEventListener('click', () => {
    const selectedRace = select.value.replace(/ /g, '/');
    const url = selectedRace === 'all' ? 'https://dog.ceo/api/breeds/image/random' : `https://dog.ceo/api/breed/${selectedRace}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#dog-img').src = data.message;
        });
});

document.querySelector('#dog-img').addEventListener('click', () => {
    const img = document.querySelector('#dog-img');
    const imgCopy = img.cloneNode(true);
    imgCopy.id = "";
    const savedImg = document.querySelector('.saved-img');
    savedImg.appendChild(imgCopy);
});

document.addEventListener('DOMContentLoaded',
    getDogList()
);