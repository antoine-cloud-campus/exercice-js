const currentPage = window.location.pathname;

const baseUrl = 'https://swapi.dev/api/';

// Index HTML
const infosRequired = ['people', 'vehicles', 'planets']

const defaultList = document.getElementById("planet-list");
const filteredList = document.getElementById("planet-list-filtered");
const selectElement = document.getElementById("planet-filter");
const defaultDiv = document.querySelector('.default-planet');
const selectedDiv = document.querySelector('.selected-planet');

function getInfos(option) {
    fetch(baseUrl + option)
        .then(response => response.json())
        .then(data => {
            document.getElementById(option).textContent = data.count;
        });
}

// Get Planets pour planet.html

function getPlanet(planetUrl) {

    fetch(planetUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("planet-population").textContent = data.population;
            document.getElementById("planet-diameter").textContent = data.diameter;
            document.getElementById("planet-climate").textContent = data.climate;
            document.getElementById("planet-gravity").textContent = data.population;
            document.getElementById("planet-terrain").textContent = data.terrain;
        })
}

function updatePlanetFilteredList(data) {

    data.forEach(planet => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${planet.name}</p><p>${planet.terrain}</p>`;

        li.addEventListener("click", () => {
            defaultDiv.style.display = 'none';
            getPlanet(planet.url);
            selectedDiv.style.display = 'flex';
        });

        filteredList.appendChild(li);
    });
}

async function createPlanetElement(data, filter) {

    let planetArray = data.results;

    if (filter == '1') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) <= 100000);
        updatePlanetFilteredList(planetArray)
    } else if (filter == '2') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) > 100000 && parseInt(planet.population) <= 100000000);
        updatePlanetFilteredList(planetArray)
    } else if (filter == '3') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) > 100000000);
        updatePlanetFilteredList(planetArray)
    } else {
        planetArray.forEach(planet => {
            const li = document.createElement("li");
            li.innerHTML = `<p>${planet.name}</p><p>${planet.terrain}</p>`;

            li.addEventListener("click", () => {
                defaultDiv.style.display = 'none';
                getPlanet(planet.url);
                selectedDiv.style.display = 'flex';
            });

            defaultList.appendChild(li);
        });
    }
}

async function getPlanets(url, filter) {
    try {
        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            document.getElementById("total-planet").textContent = data.count;
            createPlanetElement(data, filter);
            url = data.next;
        }
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
}

// Filters Planet

selectElement.addEventListener('change', (e) => {
    if (!e.target.value) {
        filteredList.style.display = "none"
        defaultList.style.display = "grid"
    } else {
        filteredList.innerHTML = '<ul class="grid" id="planet-list-filtered"></ul>';
        filteredList.style.display = "grid"
        defaultList.style.display = "none"
    }
    getPlanets(baseUrl + 'planets', e.target.value)
});

// A l'initialisation de la page

document.addEventListener('DOMContentLoaded', () => {

    if (currentPage.endsWith("index.html")) {
        infosRequired.forEach(info => {
            getInfos(info)
        });
    } else if (currentPage.endsWith("planets.html")) {
        getPlanets(baseUrl + 'planets');
    }
});

