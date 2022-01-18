let userChoice, hangman, wordButton, alertMessage, userWord, secretWord, wordToFind;
let last   = 0;
let hidden = true;

const words = [
    'petunia', 'horoscope', 'tambourin', 'conquistador', 'diapason', 'brouhaha',
    'iceberg', 'avalanche', 'bilboquet', 'cornemuse', 'believemy', 'chimpanze'

];

hangman      = document.querySelector('#hangman');
secretWord   = document.querySelector('#secretWord');
userChoice   = document.querySelector('#userChoice');
wordButton   = document.querySelector('#wordButton');
userWord     = document.querySelector('#userWord');
alertMessage = document.querySelector('#alertMessage');


hangman.innerHTML = '<img src="img/hangman1.jpg" alt="Pendu début de partie">';
alertMessage.style.color   = 'red';
alertMessage.style.display = 'none';
userWord.style.display = 'none';



wordButton.addEventListener('click', () => {

    if (hidden) {

        userWord.style.display = 'block';
        if (userWord == secretWord) {
            userChoice.style.textContent = 'Félicitations, vous avez trouvé le mot secret !';
        } else {
            userChoice.style.textContent = 'Vous n\'avez pas réussi à sauver Mr Jack';
        }
        wordButton.textContent = 'Finalement... peut-être pas !';
        hidden = false;
        
    } else {

        wordButton.textContent = 'J\'ai trouvé le mot !';
        userWord.style.display = 'none';
        hidden = true;
    }
})




function randomWord() {

    do {
        wordToFind = words[Math.floor(Math.random() * words.length)];
    } while (words.indexOf(secretWord) === words[last]);

    last = words.indexOf(secretWord); 

}


function newGame() {   

    randomWord();

    secretWord.textContent = wordToFind;
}


newGame();


// Transformer mot en tableau 



// Entrer lettre utilisateur

// Transformer lettre utilisateur

// Si lettre trouvée remplacer

// Si erreur modifier image







// window.onload = newGame();


// function newGame() {

    wordButton.addEventListener('click', () => {
        userWord.style.display = 'block';
        if (userWord == secretWord) {
            userChoice.style.textContent = 'Félicitations, vous avez trouvé le mot secret !';
        } else {
            userChoice.style.textContent = 'Vous n\'avez pas réussi à sauver Mr Jack';
        }
    })


// }






