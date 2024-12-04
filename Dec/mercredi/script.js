const baseUrl = 'https://swapi.dev/api/'

function getInfos(option) {
    fetch(baseUrl + option)
        .then(response => response.json())
        .then(data => {
            document.getElementById(option).textContent = data.count;
        });
}

getInfos('people');
getInfos('planets');
getInfos('vehicles');

