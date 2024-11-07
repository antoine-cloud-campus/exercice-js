// Tableau d'objets produits
const produits = [
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
    console.log(prixMax)
    if (!isNaN(prixMax) && prixMax > 0) {
        produitsAffiches = produits.filter(p => p.prix <= prixMax);
        retournePremierePage()
        afficherProduits();
    } else {
        produitsAffiches = produits;
    }
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