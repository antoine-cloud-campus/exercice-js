const baseUrl = 'https://swapi.dev/api/';
const currentPage = window.location.pathname;

// Index HTML

function getInfos(option) {
    fetch(baseUrl + option)
        .then(response => response.json())
        .then(data => {
            document.getElementById(option).textContent = data.count;
        });
}

// Planets HTML

function getPlanets() {

    fetch(baseUrl + 'planets')
        .then(response => response.json())
        .then(data => {
            document.getElementById("total-planet").textContent = data.count;
            const totalPlanet = data.count;
            const totalPage = data.count / data.results.length;
            for (let i = 1; i < totalPage; i++) {
                fetch(baseUrl + 'planets/?page=' + i)
                    .then(response => response.json())
                    .then(data => {
                        data.results.forEach(planet => {
                            document.getElementById("planet-list").innerHTML += `<li><p>${planet.name}</p><p>${planet.terrain}</p></li>`;
                        });
                    });
            }
        })
}

document.addEventListener('DOMContentLoaded', () => {
    if (currentPage.endsWith("index.html")) {
        getInfos('people');
        getInfos('planets');
        getInfos('vehicles');
    } else if (currentPage.endsWith("planets.html")) {
        getPlanets();
    }
});

