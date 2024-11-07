const colors = ['#FF5733', '#33FF57', '#3357FF', '#F9E800', '#8E44AD', '#1ABC9C'];

document.addEventListener('click', function (event) {

    // Récupere la position du click
    const posX = event.pageX;
    const posY = event.pageY;

    // Générer une taille aléatoire entre 50 et 150 pixels
    const size = Math.floor(Math.random() * 101) + 50;

    // Créer le cercle 
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');
    circleDiv.style.position = 'absolute';
    circleDiv.style.width = `${size}px`;
    circleDiv.style.height = `${size}px`;
    circleDiv.style.left = `${posX - size / 2}px`;
    circleDiv.style.top = `${posY - size / 2}px`;
    circleDiv.style.opacity = '1';
    circleDiv.style.borderRadius = '50%';
    circleDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    circleDiv.style.transition = '1s';


    // Ajouter le div dans la page
    document.body.appendChild(circleDiv);

    // Selectionne le dernier cercle et le fait disparaitre une fois le bas de window atteint
    const pageHeight = window.innerHeight;
    
    setTimeout(() => {
        circleDiv.style.top = `${pageHeight - size}px`;
    }, 0);

    circleDiv.addEventListener('transitionend', function () {
        circleDiv.style.opacity = 0;
        circleDiv.addEventListener('transitionend', function () {
            circleDiv.remove();
        });
    });
});
