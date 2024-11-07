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
// const table = document.getElementById('exercice-8');
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
// const table = document.getElementById('exercice-8');
// let colorsArray = ['#FF6F61', '#D4E157', '#29B6F6', '#AB47BC', '#FFEB3B', '#4CAF50', '#FF9800', '#9C27B0', '#00BCD4', '#8BC34A'];

// function updateTable() {
//     let randomColorsArray = Array.from(colorsArray, () => colorsArray[Math.floor(Math.random() * colorsArray.length)]);
//     let row;

//     table.innerHTML = '';
//     for (let i = 0; i < 100; i++) {
//         const colIndex = i % 10;

//         if (colIndex === 0) {
//             row = document.createElement('tr');
//             table.appendChild(row);
//         }

//         const cell = document.createElement('td');
//         cell.textContent = i;
//         cell.style.backgroundColor = randomColorsArray[colIndex];

//         row.appendChild(cell);
//     }
// }

// setInterval(updateTable, 300);

// Exercice 9
// let body = document.querySelector('body');

// function meteo(s, t) {
//     return `Nous sommes ${s=='printemps'?'au':'en'} ${s}, et il fait ${t} degré${Math.abs(t)==1?'':'s'}<br>`
// }

// body.innerHTML += meteo('été', 30);
// body.innerHTML += meteo('automne', 15);
// body.innerHTML += meteo('printemps', 20);
// body.innerHTML += meteo('hiver', -1);
// body.innerHTML += meteo('hiver', 1);
// body.innerHTML += meteo('hiver', 0);

// Exercice 10
// let nom = "dupOnd"
// function toCapitalize(name) {
//     return name[0].toUpperCase() + name.toLowerCase().slice(1)
// }

// console.log(toCapitalize(nom))

// Exercice 11

// let listElement = document.getElementById('exercice-11');

// const myArray = ['pomme', 'banane', 'kiwi'];

// myArray.forEach(e => {
//     let li = document.createElement('li');
//     li.textContent = e;
//     listElement.appendChild(li);
// });

// Exercice 12
// const eventContainer = document.getElementById("exercice-12");

