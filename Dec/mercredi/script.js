const currentPage = window.location.pathname;

const baseUrl = 'https://swapi.dev/api/';

// Get Infos pour Index HTML

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

// Désolé ici c'est la merde je vais clean plus tard ptetre !
function getPlanets() {

    fetch(baseUrl + 'planets')
        .then(response => response.json())
        .then(data => {
            document.getElementById("total-planet").textContent = data.count;
            const totalPlanet = data.count;
            const totalPage = data.count / data.results.length;

            for (let i = 1; i <= totalPage; i++) {
                fetch(baseUrl + 'planets/?page=' + i)
                    .then(response => response.json())
                    .then(data => {
                        data.results.forEach(planet => {

                            const li = document.createElement("li");

                            li.innerHTML = `<p>${planet.name}</p><p>${planet.terrain}</p>`;

                            li.addEventListener("click", () => {
                                const defaultDiv = document.querySelector('.default-planet');
                                const selectedDiv = document.querySelector('.selected-planet');
                                defaultDiv.style.display = 'none';
                                getPlanet(planet.url)
                                selectedDiv.style.display = 'flex';
                            });

                            document.getElementById("planet-list").appendChild(li);
                        });
                    });
            }
        })
}

// A l'initialisation de la page

document.addEventListener('DOMContentLoaded', () => {

    if (currentPage.endsWith("index.html")) {
        getInfos('people');
        getInfos('planets');
        getInfos('vehicles');
    } else if (currentPage.endsWith("planets.html")) {
        getPlanets();
    }
});

