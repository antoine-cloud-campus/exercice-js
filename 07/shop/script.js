// Tableau d'objets produits
let produits = [
    { titre: 'T-shirt Homme Coton', image: 'tch.jpg', alt: 'Image T-shirt 1', prix: 9, categorie: 't-shirt', attributs: ['coton', 'homme'], note: 1 },
    { titre: 'T-shirt Femme Coton', image: 'tcf.jpg', alt: 'Image T-shirt 2', prix: 9, categorie: 't-shirt', attributs: ['coton', 'femme'], note: 1 },

    { titre: 'T-shirt Homme Polyester', image: 'tph.jpg', alt: 'Image T-shirt 3', prix: 19, categorie: 't-shirt', attributs: ['polyester', 'homme'], note: 2 },
    { titre: 'T-shirt Femme Polyester', image: 'tpf.jpg', alt: 'Image T-shirt 4', prix: 20, categorie: 't-shirt', attributs: ['polyester', 'femme'], note: 2 },

    { titre: 'Chemise Homme Coton', image: 'cch.jpg', alt: 'Image Chemise 1', prix: 35, categorie: 'chemise', attributs: ['coton', 'homme'], note: 2 },
    { titre: 'Chemise Femme Coton', image: 'ccf.jpg', alt: 'Image Chemise 2', prix: 50, categorie: 'chemise', attributs: ['coton', 'femme'], note: 4 },

    { titre: 'Chemise Homme Polyester', image: 'cph.jpg', alt: 'Image Chemise 3', prix: 100, categorie: 'chemise', attributs: ['polyester', 'homme'], note: 5 },
    { titre: 'Chemise Femme Polyester', image: 'cpf.jpg', alt: 'Image Chemise 4', prix: 999.99, categorie: 'chemise', attributs: ['polyester', 'femme'], note: 5 },
];

// Variables pour la pagination et les filtres
let produitsAffiches = produits;
let produitsParPage = 6;
let pageCourante = 1;

function retournePremierePage() {
    pageCourante = 1;
}

// Filtrer les produits par catégorie
function filtrerParCategorie(categorie) {
    produitsAffiches = categorie ? produits.filter(p => p.categorie === categorie) : produits;
    retournePremierePage();
    afficherProduits();
}

// Filtrer les produits par attribut
function filtrerParAttribut(attribut) {
    produitsAffiches = attribut ? produits.filter(p => p.attributs.includes(attribut)) : produits;
    retournePremierePage()
    afficherProduits();
}

// Recherche par nom, catégorie ou attribut
function rechercherProduits() {
    const recherche = document.getElementById("search-input").value.toLowerCase();
    if (recherche.length >= 3) {
        produitsAffiches = produits.filter(p =>
            p.titre.toLowerCase().includes(recherche) ||
            p.categorie.toLowerCase().includes(recherche) ||
            p.attributs.some(attr => attr.toLowerCase().includes(recherche))
        );
    } else {
        produitsAffiches = produits;
    }
    retournePremierePage()
    afficherProduits();
}

// Filtrer par prix
function filtrerParPrix() {
    const prixMax = parseFloat(document.getElementById("price-input").value);
    if (isNaN(prixMax) || prixMax < 0 || !prixMax) {
        produitsAffiches = produits;
    } else {
        produitsAffiches = produits.filter(p => p.prix <= prixMax);
    }
    retournePremierePage()
    afficherProduits();
}

// Affiche les liens de pagination
function afficherPagination() {
    const pagination = document.getElementById("pagination");
    const nombrePages = Math.ceil(produitsAffiches.length / produitsParPage);

    pagination.innerHTML = '';
    for (let i = 1; i <= nombrePages; i++) {
        pagination.innerHTML += `<a href="#" onclick="changerPage(${i})">${i}</a>`;
    }
}

// Changer de page
function changerPage(page) {
    pageCourante = page;
    afficherProduits();
}

// Affiche les catégories uniques dans la barre latérale
function afficherCategories() {
    const categoriesList = document.getElementById("categories-list");
    // Créer un tableau contenant toutes les catégories de chaque produits (Unique)
    const categories = [...new Set(produits.map(p => p.categorie))];
    categoriesList.innerHTML = '<li><a href="#" onclick="filtrerParCategorie()">Voir tous</a></li>';
    categories.forEach(categorie => {
        categoriesList.innerHTML += `<li><a href="#" onclick="filtrerParCategorie('${categorie}')">${categorie}</a></li>`;
    });
}
// Affiche les produits filtrés et paginés
function afficherProduits() {
    const productList = document.getElementById("product-list");
    const debutIndex = (pageCourante - 1) * produitsParPage;
    const produitsPage = produitsAffiches.slice(debutIndex, debutIndex + produitsParPage);

    productList.innerHTML = '';
    produitsPage.forEach(produit => {
        productList.innerHTML += `
            <div class="product-item">
                <div class='img-container'>
                    <img src="${produit.image}" alt="${produit.alt}">
                </div>    
                <h3>${produit.titre}</h3>
                <p>Prix: ${produit.prix}€</p>
                <p>Catégorie: <a href="#" onclick="filtrerParCategorie('${produit.categorie}')">${produit.categorie}</a></p>
                <p>Attributs: ${produit.attributs.map(attr => `<a href="#" onclick="filtrerParAttribut('${attr}')">${attr}</a>`).join(', ')}</p>
                <p>Note: ${Array.from({ length: 5 }, (_, i) => `<i class="${i < produit.note ? 'fa-solid fa-star' : 'fa-regular fa-star'}"></i>`).join('')}</p>
            </div>
        `;
    });
    afficherPagination();
}
// Ajouter les événements de recherche et de filtre
function ajouterEvenements() {
    document.getElementById("search-input").addEventListener("input", rechercherProduits);
    document.getElementById("price-input").addEventListener("input", filtrerParPrix);
}

