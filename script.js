// Mettre en place un tableau contenant un ensemble de couleur
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F9E800', '#8E44AD', '#1ABC9C'];

document.addEventListener('click', function (event) {

    // On demande la position verticale et horizontal du click dans la page (event.pageX, event.pageY)
    const posX = event.pageX;
    const posY = event.pageY;

    // Générer une taille aléatoire entre 50 et 150 pixels
    const size = Math.floor(Math.random() * 101) + 50;

    // Créer le cercle 
    const newDiv = document.createElement('div');
    newDiv.classList.add('circle');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.left = `${posX - size / 2}px`;
    newDiv.style.top = `${posY - size / 2}px`;
    newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Ajouter le div dans la page
    document.body.appendChild(newDiv);

    // Selectionne le dernier cercle et le fait disparaitre une fois le bas de window atteint
    const lastDiv = document.querySelector('div:last-child');
    const pageHeight = window.innerHeight;
    setTimeout(() => {
        lastDiv.style.top = `${pageHeight - size}px`;
    }, 10);

    lastDiv.addEventListener('transitionend', function () {
        lastDiv.style.opacity = '0';
        setTimeout(() => {
            lastDiv.remove();
        }, 1000);
    });
});
