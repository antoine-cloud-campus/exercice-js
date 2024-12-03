const breedRaceArray = [];
const select = document.querySelector('.exercice-1 select');

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => {
        return response.json();
    })
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




document.querySelector('.exercice-1 button').addEventListener('click', () => {
    let selectedRace = select.value.replace(/ /g, '/');

    if (selectedRace === 'all') {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(response => response.json())
            .then(data => {
                const img = document.querySelector('#dog-img');
                img.src = data.message;
            })
    } else {
        fetch(`https://dog.ceo/api/breed/${selectedRace}/images/random`)
            .then(response => response.json())
            .then(data => {
                const img = document.querySelector('#dog-img');
                img.src = data.message;
            })
    }
});