const currentPage = window.location.pathname;

const baseUrl = 'https://swapi.dev/api/';

// Index HTML
const infosRequired = ['people', 'vehicles', 'planets']

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

async function createPlanetElement(data) {

    const defaultDiv = document.querySelector('.default-planet');
    const selectedDiv = document.querySelector('.selected-planet');

    data.results.forEach(planet => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${planet.name}</p><p>${planet.terrain}</p>`;

        li.addEventListener("click", () => {
            defaultDiv.style.display = 'none';
            getPlanet(planet.url);
            selectedDiv.style.display = 'flex';
        });

        document.getElementById("planet-list").appendChild(li);
    });
}

async function getPlanets(url) {
    try {
        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            document.getElementById("total-planet").textContent = data.count;
            createPlanetElement(data);
            url = data.next;
        }
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
}

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

