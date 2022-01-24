// Initialisation des variables :

let hangman, wordButton, result, alertMessageWord, 
    restartButton, lettersLeft, userWord, last, usedLetter,
    userInput, wordToFind, shortcutButton, letters,
    userWordForm, wordToFindInArray, hiddenWord;
let score    = 0;
let hidden   = true;
let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
    'V', 'W', 'X', 'Y', 'Z'];


  // Tableau contenant la liste des mots du jeux :

const words = [
    'PETUNIA', 'HOROSCOPE', 'TAMBOURIN', 'CONQUISTADOR', 'DIAPASON', 'BROUHAHA',
    'ICEBERG', 'AVALANCHE', 'BILBOQUET', 'CORNEMUSE', 'BELIEVEMY', 'CHIMPANZE',
    'MOULT', 'AZIMUT', 'ACAJOU', 'SEUIL', 'BANJO', 'ALOES', 'CORSE', 'CIRE'
    ];



    // Récupération des élèments HTML sur le JavaScript :

hangman        = document.querySelector('#hangman');
hiddenWord     = document.querySelector('#hiddenWord');
userWord       = document.querySelector('#userWord');
wordButton     = document.querySelector('#wordButton');
userInput      = document.querySelector('#userInput'); 
result         = document.querySelector('#result');
keyboard       = document.querySelector('#keyboard');
restartButton    = document.querySelector('#restartButton');
shortcutButton   = document.querySelector('#shortcutButton');
userWordForm     = document.querySelector('#userWordForm');
alertMessageWord = document.querySelector('#alertMessageWord');




    // Création de l'interface pour le début de partie :

hangman.innerHTML                = `<img src="img/hangman${score++}.jpg" alt="Image du pendu">`;
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
    


    // Message d'alerte si l'utilisateur rentre un nombre plutôt qu'un mot :

userWord.addEventListener('keyup', () => {
     if (isNaN(userWord.value) && userWord.value !== '') { 
        alertMessageWord.style.display = 'none';
     } else {
         alertMessageWord.style.display = 'block';        
     }
});



    // Fonction de lancement de la partie :

function newGame() {   

    randomWord();

    console.log(wordToFind);

    wordToFindInArray = wordToFind.split('');

    for (let i = 0; i < wordToFind.length; i++) {
        wordToFindInArray[i] = "_";
        hiddenWord.textContent = wordToFindInArray.join('');
    };


        // Validation ou non de la lettre entrée par l'utilisateur : 

        for (let k = 0; k < 26; k++) {

            letters = document.createElement('button');
            letters.textContent = `${alphabet[k]}`;
            letters.className = `alphabet`;
            letters.id = `letter${alphabet[k]}`;
            letters.value = `${alphabet[k]}`;
            keyboard.append(letters);
            
    
            letters.addEventListener('click', () => {

                console.log(score);

                usedLetter = document.querySelector(`#letter${alphabet[k]}`);

                usedLetter.disabled = true;

                console.log(wordToFindInArray.join(''));

                if (usedLetter.disabled == true) {
                    usedLetter.style.background = '#3B0930';
                }

                if (wordToFind.includes(alphabet[k])) {

                    for (let j = 0; j < wordToFind.length; j++) {
                        if (wordToFind[j] === alphabet[k]) {
                            wordToFindInArray[j] = alphabet[k];
                            hiddenWord.textContent = wordToFindInArray.join('');
                            --lettersLeft;
                            if (wordToFindInArray.join('') == wordToFind) {
                                winning();
                            }
                        } 
                    }
                        
                } else if (lettersLeft === 0) {
                    winning();
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
            if (score === 7) {
                loosing();
            }
        }
    }
    )}
};
            // Appel de la fonction de début de partie :
            newGame();