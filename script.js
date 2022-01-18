    // Initialisation des variables :

let userLetter, hangman, wordButton, letterButton, alertMessage, userWord, secretWord, wordToFind, shortcutButton, userWordForm, secretWordInArray;
let last   = 0;
let hidden = true;




  // Tableau contenant la liste des mots du jeux :

const words = [
    'petunia', 'horoscope', 'tambourin', 'conquistador', 'diapason', 'brouhaha',
    'iceberg', 'avalanche', 'bilboquet', 'cornemuse', 'believemy', 'chimpanze'

];



    // Récupération des élèments HTML sur le JavaScript :

hangman        = document.querySelector('#hangman');
secretWord     = document.querySelector('#secretWord');
userLetter     = document.querySelector('#userLetter');
userWord       = document.querySelector('#userWord');
letterButton   = document.querySelector('#letterButton');
wordButton     = document.querySelector('#wordButton');
shortcutButton = document.querySelector('#shortcutButton');
userWordForm   = document.querySelector('#userWordForm');
alertMessage   = document.querySelector('#alertMessage');



    // Création de l'interface pour le début de partie :

hangman.innerHTML = '<img src="img/hangman1.jpg" alt="Pendu début de partie">';
alertMessage.style.color   = 'red';
alertMessage.style.display = 'none';
userWordForm.style.display = 'none';
secretWord.textContent = '_ _ _ _';



    // Création du bouton masqué si l'utilisateur'pense connaître le mot :

shortcutButton.addEventListener('click', () => {

    if (hidden) {

        userWordForm.style.display = 'block';
        shortcutButton.textContent = 'Finalement... peut-être pas !';
        hidden = false;
        
    } else {

        shortcutButton.textContent = `J'ai trouvé le mot !`;
        userWordForm.style.display = 'none';
        hidden = true;
    }
});




    // Message d'alerte si l'utilisateur rentre un nombre plutôt qu'une lettre :

userLetter.addEventListener('keyup', () => {
    if (isNaN(userLetter.value)) { 
        alertMessage.style.display = 'none';
    } else {
        alertMessage.style.display = 'block';        
    }
});



    // Sortie d'un des mots du tableau 'words' aléatoirement :

function randomWord() {

    do {
        wordToFind = words[Math.floor(Math.random() * words.length)];
    } while (words.indexOf(secretWord) === words[last]);

    last = words.indexOf(secretWord); 

}


    // Fonction de lancement de la partie :

function newGame() {   

    randomWord();

    secretWord = wordToFind;

    secretWordInArray = secretWord.split('');

    console.log(secretWordInArray);

    letterButton.addEventListener('click', () => {

    if (secretWordInArray.includes(userLetter)) {
            alert('Une de bonne !');
        } else {
            alert('Eh non !')
        }
    })
};



    // Appel de la fonction de début de partie :

newGame();