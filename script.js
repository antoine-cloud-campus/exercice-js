let tasks = [
    {
        title: 'Réunion avec le client',
        statut: 'Validée',
        categorie: 'Travail',
        description: 'Discuter des nouvelles fonctionnalités du projet.',
        destinataire: 'Alice'
    },
    {
        title: 'Faire les courses',
        statut: 'A faire',
        categorie: 'Personnel',
        description: 'Acheter des légumes et des fruits.',
        destinataire: 'Bob'
    },
    {
        title: 'Réviser le code de la fonctionnalité X',
        statut: 'En cours',
        categorie: 'Travail',
        description: 'Améliorer le code et corriger les bugs sur la fonctionnalité X.',
        destinataire: 'Charlie'
    },
    {
        title: 'Créer la maquette pour l\'application mobile',
        statut: 'En validation',
        categorie: 'Travail',
        description: 'Concevoir l\'interface utilisateur pour l\'application mobile.',
        destinataire: 'David'
    },
    {
        title: 'Organiser le planning des vacances',
        statut: 'A faire',
        categorie: 'Personnel',
        description: 'Planifier et réserver les vacances d\'été.',
        destinataire: 'Eva'
    },
    {
        title: 'Analyser les résultats de la campagne publicitaire',
        statut: 'Urgent',
        categorie: 'Travail',
        description: 'Analyser les performances des publicités Facebook et Google.',
        destinataire: 'Frank'
    },
    {
        title: 'Faire la mise à jour du site web',
        statut: 'A faire',
        categorie: 'Travail',
        description: 'Mettre à jour le contenu et les images du site web.',
        destinataire: 'Grace'
    },
    {
        title: 'Envoyer les rapports mensuels',
        statut: 'En cours',
        categorie: 'Travail',
        description: 'Compiler et envoyer les rapports financiers du mois.',
        destinataire: 'Henry'
    },
    {
        title: 'Faire un suivi des objectifs personnels',
        statut: 'En attente',
        categorie: 'Personnel',
        description: 'Vérifier les objectifs de l\'année et voir les progrès réalisés.',
        destinataire: 'Irene'
    },
    {
        title: 'Réunion pour définir les priorités du projet',
        statut: 'Validée',
        categorie: 'Travail',
        description: 'Discuter des priorités et définir les tâches à réaliser pour le projet.',
        destinataire: 'Jack'
    }
];

let statuts = ["Validée", "En validation", "En cours", "Urgent", "En attente", "A faire"];
let categories = ["Travail", "Personnel"];

// Fonction pour mettre à jour les options des status
function populateOptions(elementId, type) {
    const selectElement = document.getElementById(elementId);
    // Option par défaut
    selectElement.innerHTML = `<option value="">${type == statuts ? 'Statuts' : 'Catégories'}</option>`;

    type.forEach(statut => {
        const option = document.createElement('option');
        option.value = statut;
        option.textContent = statut;
        selectElement.appendChild(option);
    })

}

// Fonction pour mettre à jour les options du filtre destinataire
function populateDestinataireOptions() {
    const filterDestinataire = document.getElementById('filterDestinataire');
    const destinataires = [...new Set(tasks.map(task => task.destinataire))];

    // Option par défaut
    filterDestinataire.innerHTML = '<option value="">Filtrer par destinataire</option>';

    destinataires.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest;
        option.textContent = dest;
        filterDestinataire.appendChild(option);
    });
}

// Fonction pour afficher les tâches dans le tableau
function displayTasks() {
    const tableBody = document.querySelector('#tasksTable tbody');
    tableBody.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.statut}</td>
            <td>${task.categorie}</td>
            <td>${task.description}</td>
            <td>${task.destinataire}</td>
        `;
        tableBody.appendChild(row);
    });

    populateDestinataireOptions();
    populateOptions('filterCategorie', categories)
    populateOptions('categorie', categories);
    populateOptions('filterStatut', statuts);
    populateOptions('statut', statuts);
}

// Fonction pour ajouter une tâche
function addTask(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const statut = document.getElementById('statut').value;
    const categorie = document.getElementById('categorie').value;
    const description = document.getElementById('description').value;
    const destinataire = document.getElementById('destinataire').value;

    if (!title || !statut || !categorie || !description || !destinataire) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    const newTask = { title, statut, categorie, description, destinataire };

    tasks.push(newTask);
    
    displayTasks();
    fermerModale();
    
    document.getElementById('taskForm').reset();
}

// Fonction pour filtrer les tâches
function filterTasks() {
    const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    const filterDestinataire = document.getElementById('filterDestinataire').value;
    const filterStatut = document.getElementById('filterStatut').value;
    const filterCategorie = document.getElementById('filterCategorie').value;

    const filteredTasks = tasks.filter(task => {
        const matchesTitle = task.title.toLowerCase().includes(searchTitle) || task.description.toLowerCase().includes(searchTitle);
        const matchesDestinataire = !filterDestinataire || task.destinataire === filterDestinataire;
        const matchesStatut = !filterStatut || task.statut === filterStatut;
        const matchesCategorie = !filterCategorie || task.categorie === filterCategorie;

        return matchesTitle && matchesDestinataire && matchesStatut && matchesCategorie;
    });

    const tableBody = document.querySelector('#tasksTable tbody');
    tableBody.innerHTML = '';
    filteredTasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.statut}</td>
            <td>${task.categorie}</td>
            <td>${task.description}</td>
            <td>${task.destinataire}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonctions Modale
function ouvrirModale() {
    const modal = document.getElementById("modal");
    modal.showModal();

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            fermerModale();
        }
    });
}

function fermerModale() {
    const modal = document.getElementById("modal");
    modal.close();
}

// Initialiser l'affichage des tâches
displayTasks();