// let liste = [
//     {
//         "id": "25306",
//         "url": "https://www.paris.fr/evenements/djebarama-25306",
//         "title": "Ciné-club - Djebarama",
//         "lead_text": "Un jeudi par mois, Assia fait son cinéma !",
//         "description": "<p>De film en film, on explore, on analyse, on décrypte, on discute, on débat… bref : on parle cinéma ! On se retrouve les jeudis :</p><ul><li>17 octobre<br></li><li>14 novembre</li><li>12 décembre</li><li>16 janvier<br></li><li>13 février</li><li>13 mars</li><li>17 avril</li><li>15 mai</li><li>12 juin</li></ul>",
//         "date_start": "2024-10-17T20:00:00+00:00",
//         "date_end": "2025-06-12T22:00:00+00:00",
//         "occurrences": "2024-11-14T19:00:00+01:00_2024-11-14T21:00:00+01:00;2024-12-12T19:00:00+01:00_2024-12-12T21:00:00+01:00;2025-01-16T19:00:00+01:00_2025-01-16T21:00:00+01:00;2025-02-13T19:00:00+01:00_2025-02-13T21:00:00+01:00;2025-03-13T19:00:00+01:00_2025-03-13T21:00:00+01:00;2025-04-17T20:00:00+02:00_2025-04-17T22:00:00+02:00;2025-05-15T20:00:00+02:00_2025-05-15T22:00:00+02:00;2025-06-12T20:00:00+02:00_2025-06-12T22:00:00+02:00",
//         "date_description": "Le jeudi 12 juin 2025<br />de 19h00 à 21h00<br />Le jeudi 15 mai 2025<br />de 19h00 à 21h00<br />Le jeudi 17 avril 2025<br />de 19h00 à 21h00<br />Le jeudi 14 novembre 2024<br />de 19h00 à 21h00<br />Le jeudi 12 décembre 2024<br />de 19h00 à 21h00<br />Le jeudi 16 janvier 2025<br />de 19h00 à 21h00<br />Le jeudi 13 février 2025<br />de 19h00 à 21h00<br />Le jeudi 13 mars 2025<br />de 19h00 à 21h00<br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2022/08/25/huge-0886067d8d73fdf910ad880d68a0e545.jpg",
//         "cover_alt": "Djebarama",
//         "cover_credit": "Bibliothèque Assia Djebar",
//         "tags": [
//             "Ecrans",
//             "Loisirs"
//         ],
//         "address_name": "Bibliothèque Assia Djebar",
//         "address_street": "1 rue Reynaldo Hahn",
//         "address_zipcode": "75020",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.41215901561648,
//             "lat": 48.8492559915638
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://www.paris.fr/lieux/bibliotheque-assia-djebar-19114",
//         "contact_phone": "+33184821950",
//         "contact_mail": "bibliotheque.assia-djebar@paris.fr",
//         "contact_facebook": "https://www.facebook.com/BibAssiaDjebarParis",
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": null,
//         "access_type": "non",
//         "access_link": "https://www.paris.fr/lieux/bibliotheque-assia-djebar-19114",
//         "access_link_text": "Bibliothèque Assia Djebar",
//         "updated_at": "2024-10-01T17:38:30+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public adultes.",
//         "childrens": "Ciné-Club - Djebarama spécial Brésil (https://www.paris.fr/evenements/cine-club-djebarama-special-bresil-53862)",
//         "group": "Bibliothèques",
//         "locale": "fr"
//     },
//     {
//         "id": "69948",
//         "url": "https://www.paris.fr/evenements/sunday-syndrome-lumiere-noire-chloe-presente-slomo-live-av-69948",
//         "title": "SUNDAY SYNDROME • LUMIÈRE NOIRE : CHLOÉ présente SloMo (live AV)",
//         "lead_text": "Par ici le clubbing du dimanche ! Les soirées Sunday syndrome reviennent à la Gaîté Lyrique, et c’est toujours la solution idéale pour prolonger la fête et arriver reboosté·e le lundi !",
//         "description": "<p>Tous les mois, de 18h à minuit, rendez-vous dans la Grande salle pour une soirée club en partenariat avec Arty Farty et les soirées S. Society du Sucre, à Lyon. Avec un line-up soigneusement sélectionné, alternant jeunes talents et artistes confirmé·es de la scène club française et internationale, les Sunday syndrome invitent à des fins de week-end mémorables. Et pour ne rien gâcher, l’entrée est gratuite avant 19h, dans la limite des places disponibles.</p><h4>Ce dimanche 01.12 :<br>SUNDAY SYNDROME • LUMIÈRE NOIRE : CHLOÉ PRÉSENTE SloMo (live AV)</h4><p>SloMo A/V est un point de croisement entre Chloé Thévenin, DJ mais aussi productrice, travaillant en studio à construire des mondes, des climats (quatre albums et de nombreuses bandes sons en témoignent), Dune Lunel, directrice artistique vivant à Paris, travaillant depuis plus de vingt ans dans le champ culturel (on doit à son studio de nombreuses identités visuelles, animées par un sens de la rencontre entre image et texte), et Adrien Godin, jeune artiste diplômé de l’ECV (l’école de Communication Visuelle de Paris) travaillant comme DA et designer graphique. Ensemble, ils ont inventé une entité grouillante, épique.<br><br>SloMo A/V n’est donc pas à proprement parler le projet ambient de Chloé, mais une expérience que l’on pourrait décrire comme immersive. Ici, les sons génèrent des images, à moins que ça ne soit l’inverse : on ne sait jamais vraiment, dans ce dialogue énigmatique et hypnotique. Depuis 2015, SloMo A/V a été présenté au Centre Pompidou, à la Philharmonie de Paris, au TAP de Poitiers, au Sonar Festival de Paris, au Lieu Unique de Nantes et au Southbank Centre de Londres.</p><p>Basée à Paris et menée par la productrice et compositrice de musique électronique Chloé Thévenin, Lumière Noire est une entité qui cultive l’ambivalence depuis sa création en 2017. Elle se positionne tantôt comme un label défricheur offrant à des artistes issus d’univers variés un espace pour des morceaux qui ne laissent personne indifférent, tantôt comme un club ambulant proposant des soirées qui changent de lieux mais dont la programmation reste invariablement exigeante. S’il y a un fil rouge qui unit ses projets, c’est une esthétique que la taulière de Lumière Noire définit en ces termes : “Un art du pas de côté”. L'entité défend une certaine idée de la musique électronique, comportant toujours un petit quelque-chose qui dévie de l’autoroute des rythmes saccadés. Une légère dissonance, une ambiance un brin dérangeante, ou une mélodie iridescente qui filtre comme un rayon de lune au travers d’un son dark. Comme quoi, c’est parfois dans la pénombre qu’on entrevoit le mieux la lumière…</p>",
//         "date_start": "2024-12-01T18:00:00+00:00",
//         "date_end": "2024-12-01T00:00:00+00:00",
//         "occurrences": "2024-12-01T18:00:00+01:00_2024-12-01T00:00:00+01:00",
//         "date_description": "Le dimanche 01 décembre 2024<br />de 18h00 à 00h00<br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/10/01/huge-ea7d3105234704ab0487799beee6bd80.jpg",
//         "cover_alt": null,
//         "cover_credit": "la gaîté lyrique",
//         "tags": [
//             "Nuit",
//             "Festival"
//         ],
//         "address_name": "La Gaîté Lyrique",
//         "address_street": "3 bis Rue Papin",
//         "address_zipcode": "75003",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.35376780000001,
//             "lat": 48.8667047
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": "Métro -> 3 : Réaumur - Sébastopol (Paris) (155m) Bus -> 2038 : Réaumur - Arts et Métiers (Paris) (130m) Vélib -> Square Emile - Chautemps (81.64m) <a href=\"https://www.geovelo.fr/paris/route?to=2.3536357283592,48.867433724231\">Calculez votre itinéraire sur GéoVélo</a>",
//         "contact_url": null,
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": "https://www.facebook.com/gaitelyrique",
//         "contact_twitter": null,
//         "price_type": "payant",
//         "price_detail": "<ul><li>Tarif : 17,15€</li></ul><p>Gratuit avant 19h, dans la limite des places disponibles.</p>",
//         "access_type": "obligatoire",
//         "access_link": "https://www.gaite-lyrique.net/evenement/sunday-syndrome-lumiere-noire-chloe-presente-slomo",
//         "access_link_text": null,
//         "updated_at": "2024-10-04T11:03:29+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public jeunes et adultes.",
//         "childrens": null,
//         "group": "Nuit Blanche",
//         "locale": "fr"
//     },
//     {
//         "id": "70145",
//         "url": "https://www.paris.fr/evenements/le-roman-d-un-chef-d-oeuvre-la-comedie-humaine-selon-antonio-segui-70145",
//         "title": "le roman d'un chef d'oeuvre : la comédie urbaine selon Antonio Segui",
//         "lead_text": "Antonio Segui est né en Argentine en 1934. Il a passé 50 ans en France, à Arcueil, où il avait son atelier. Disparu en 2022, il est l'un des artistes figuratifs les plus originaux de son époque. Caricaturiste à l'humour noir, il imagine Don Gustavo, son personnage fétiche, double de lui-même, à la vie riche de passions, d'aventures et de créations.",
//         "description": "<p>les ateliers henry dougier : l<em>e roman d'un chef d'oeuvre</em> : récit romanesque et enquête historique, c'est l'histoire d'un tableau célèbre.</p><p>Christine Frérot, autrice de ce livre, est docteur en histoire de l'art et spécialiste du Mexique. Elle a déjà signé aux ateliers henry dougier, <em>Une passion mélancolique selon Frida Kahlo</em></p>",
//         "date_start": "2024-11-23T15:00:00+00:00",
//         "date_end": "2024-11-23T16:15:00+00:00",
//         "occurrences": "2024-11-23T15:00:00+01:00_2024-11-23T16:15:00+01:00",
//         "date_description": "Le samedi 23 novembre 2024<br />de 15h00 à 16h15<br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/10/04/huge-3a55f697a89105fea958a2d208ec9edc.jpg",
//         "cover_alt": "Antonio Segui",
//         "cover_credit": "© Antonio Segui. 2019. Béatrice Lucchese",
//         "tags": [
//             "Art contemporain",
//             "Conférence",
//             "Littérature"
//         ],
//         "address_name": "Bibliothèque Glacière - Marina Tsvetaïeva",
//         "address_street": "132 rue de la Glacière",
//         "address_zipcode": "75013",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.34199402031581,
//             "lat": 48.8273179944732
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://www.paris.fr/lieux/bibliotheque-glaciere-marina-tsvetaieva-1730",
//         "contact_phone": "+33145895547",
//         "contact_mail": "bibliotheque.glaciere@paris.fr",
//         "contact_facebook": null,
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": null,
//         "access_type": "obligatoire",
//         "access_link": null,
//         "access_link_text": null,
//         "updated_at": "2024-10-04T15:36:13+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public jeunes et adultes.",
//         "childrens": null,
//         "group": "Bibliothèques",
//         "locale": "fr"
//     },
//     {
//         "id": "66785",
//         "url": "https://www.paris.fr/evenements/balade-au-coeur-des-passages-couverts-66785",
//         "title": "Balade au cœur des Passages Couverts",
//         "lead_text": "Profitez d'une balade hors du temps avec cette visite guidée dans les plus beaux passages couverts de Paris.",
//         "description": "<p>Très empruntés au XIXème siècle pour se rendre des Grands Boulevards au Palais Royal, les trente passages couverts subsistants (autrefois au nombre de 140) permettent de se plonger dans une ambiance hors du temps, coupée de l’agitation de la rue.</p><p>À partir du Palais Royal, votre guide Cultival vous emmènera à la galerie Vero Dodat pour ses belles librairies d’art et vous passerez ensuite par la galerie Vivienne, l’une des plus majestueuses, notamment grâce à ses mosaïques italiennes au sol et ses verrières au plafond, laquelle donne sur la galerie Colbert, où s’organisent régulièrement des expositions.</p><p>Vous finirez cette parenthèse enchantée par le passage des Panoramas où les philatélistes trouveront leur bonheur, qui vous mènera jusqu’aux Grands Boulevards.</p><p>Aujourd’hui, on y trouve des commerces, en tout genre, encore quelques cafés et surtout, les traces d’un passé récent où se promener et se montrer constituaient une activité indispensable de la vie quotidienne.</p>",
//         "date_start": "2024-10-01T00:00:00+00:00",
//         "date_end": "2028-12-31T23:59:59+00:00",
//         "occurrences": null,
//         "date_description": "Du mardi 01 octobre 2024 au dimanche 31 décembre 2028 : <br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/08/08/huge-f38f10a83f42bac8e1614ad8f57ee26f.jpg",
//         "cover_alt": null,
//         "cover_credit": "Cultival",
//         "tags": [
//             "Balade urbaine",
//             "Histoire",
//             "Loisirs"
//         ],
//         "address_name": "Place Colette",
//         "address_street": "Devant la Comédie-Français",
//         "address_zipcode": "75001",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.33587,
//             "lat": 48.86326
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://cultival.fr/fr_FR/",
//         "contact_phone": "+33825054405",
//         "contact_mail": "contact@cultival.fr",
//         "contact_facebook": "https://www.facebook.com/cultival/?locale=fr_FR",
//         "contact_twitter": null,
//         "price_type": "payant",
//         "price_detail": "<ul><li>Adulte : 14,50 €</li><li>- 18 ans : 10,00 €</li></ul><p><br></p>",
//         "access_type": "obligatoire",
//         "access_link": "https://cultival.fr/fr_FR/products/indiv/balade-au-coeur-des-passages-couverts",
//         "access_link_text": "Réservez ici",
//         "updated_at": "2024-10-07T16:12:06+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public jeunes et adultes.",
//         "childrens": null,
//         "group": "Aucun",
//         "locale": "fr"
//     },
//     {
//         "id": "56191",
//         "url": "https://www.paris.fr/evenements/paris-sportives-activites-renforcement-musculaire-cardio-et-boxe-par-olympique-montmartre-sports-56191",
//         "title": "Paris Sportives : activités renforcement musculaire, cardio et boxe par Olympique Montmartre Sports",
//         "lead_text": "Le dispositif « Paris Sportives » permet aux femmes et adolescentes de pratiquer régulièrement une activité physique sur les terrains de sport et dans les squares. Et c'est gratuit ! Découvrez tous les lieux et les activités.",
//         "description": "<p>Activités renforcement musculaire, cardio et boxe par Olympique Montmartre Sports</p><table> <thead> <tr> <th>jourS</th> <th>horaireS</th> <th>dates</th> <th>Lieux</th> </tr> </thead> <tbody> <tr> <td>Jeudi</td> <td>20h-21h30</td> <td>Toute l'année</td> <td>Stade Bertrand Dauvin <br><a href=\"https://www.google.fr/maps/place//data=!4m2!3m1!1s0x47e66ef42a182b17:0x1ad4e3f6e28bcbab?sa=X&amp;ved=1t:8290&amp;ictx=111\">12 Rue René Binet, 75018 Paris</a><br></td> </tr> </tbody> </table>",
//         "date_start": "2024-01-01T00:00:00+00:00",
//         "date_end": "2024-12-31T23:59:59+00:00",
//         "occurrences": null,
//         "date_description": "Du lundi 01 janvier 2024 au mardi 31 décembre 2024 : <br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/07/23/huge-6f682a63492e057be8b96a25cad667ac.png",
//         "cover_alt": null,
//         "cover_credit": "pexels",
//         "tags": [
//             "Loisirs",
//             "Sport"
//         ],
//         "address_name": "Stade Bertrand Dauvin",
//         "address_street": "12 Rue René Binet",
//         "address_zipcode": "75018",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.34205403474255,
//             "lat": 48.8994870190041
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://www.paris.fr/pages/21-clubs-font-faire-du-sport-en-exterieur-aux-parisiennes-20946#arrondissement-centre-9r5dv",
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": null,
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": "<p>Contactez le club pour vous inscrire</p><p>olympique-montmartre-sp@orange.fr</p><p>01 42 58 15 10</p>",
//         "access_type": "conseillée",
//         "access_link": "https://www.instagram.com/olympique_montmartre/",
//         "access_link_text": null,
//         "updated_at": "2024-10-08T15:16:13+00:00",
//         "image_couverture": null,
//         "programs": "Paris Sportives : Trouvez l'activité physique qui vous correspond ! (https://www.paris.fr/evenements/paris-sportives-trouvez-l-activite-physique-qui-vous-correspond-56121)",
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": "Paris Sportives",
//         "audience": "Public adultes.",
//         "childrens": null,
//         "group": "Activités DJS",
//         "locale": "fr"
//     },
//     {
//         "id": "56538",
//         "url": "https://www.paris.fr/evenements/paris-sportives-activites-football-et-decouverte-de-nouvelles-pratiques-sportives-par-socios-solidaires-56538",
//         "title": "Paris Sportives : activités football et découverte de nouvelles pratiques sportives par SOCIOS SOLIDAIRES",
//         "lead_text": "Le dispositif « Paris Sportives » permet aux femmes et adolescentes de pratiquer régulièrement une activité physique sur les terrains de sport et dans les squares. Et c'est gratuit ! Découvrez tous les lieux et les activités.",
//         "description": "<p>Activités football et découverte de nouvelles pratiques sportives par SOCIOS SOLIDAIRES<br></p><p>Adultes, découverte de nouvelles pratiques sportives</p><table> <thead> <tr> <th>jourS</th> <th>horaireS</th> <th>dates</th> <th>Lieux</th> </tr> </thead> <tbody> <tr> <td>Lundi</td> <td>9h30-11h30</td> <td>Toute l'année</td> <td>Square Marcel Sembat<br><a href=\"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66f0861c524f7:0x5c696f38f8cae427?sa=X&amp;ved=1t:8290&amp;ictx=111\">42 Rue René Binet, 75018 Paris</a><br></td> </tr> <tr> <td>Jeudi</td> <td>9h30-11h30</td> <td>Toute l'année</td> <td>Square Marcel Sembat<br><a href=\"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66f0861c524f7:0x5c696f38f8cae427?sa=X&amp;ved=1t:8290&amp;ictx=111\">42 Rue René Binet, 75018 Paris</a><br></td> </tr> </tbody> </table><p>Séniors, découverte de nouvelles pratiques sportives</p><table> <thead> <tr> <th>jourS</th> <th>horaireS</th> <th>dates</th> <th>Lieux</th> </tr> </thead> <tbody> <tr> <td>Lundi</td> <td>14h30-16h30</td> <td>Toute l'année</td> <td>Square Marcel Sembat<br><a href=\"https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66f0861c524f7:0x5c696f38f8cae427?sa=X&amp;ved=1t:8290&amp;ictx=111\">42 Rue René Binet, 75018 Paris</a><br></td> </tr> </tbody> </table><p>Enfants, football</p><table> <thead> <tr> <th>jourS</th> <th>horaireS</th> <th>dates</th> <th>Lieux</th> </tr> </thead> <tbody> <tr> <td>Samedi</td> <td>11h-12h</td> <td>Jusqu'au 1er juillet (hors vacances scolaires)</td> <td>Square Marcel Sembat<br><br></td> </tr> </tbody> </table>",
//         "date_start": "2024-01-01T00:00:00+00:00",
//         "date_end": "2024-12-31T23:59:59+00:00",
//         "occurrences": null,
//         "date_description": "Du lundi 01 janvier 2024 au mardi 31 décembre 2024 : <br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/05/17/huge-8036f4d0f152e9ba16510a5c51e127c7.jpg",
//         "cover_alt": "Cécifoot",
//         "cover_credit": "Cécifoot",
//         "tags": [
//             "Loisirs",
//             "Sport"
//         ],
//         "address_name": "Square Marcel Sembat",
//         "address_street": "42 Rue René Binet",
//         "address_zipcode": "75018",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.33916403834669,
//             "lat": 48.8994270045773
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://www.paris.fr/pages/21-clubs-font-faire-du-sport-en-exterieur-aux-parisiennes-20946#arrondissement-centre-9r5dv",
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": null,
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": "<p>Contactez le club pour vous inscrire</p><p>socios.solidaires@gmail.com </p>",
//         "access_type": "conseillée",
//         "access_link": null,
//         "access_link_text": null,
//         "updated_at": "2024-10-08T15:21:19+00:00",
//         "image_couverture": null,
//         "programs": "Paris Sportives : Trouvez l'activité physique qui vous correspond ! (https://www.paris.fr/evenements/paris-sportives-trouvez-l-activite-physique-qui-vous-correspond-56121)",
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": "Paris Sportives",
//         "audience": "Public enfants, jeunes et adultes.",
//         "childrens": null,
//         "group": "Activités DJS",
//         "locale": "fr"
//     },
//     {
//         "id": "70305",
//         "url": "https://www.paris.fr/evenements/trio-in-uno-au-son-de-la-terre-70305",
//         "title": "Trio In Uno au Son de la Terre",
//         "lead_text": "Composé des Brésiliens Diego Cardoso et José Ferreira ainsi que de l'Italienne Giulia Tamanini, le Trio In Uno nous emmène dans l’univers enchanteur de la musique instrumentale brésilienne.",
//         "description": "<p>À travers leurs propres compositions et des œuvres de grands compositeurs tels qu’Egberto Gismonti, Hamilton de Holanda, Hermeto Pascoal, Marco Pereira et Radamés Gnattali, le trio allie l’énergie de la musique populaire et improvisée à l’expressivité de la musique classique. Depuis 2015, ils ont enregistré trois albums – Lilas, Ipê et le plus récent Destinos, en collaboration avec Bebê Kramer – et se produisent régulièrement sur les scènes françaises et internationales. Le trio a également collaboré avec des artistes de renom tels que Yamandu Costa, Nicolas Krassik, Vincent Segal, Sergio Assad, Rogério Caetano et Gabriel Grossi, entre autres.</p><p>Giulia Tamanini – saxophone soprano</p><p>José Ferreira – guitare 7 cordes</p><p>Diego Cardoso – Violoncelle</p>",
//         "date_start": "2025-01-29T20:00:00+00:00",
//         "date_end": "2025-01-29T22:00:00+00:00",
//         "occurrences": "2025-01-29T20:00:00+01:00_2025-01-29T22:00:00+01:00",
//         "date_description": "Le mercredi 29 janvier 2025<br />de 20h00 à 22h00<br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/10/09/huge-0aaf598f2e369b7230b8365186c9be2e.jpeg",
//         "cover_alt": "Trio In Uno",
//         "cover_credit": null,
//         "tags": [
//             "Concert",
//             "Festival"
//         ],
//         "address_name": "Le Son de la Terre",
//         "address_street": "2 Port de Montebello",
//         "address_zipcode": "75005",
//         "address_city": "Paris 05",
//         "lat_lon": {
//             "lon": 2.351091,
//             "lat": 48.851503
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": null,
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": null,
//         "contact_twitter": null,
//         "price_type": "payant",
//         "price_detail": "Billetterie : 25 EUR",
//         "access_type": "obligatoire",
//         "access_link": "https://www.sondelaterre.fr/event/trio-in-uno/",
//         "access_link_text": "Billetterie",
//         "updated_at": "2024-10-09T10:46:21+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": "Trio In Uno",
//         "audience": "Tout public.",
//         "childrens": null,
//         "group": "Aucun",
//         "locale": "fr"
//     },
//     {
//         "id": "70023",
//         "url": "https://www.paris.fr/evenements/trans-galactique-70023",
//         "title": "TRANS*GALACTIQUE",
//         "lead_text": "Avec Balthazar Heisch, Bobby Sanchez, Brandon Gercara, Cassils, Darko de la Jaquette, Franky Gogo, Hot Bodies aka Gérald Kurdian, Kama La Mackerel, Masina Pinheiro & Gal Cipreste, Laurence Philomène, Roberta Marrero, Roy Köhnke, SMITH x Act Up-Paris, Zanele Muholi et la collection de Sébastien Lifshitz.",
//         "description": "<p>L’exposition TRANS*GALACTIQUE célèbre la possibilité d’un<em> trans* gaze</em>, pluriel et émancipateur. Invité.ex par les commissaires et artistes Superpartners (SMITH, artiste et chercheur &amp; Nadège Piton, commissaire d’exposition et performeuse), Frank Lamy (commissaire d'exposition, performeur et DJ) et Balthazar Heisch (artiste), et d’après le numéro éponyme de la revue photographique The Eyes paru en 2020, quinze artistes trans explorent par la photographie et la vidéo des manières alternatives, résistantes, <em>queer</em> et écologiques d’être en relation avec les autres et avec le monde, au-delà d’une esthétique de transformation des corps.</p><p>Commissariat : Superpartners (SMITH et Nadège Piton), Frank Lamy et Balthazar Heisch<br><br>Scénographie : Agence PAM</p><p>Coproduction : La Gaîté Lyrique x The Eyes</p><p>Avec le soutien de la Fondation PICTO</p>",
//         "date_start": "2024-10-18T12:00:00+00:00",
//         "date_end": "2025-02-09T19:00:00+00:00",
//         "occurrences": "2024-10-18T12:00:00+02:00_2024-10-18T21:00:00+02:00;2024-10-19T12:00:00+02:00_2024-10-19T20:00:00+02:00;2024-10-20T12:00:00+02:00_2024-10-20T20:00:00+02:00;2024-10-21T12:00:00+02:00_2024-10-21T21:00:00+02:00;2024-10-22T12:00:00+02:00_2024-10-22T21:00:00+02:00;2024-10-23T12:00:00+02:00_2024-10-23T21:00:00+02:00;2024-10-24T12:00:00+02:00_2024-10-24T21:00:00+02:00;2024-10-25T12:00:00+02:00_2024-10-25T21:00:00+02:00;2024-10-26T12:00:00+02:00_2024-10-26T20:00:00+02:00;2024-10-27T11:00:00+01:00_2024-10-27T19:00:00+01:00;2024-10-28T11:00:00+01:00_2024-10-28T20:00:00+01:00;2024-10-29T11:00:00+01:00_2024-10-29T20:00:00+01:00;2024-10-30T11:00:00+01:00_2024-10-30T20:00:00+01:00;2024-10-31T11:00:00+01:00_2024-10-31T20:00:00+01:00;2024-11-01T11:00:00+01:00_2024-11-01T20:00:00+01:00;2024-11-02T11:00:00+01:00_2024-11-02T19:00:00+01:00;2024-11-03T11:00:00+01:00_2024-11-03T19:00:00+01:00;2024-11-04T11:00:00+01:00_2024-11-04T20:00:00+01:00;2024-11-05T11:00:00+01:00_2024-11-05T20:00:00+01:00;2024-11-06T11:00:00+01:00_2024-11-06T20:00:00+01:00;2024-11-07T11:00:00+01:00_2024-11-07T20:00:00+01:00;2024-11-08T11:00:00+01:00_2024-11-08T20:00:00+01:00;2024-11-09T11:00:00+01:00_2024-11-09T19:00:00+01:00;2024-11-10T11:00:00+01:00_2024-11-10T19:00:00+01:00;2024-11-11T11:00:00+01:00_2024-11-11T20:00:00+01:00;2024-11-12T11:00:00+01:00_2024-11-12T20:00:00+01:00;2024-11-13T11:00:00+01:00_2024-11-13T20:00:00+01:00;2024-11-14T11:00:00+01:00_2024-11-14T20:00:00+01:00;2024-11-15T11:00:00+01:00_2024-11-15T20:00:00+01:00;2024-11-16T11:00:00+01:00_2024-11-16T19:00:00+01:00;2024-11-17T11:00:00+01:00_2024-11-17T19:00:00+01:00;2024-11-18T11:00:00+01:00_2024-11-18T20:00:00+01:00;2024-11-19T11:00:00+01:00_2024-11-19T20:00:00+01:00;2024-11-20T11:00:00+01:00_2024-11-20T20:00:00+01:00;2024-11-21T11:00:00+01:00_2024-11-21T20:00:00+01:00;2024-11-22T11:00:00+01:00_2024-11-22T20:00:00+01:00;2024-11-23T11:00:00+01:00_2024-11-23T19:00:00+01:00;2024-11-24T11:00:00+01:00_2024-11-24T19:00:00+01:00;2024-11-25T11:00:00+01:00_2024-11-25T20:00:00+01:00;2024-11-26T11:00:00+01:00_2024-11-26T20:00:00+01:00;2024-11-27T11:00:00+01:00_2024-11-27T20:00:00+01:00;2024-11-28T11:00:00+01:00_2024-11-28T20:00:00+01:00;2024-11-29T11:00:00+01:00_2024-11-29T20:00:00+01:00;2024-11-30T11:00:00+01:00_2024-11-30T19:00:00+01:00;2024-12-01T11:00:00+01:00_2024-12-01T19:00:00+01:00;2024-12-02T11:00:00+01:00_2024-12-02T20:00:00+01:00;2024-12-03T11:00:00+01:00_2024-12-03T20:00:00+01:00;2024-12-04T11:00:00+01:00_2024-12-04T20:00:00+01:00;2024-12-05T11:00:00+01:00_2024-12-05T20:00:00+01:00;2024-12-06T11:00:00+01:00_2024-12-06T20:00:00+01:00;2024-12-07T11:00:00+01:00_2024-12-07T19:00:00+01:00;2024-12-08T11:00:00+01:00_2024-12-08T19:00:00+01:00;2024-12-09T11:00:00+01:00_2024-12-09T20:00:00+01:00;2024-12-10T11:00:00+01:00_2024-12-10T20:00:00+01:00;2024-12-11T11:00:00+01:00_2024-12-11T20:00:00+01:00;2024-12-12T11:00:00+01:00_2024-12-12T20:00:00+01:00;2024-12-13T11:00:00+01:00_2024-12-13T20:00:00+01:00;2024-12-14T11:00:00+01:00_2024-12-14T19:00:00+01:00;2024-12-15T11:00:00+01:00_2024-12-15T19:00:00+01:00;2024-12-16T11:00:00+01:00_2024-12-16T20:00:00+01:00;2024-12-17T11:00:00+01:00_2024-12-17T20:00:00+01:00;2024-12-18T11:00:00+01:00_2024-12-18T20:00:00+01:00;2024-12-19T11:00:00+01:00_2024-12-19T20:00:00+01:00;2024-12-20T11:00:00+01:00_2024-12-20T20:00:00+01:00;2024-12-21T11:00:00+01:00_2024-12-21T19:00:00+01:00;2024-12-22T11:00:00+01:00_2024-12-22T19:00:00+01:00;2024-12-23T11:00:00+01:00_2024-12-23T20:00:00+01:00;2024-12-24T11:00:00+01:00_2024-12-24T20:00:00+01:00;2024-12-25T11:00:00+01:00_2024-12-25T20:00:00+01:00;2024-12-26T11:00:00+01:00_2024-12-26T20:00:00+01:00;2024-12-27T11:00:00+01:00_2024-12-27T20:00:00+01:00;2024-12-28T11:00:00+01:00_2024-12-28T19:00:00+01:00;2024-12-29T11:00:00+01:00_2024-12-29T19:00:00+01:00;2024-12-30T11:00:00+01:00_2024-12-30T20:00:00+01:00;2024-12-31T11:00:00+01:00_2024-12-31T20:00:00+01:00;2025-01-01T11:00:00+01:00_2025-01-01T20:00:00+01:00;2025-01-02T11:00:00+01:00_2025-01-02T20:00:00+01:00;2025-01-03T11:00:00+01:00_2025-01-03T20:00:00+01:00;2025-01-04T11:00:00+01:00_2025-01-04T19:00:00+01:00;2025-01-05T11:00:00+01:00_2025-01-05T19:00:00+01:00;2025-01-06T11:00:00+01:00_2025-01-06T20:00:00+01:00;2025-01-07T11:00:00+01:00_2025-01-07T20:00:00+01:00;2025-01-08T11:00:00+01:00_2025-01-08T20:00:00+01:00;2025-01-09T11:00:00+01:00_2025-01-09T20:00:00+01:00;2025-01-10T11:00:00+01:00_2025-01-10T20:00:00+01:00;2025-01-11T11:00:00+01:00_2025-01-11T19:00:00+01:00;2025-01-12T11:00:00+01:00_2025-01-12T19:00:00+01:00;2025-01-13T11:00:00+01:00_2025-01-13T20:00:00+01:00;2025-01-14T11:00:00+01:00_2025-01-14T20:00:00+01:00;2025-01-15T11:00:00+01:00_2025-01-15T20:00:00+01:00;2025-01-16T11:00:00+01:00_2025-01-16T20:00:00+01:00;2025-01-17T11:00:00+01:00_2025-01-17T20:00:00+01:00;2025-01-18T11:00:00+01:00_2025-01-18T19:00:00+01:00;2025-01-19T11:00:00+01:00_2025-01-19T19:00:00+01:00;2025-01-20T11:00:00+01:00_2025-01-20T20:00:00+01:00;2025-01-21T11:00:00+01:00_2025-01-21T20:00:00+01:00;2025-01-22T11:00:00+01:00_2025-01-22T20:00:00+01:00;2025-01-23T11:00:00+01:00_2025-01-23T20:00:00+01:00;2025-01-24T11:00:00+01:00_2025-01-24T20:00:00+01:00;2025-01-25T11:00:00+01:00_2025-01-25T19:00:00+01:00;2025-01-26T11:00:00+01:00_2025-01-26T19:00:00+01:00;2025-01-27T11:00:00+01:00_2025-01-27T20:00:00+01:00;2025-01-28T11:00:00+01:00_2025-01-28T20:00:00+01:00;2025-01-29T11:00:00+01:00_2025-01-29T20:00:00+01:00;2025-01-30T11:00:00+01:00_2025-01-30T20:00:00+01:00;2025-01-31T11:00:00+01:00_2025-01-31T20:00:00+01:00;2025-02-01T11:00:00+01:00_2025-02-01T19:00:00+01:00;2025-02-02T11:00:00+01:00_2025-02-02T19:00:00+01:00;2025-02-03T11:00:00+01:00_2025-02-03T20:00:00+01:00;2025-02-04T11:00:00+01:00_2025-02-04T20:00:00+01:00;2025-02-05T11:00:00+01:00_2025-02-05T20:00:00+01:00;2025-02-06T11:00:00+01:00_2025-02-06T20:00:00+01:00;2025-02-07T11:00:00+01:00_2025-02-07T20:00:00+01:00;2025-02-08T11:00:00+01:00_2025-02-08T19:00:00+01:00;2025-02-09T11:00:00+01:00_2025-02-09T19:00:00+01:00",
//         "date_description": "Du vendredi 18 octobre 2024 au dimanche 09 février 2025 : <br />samedi, dimanche<br /> de 11h00 à 19h00<br />lundi, mardi, mercredi, jeudi, vendredi<br /> de 11h00 à 20h00<br />Du vendredi 18 octobre 2024 au dimanche 09 février 2025 : <br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/10/02/huge-7eb70d02990c87025eb3f93849e3fbe5.png",
//         "cover_alt": null,
//         "cover_credit": "la gaîté lyrique",
//         "tags": [
//             "Expo",
//             "LGBT"
//         ],
//         "address_name": "La Gaîté Lyrique",
//         "address_street": "3 bis Rue Papin",
//         "address_zipcode": "75003",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.35376780000001,
//             "lat": 48.8667047
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": "Métro -> 3 : Réaumur - Sébastopol (Paris) (155m) Bus -> 2038 : Réaumur - Arts et Métiers (Paris) (130m) Vélib -> Square Emile - Chautemps (81.64m) <a href=\"https://www.geovelo.fr/paris/route?to=2.3536357283592,48.867433724231\">Calculez votre itinéraire sur GéoVélo</a>",
//         "contact_url": null,
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": "https://www.facebook.com/gaitelyrique",
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": null,
//         "access_type": "non",
//         "access_link": null,
//         "access_link_text": null,
//         "updated_at": "2024-10-09T13:15:15+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public jeunes et adultes.",
//         "childrens": null,
//         "group": "Nuit Blanche",
//         "locale": "fr"
//     },
//     {
//         "id": "49366",
//         "url": "https://www.paris.fr/evenements/spectacle-place-aux-enfants-49366",
//         "title": "WEEK-END EN FAMILLE Maison de Victor Hugo: spectacle PLACE AUX ENFANTS",
//         "lead_text": "Pierrette Patinette a décidé de rester pour toujours dans le monde des enfants. Pourrez-vous l’aider à grandir ?",
//         "description": "<p><em>Un spectacle ludique autour des droits de l’enfant </em></p><p><em>à partir des textes de Janusz Korczak et de Victor Hugo. <br></em></p>",
//         "date_start": "2024-11-30T14:00:00+00:00",
//         "date_end": "2024-12-01T14:45:00+00:00",
//         "occurrences": "2024-11-30T14:00:00+01:00_2024-11-30T14:45:00+01:00;2024-12-01T14:00:00+01:00_2024-12-01T14:45:00+01:00",
//         "date_description": "Du samedi 30 novembre 2024 au dimanche 01 décembre 2024 : <br />samedi, dimanche<br /> de 14h00 à 14h45<br />",
//         "cover_url": "https://cdn.paris.fr/qfapv4/2024/10/08/huge-6f3e13605fa7abfa123370822b463e7f.jpg",
//         "cover_alt": null,
//         "cover_credit": "MVH",
//         "tags": [
//             "Atelier",
//             "Enfants",
//             "Littérature"
//         ],
//         "address_name": "Maison de Victor Hugo",
//         "address_street": "6 place des Vosges",
//         "address_zipcode": "75004",
//         "address_city": "Paris",
//         "lat_lon": {
//             "lon": 2.36613197362337,
//             "lat": 48.854820988539
//         },
//         "pmr": null,
//         "blind": null,
//         "deaf": null,
//         "transport": null,
//         "contact_url": "https://framaforms.org/week-end-en-famille-a-la-maison-de-victor-hugo-spectacle-1728400054",
//         "contact_phone": null,
//         "contact_mail": null,
//         "contact_facebook": null,
//         "contact_twitter": null,
//         "price_type": "gratuit",
//         "price_detail": "<p><br></p>",
//         "access_type": "obligatoire",
//         "access_link": "https://www.maisonsvictorhugo.paris.fr/node/preview/59f41228-9455-43c1-98ae-cd13e9d4b332/full",
//         "access_link_text": "Week-end en famille à la Maison de Victor Hugo",
//         "updated_at": "2024-10-09T13:41:26+00:00",
//         "image_couverture": null,
//         "programs": null,
//         "address_url": null,
//         "address_url_text": null,
//         "address_text": null,
//         "title_event": null,
//         "audience": "Public enfants, jeunes et adultes. A partir de 8 ans.",
//         "childrens": null,
//         "group": "Aucun",
//         "locale": "fr"
//     }
// ]

