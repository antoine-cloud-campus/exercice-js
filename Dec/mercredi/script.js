const currentPage = window.location.pathname;

const baseUrl = 'https://swapi.dev/api/';

// HTML ELEMENTS
const defaultList = document.getElementById("planet-list");
const filteredList = document.getElementById("planet-list-filtered");
const selectElement = document.getElementById("planet-filter");
const defaultDiv = document.querySelector('.default-planet');
const selectedDiv = document.querySelector('.selected-planet');

// Index HTML
const infosRequired = ['people', 'vehicles', 'planets'];

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

function updatePlanetFilteredList(data, isFiltered) {

    data.forEach(planet => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${planet.name}</p><p>${planet.terrain}</p>`;

        li.addEventListener("click", () => {
            getPlanet(planet.url);
            defaultDiv.style.display = 'none'
            selectedDiv.style.display = 'flex'
        });

        if (!isFiltered) {
            defaultList.appendChild(li);
        } else {
            filteredList.appendChild(li);

        }
    });
}

async function createPlanetElement(data, filter) {

    // Store the planets array from the API
    let planetArray = data.results;

    // Apply different filters if needed
    if (filter == '1') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) <= 100000);
        updatePlanetFilteredList(planetArray, true)
    } else if (filter == '2') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) > 100000 && parseInt(planet.population) <= 100000000);
        updatePlanetFilteredList(planetArray, true)
    } else if (filter == '3') {
        planetArray = planetArray.filter((planet) => parseInt(planet.population) > 100000000);
        updatePlanetFilteredList(planetArray, true)
    } else {
        updatePlanetFilteredList(planetArray, false)
    }
}

async function getPlanets(url, filter) {
    try {
        // Fetch All Planets
        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            // Update the total planet count
            document.getElementById("total-planet").textContent = data.count;

            // Create each planet element in the list
            createPlanetElement(data, filter);
            url = data.next;
        }
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
}

// Filters Planet
selectElement.addEventListener('change', (e) => {
    // Si Aucun filtre, affiche la liste par défaut
    if (!e.target.value) {
        filteredList.style.display = "none"
        defaultList.style.display = "grid"
    } else {
        // Si nouveau filtre, reset la liste filtré puis l'affiche a la place de la liste par défaut
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

