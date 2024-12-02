function createDivWithText(text, container) {
    const div = document.createElement('div');
    div.textContent = text;
    const cont = document.querySelector(container);
    cont.appendChild(div);
}

// Exercice 1
let dogs = ['Akita Inu', 'Bouvier bernois', 'Beagle'];
let countries = ["Japon", "Allemagne", "France", "Italie", "Pérou", "Russie"];

dogs.push("Berger Allemand", "Husky");
dogs.sort();

dogs = dogs.map((dog, i) => ({
    name: dog,
    nativeCountry: countries[i]
}))

dogs.forEach(dog => {
    createDivWithText("Le chien : " + dog.name + " ---- Vient de ce pays: " + dog.nativeCountry, ".exercice-1");
});

// Exercice 2
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    fullname() {
        return this.firstName + " " + this.lastName
    },
    isMajor() {
        return this.age >= 18;
    }
}

createDivWithText(user.isMajor() ? user.fullname() + " a " + user.age + " ans, il est Majeur" : user.fullname() + " a " + user.age + " ans, il n'est pas Majeur", ".exercice-2");

// Exercice 3
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

const actualYear = new Date().getFullYear();

const entrepreneurs70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
const entrepreneurs70FullNames = entrepreneurs70.map(entrepreneur => entrepreneur.first + " " + entrepreneur.last);
const entrepreneurs70ages = entrepreneurs70.map(entrepreneur => actualYear - entrepreneur.year);

createDivWithText("Ces entrepreneurs sont nés dans les années 70:", ".exercice-3");

entrepreneurs70FullNames.forEach((fullName, index) => {
    createDivWithText(fullName + " is " + entrepreneurs70ages[index] + " yo", ".exercice-3");
});



// Exerice 4
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const sortedBooks = books.sort((a, b) => b.rented - a.rented);

const haveEachBooksBeenRentedAtLeastOnce = sortedBooks[sortedBooks.length - 1].rented > 0;

const mostRentedBook = sortedBooks[0];

const leastRentedBook = sortedBooks[sortedBooks.length - 1];

const foundBook = sortedBooks.find(book => book.id == 873495);

const bookToDelete = sortedBooks.find(book => book.id == 133712);
const bookToDeleteIndex = books.indexOf(bookToDelete);

createDivWithText(mostRentedBook.title + " est le livre le plus emprunté", ".exercice-4");
createDivWithText(leastRentedBook.title + " est le livre le moin emprunté", ".exercice-4");
createDivWithText(foundBook.title + " est le livre dont l'id est: 873495", ".exercice-4");
createDivWithText("L'index de " + bookToDelete.title + " est le " + bookToDeleteIndex + " books.splice(5, 1) pour le retirer du Tableau", ".exercice-4");

document.querySelector('.exercice-5 button').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const img = document.querySelector('#dog-img');
            img.src = data.message;
        })
});
