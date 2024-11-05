// EXERCICE 1 Image: 
// récupérer 5 images avec la même extension (jpg, jpeg, png ou webp). et les rennomer de cette manière :
// image1.jpg image2.jpg image3.jpg image4.jpg image5.jpg
// 1 : afficher l'image1 dans la page web avec une balise <img src="" >
// 2 : afficher 5 fois l'image1 dans la page web avec une seule balise img src (une boucle)
// 3 : afficher les 5 images dans la page web toujours avec une seule balise img src dans votre code (indice : une boucle + ...)
// 4 : afficher les 5 images de manière aléatoire (il est possible d'avoir plusieurs fois la même image)

// function randomNumber() {
//     return Math.floor((Math.random() * 5) + 1)
// }

// let divExercice1 = document.getElementById('exercice-1')

// let i = 0;

// while (i < 5) {
//     let imageElement = `<img src="./image${randomNumber()}.jpg">`;
//     divExercice1.innerHTML += imageElement;
//     i++;
// }

//--------
// EXERCICE 2 Pyramide
// Faire un affichage du tableau suivant : [1, 2, 3, 4, 5, 6, 7]
// une ligne par chiffre et le chiffre doit être répété autant de fois que sa valeur
// Résultat attendu :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777

// let divExercice2 = document.getElementById('exercice-2');
// let arrayExercice2 = [1, 2, 3, 4, 5, 6, 7]
// arrayExercice2.forEach(e => {
//     let stringedNumber = e.toString()
//     divExercice2.innerHTML += stringedNumber.repeat(e) + '<br>'
// });


// Exercice 3 
// let body = document.getElementById('body')
// let i = 0;

// while (i <= 100) {
//     if (i == 50) {
//         body.innerHTML += "<span style='background-color:red'>" + i + "</span>";
//     } else {
//         body.innerHTML += "<span>" + i + "</span>";
//     }
//     i++;
// }

// Exercice 4
// let body = document.getElementById('body')
// let i = 0;

// while (i < 100) {
//     if (i % 10) {
//         body.innerHTML += "<span>" + i + "</span>";
//     } else {
//         body.innerHTML += "<span style='background-color:red'>" + i + "</span>";
//     }
//     i++;
// }

// Exercice 5
// let body = document.getElementById('body')
// let i = 0;

// while (i < 100) {
//     if (i % 10 || i == 0) {
//         body.innerHTML += "<span>" + i + "</span>";
//     } else {
//         body.innerHTML += "<br><span>" + i + "</span>";
//     }
//     i++;
// }

// Exercice 6
// let ul = document.getElementById('exercice-6')
// let i = 0;

// while (i < 10) {
//     ul.innerHTML += `<li>${i}</li>`
//     i++;
// }

// Exercice 7
// let ul = document.getElementById('exercice-6');
// let colors = ['red', 'cyan', 'green', 'yellow', 'lime', '#1e90ff', '#32cd32', '#8a2be2', '#4682b4', '#ff6347'];

// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * colors.length);
//     let li = document.createElement('li');
//     li.textContent = i;
//     li.style.backgroundColor = colors[randomNumber];
//     ul.appendChild(li);
// }

// Exercice 8
// const table = document.getElementById('numberTable');
// let colors = ['red', 'cyan', 'green', 'yellow', 'lime', '#1e90ff', '#32cd32', '#8a2be2', '#4682b4', '#ff6347'];

// for (let i = 0; i < 10; i++) {
//     const row = document.createElement('tr');
//     for (let j = 0; j < 10; j++) {
//         const cell = document.createElement('td');
//         let number = i * 10 + j;
//         cell.textContent = number;

//         cell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }

// Exercice 8.2
const table = document.getElementById('numberTable');
let colors = ['red', 'cyan', 'green', 'yellow', 'lime', '#1e90ff', '#32cd32', '#8a2be2', '#4682b4', '#ff6347'];

function updateTable() {
    let columnColors = Array.from(colors, () => colors[Math.floor(Math.random() * colors.length)]);
    
    table.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            let number = i * 10 + j;

            cell.textContent = number;
            cell.style.backgroundColor = columnColors[j];


            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

setInterval(updateTable, 300);