// Initialiser la page
document.addEventListener("DOMContentLoaded", () => {
    afficherCategories();
    afficherProduits();
    ajouterEvenements();
});

// "Back-End"
let celluleSelectionnee = null;

function ouvrirModale() {
    const modal = document.getElementById("product-modal");
    modal.showModal();
    const tbody = document.getElementById("product-table-body");
    tbody.innerHTML = produits.map(produit => `
        <tr>
            <td onclick="selectionnerCellule(this)">${produit.titre}</td>
            <td onclick="selectionnerCellule(this)">${produit.prix}</td>
            <td onclick="selectionnerCellule(this)">${produit.categorie}</td>
            <td onclick="selectionnerCellule(this)">${produit.attributs.join(", ")}</td>
            <td onclick="selectionnerCellule(this)">${produit.note}</td>
        </tr>
    `).join("");

    ajouterDoubleClick();

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            fermerModale();
        }
    });
}

function fermerModale() {
    const modal = document.getElementById("product-modal");
    modal.close();
}

function selectionnerCellule(cellule) {
    if (celluleSelectionnee) {
        celluleSelectionnee.classList.remove("selected");
    }
    celluleSelectionnee.classList.add("selected");

    celluleSelectionnee = cellule;
}

function ajouterDoubleClick() {
    const cellules = document.querySelectorAll("#product-table td");
    cellules.forEach(cellule => {
        cellule.addEventListener("dblclick", () => rendreCelluleEditable(cellule));
    });
}
// Gestion Du déplacement via les flèches dans le tableau
document.addEventListener("keydown", function (event) {
    if (!celluleSelectionnee) return;

    let row = celluleSelectionnee.parentElement;
    let cellIndex = Array.from(row.children).indexOf(celluleSelectionnee);
    let nextCell = null;

    switch (event.key) {
        case "ArrowRight":
            nextCell = row.children[cellIndex + 1] || row.children[0];
            break;
        case "ArrowLeft":
            nextCell = row.children[cellIndex - 1] || row.children[row.children.length - 1];
            break;
        case "ArrowDown":
            let nextRow = row.nextElementSibling;
            if (nextRow) nextCell = nextRow.children[cellIndex];
            break;
        case "ArrowUp":
            let previousRow = row.previousElementSibling;
            if (previousRow) nextCell = previousRow.children[cellIndex];
            break;
    }

    if (nextCell) selectionnerCellule(nextCell);
});

function rendreCelluleEditable(cellule) {

    // Récupère la position de la Cellule & Sa valeur
    let row = cellule.parentElement;
    let rowIndex = Array.from(row.parentElement.children).indexOf(row);
    let cellIndex = Array.from(row.children).indexOf(cellule);
    let initialValue = cellule.textContent;
    let input;

    // Créer l'input en fonction de la celulle (text / Number / select)
    function createInput(type) {
        input = document.createElement(type);
        input.value = initialValue;
        return input;
    };

    // Créer l'input adapté pour la cellule
    switch (cellIndex) {
        case 0: // Titre
            input = createInput("input", { type: "text" });
            break;
        case 1: // Prix
            input = createInput("input", { type: "number" });
            input.value = parseFloat(initialValue);
            break;
        case 2: // Catégorie
            input = document.createElement("select");
            ["t-shirt", "chemise"].forEach(optionValue => {
                let option = document.createElement("option");
                option.value = optionValue;
                option.text = optionValue;
                if (optionValue === initialValue) option.selected = true;
                input.appendChild(option);
            });
            break;
        case 3: // Attributs
            input = createInput("input", { type: "text" });
            break;
        case 4: // Note
            input = createInput("input", { type: "number", min: "1", max: "5" });
            input.value = parseInt(initialValue);
            break;
    }

    // Affiche l'input dans la cellule
    cellule.innerHTML = "";
    cellule.appendChild(input);
    input.focus();

    // Enregistre la valeur on Enter / Leave
    function saveValue() {
        enregistrerNouvelleValeur(cellule, input, rowIndex, cellIndex);
    };

    input.addEventListener("blur", saveValue);
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") saveValue();
    });
}

// Enregistre la nouvelle valeur dans le tableau
function enregistrerNouvelleValeur(cellule, input, rowIndex, cellIndex) {
    let newValue = input.value;

    cellule.textContent = newValue;

    switch (cellIndex) {
        case 0:
            produits[rowIndex].titre = newValue;
            break;
        case 1:
            produits[rowIndex].prix = parseFloat(newValue).toFixed(2);
            break;
        case 2:
            produits[rowIndex].categorie = newValue;
            break;
        case 3:
            produits[rowIndex].attributs = newValue.split(",").map(attr => attr.trim());
            break;
        case 4:
            produits[rowIndex].note = parseInt(newValue);
            break;
    }

    celluleSelectionnee = null;
    afficherProduits()
}
