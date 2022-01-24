// Initialisation des variables :

let userLetter, hangman, wordButton, 
    letterButton, result, 
    alertMessageLetter, alertMessageWord, 
    restartButton, lettersLeft, userWord, 
    userInput, wordToFind, shortcutButton,
    userWordForm, wordToFindInArray, hiddenWord;

let last   = 0;
let score  = 0;
let usedLetters = new Array();
let hidden      = true;



  // Tableau contenant la liste des mots du jeux :

const words = [
    'PETUNIA', 'HOROSCOPE', 'TAMBOURIN', 'CONQUISTADOR', 'DIAPASON', 'BROUHAHA',
    'ICEBERG', 'AVALANCHE', 'BILBOQUET', 'CORNEMUSE', 'BELIEVEMY', 'CHIMPANZE',
    'MOULT', 'AZIMUT', 'ACAJOU', 'SEUIL', 'BANJO', 'ALOES', 'CORSE', 'CIRE'
    ];



    // Récupération des élèments HTML sur le JavaScript :

hangman        = document.querySelector('#hangman');
hiddenWord     = document.querySelector('#hiddenWord');
userLetter     = document.querySelector('#userLetter');
userWord       = document.querySelector('#userWord');
letterButton   = document.querySelector('#letterButton');
wordButton     = document.querySelector('#wordButton');
userInput      = document.querySelector('#userInput'); 
result         = document.querySelector('#result');
usedLetters    = document.querySelector('#usedLetters');
restartButton     = document.querySelector('#restartButton');
shortcutButton     = document.querySelector('#shortcutButton');
userWordForm       = document.querySelector('#userWordForm');
alertMessageLetter = document.querySelector('#alertMessageLetter');
alertMessageWord   = document.querySelector('#alertMessageWord');




    // Création de l'interface pour le début de partie :

hangman.innerHTML                = `<img src="img/hangman${score++}.jpg" alt="Image du pendu">`;
alertMessageLetter.style.display = 'none';
alertMessageWord.style.display   = 'none';
userWordForm.style.display       = 'none';
restartButton.style.display      = 'none';



    
    // Création du bouton masqué si l'utilisateur pense connaître le mot :

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


    // Sortie d'un des mots du tableau 'words' aléatoirement :
    
function randomWord() {

    do {
        wordToFind = words[Math.floor(Math.random() * words.length)];
    } while (words.indexOf(wordToFind) == last);

    last = wordToFind; 

    lettersLeft = wordToFind.length;

    // hiddenWord.textContent = wordToFind.slice().replaceAll(/[A-Z]/g, '_');
}


        // En cas de victoire :

function winning() {
    userInput.style.display = 'none';
    hiddenWord.textContent  = wordToFind;
    result.textContent      = ('Félicitations, vous avez trouvé : ');
    restartButton.style.display = 'block';
    hangman.innerHTML           = `<img src="img/hangman0.jpg" alt="Image du pendu">`;
  }


        // En cas de défaite : 

function loosing() {
    userInput.style.display = 'none';
    hiddenWord.textContent  = wordToFind;
    result.textContent      = ('Perdu ! Le mot était : ');
    restartButton.style.display = 'block';
    hangman.innerHTML           = `<img src="img/hangman6.jpg" alt="Image du pendu">`;
}


    // Message d'alerte si l'utilisateur rentre un nombre plutôt qu'une lettre :
userLetter.addEventListener('keyup', () => {
    if (isNaN(userLetter.value) && userLetter.value !== '') { 
        alertMessageLetter.style.display = 'none';
    } else {
        alertMessageLetter.style.display = 'block';
    }
});
    


    // Message d'alerte si l'utilisateur rentre un nombre plutôt qu'un mot :

userWord.addEventListener('keyup', () => {
     if (isNaN(userWord.value) && userWord.value !== '') { 
        alertMessageWord.style.display = 'none';
     } else {
         alertMessageWord.style.display = 'block';        
     }
});



// let array = ['Pomme', 'Poire'];
// console.log(array);
// array.push('Fraise');
// console.log(array);


// usedLetters.push('Fraise');
// console.log(usedLetters)



    // Fonction de lancement de la partie :

function newGame() {   

    randomWord();
    console.log(wordToFind);

    wordToFindInArray = wordToFind.split('');

    console.log(wordToFindInArray);

    for (let i = 0; i < wordToFind.length; i++) {
        wordToFindInArray[i] = "_";
        hiddenWord.textContent = wordToFindInArray.join('');

    };

    console.log(wordToFindInArray);

        // Validation ou non du mot entré par l'utilisateur : 

letterButton.addEventListener('click', () => {

    
    if (wordToFind.includes(userLetter.value.toUpperCase())) {
        for (let j = 0; j < wordToFind.length; j++) {
            if (wordToFind[j] === userLetter.value.toUpperCase()) {
                wordToFindInArray[j] = userLetter.value.toUpperCase();
                lettersLeft--;
                hiddenWord.textContent = wordToFindInArray.join('');
            } else if (lettersLeft === 0) {
                winning();
            }
        };
    } else {
        hangman.innerHTML = `<img src="img/hangman${score++}.jpg" alt="Image du pendu">`;
        if (score == 7) {
            loosing();
        }
    }
});


         // Validation ou non du mot entré par l'utilisateur.

wordButton.addEventListener('click', () => {
    if (wordToFind == userWord.value.toUpperCase()) {
        winning();
    } else {
        hangman.innerHTML = `<img src="img/hangman${score++}.jpg" alt="Image du pendu">`;
        if (score == 7) {
            loosing();
        }
    }
});
}
            // Appel de la fonction de début de partie :
            newGame();