// function stripHtmlTags(text) {
//     return text.replace(/<[^>]*>/g, '');
// }

// liste.forEach(event => {
//     const maxDescriptionLength = 100;
//     let shortDescription = stripHtmlTags(event.description);
//     if (shortDescription.length > maxDescriptionLength) {
//         shortDescription = shortDescription.substring(0, maxDescriptionLength) + '…';
//     }

//     const eventCard = document.createElement("div");
//     eventCard.classList.add("event-card");

//     eventCard.innerHTML = `
//         <h2>${event.title}</h2>
//         <img src="${event.cover_url}" alt="${event.cover_alt}">
//         ${shortDescription ? `<p>${shortDescription}</p>` : ""}
//         <p><strong>Début:</strong> ${event.date_start}</p>
//         <p><strong>Fin:</strong> ${event.date_end}</p>
//         ${event.contact_mail ? `<p><a href="mailto:${event.contact_mail}">Contactez-nous par mail</a></p>` : ""}
//         ${event.contact_facebook ? `<p><a href="${event.contact_facebook}" target="_blank">Page Facebook</a></p>` : ""}
//         ${event.contact_twitter ? `<p><a href="${event.contact_twitter}" target="_blank">Page Twitter</a></p>` : ""}
//     `;

//     eventContainer.appendChild(eventCard);
// });

