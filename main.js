let wins = 0;
let loses = 0;
const choices = ["Pierre", "Feuille", "Ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function runGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(userChoice + '_' + computerChoice) {
        case 'Pierre_Feuille':
        case 'Feuille_Ciseaux':
        case 'Ciseaux_Pierre':
            loses += 1;
            gameStatus.innerHTML = `Moi: ${userChoice} || Ordinateur: ${computerChoice} <br /><br />---> Défaite`
            break;

        case 'Pierre_Ciseaux':
        case 'Feuille_Pierre':
        case 'Ciseaux_Papier':
            wins += 1;
            gameStatus.innerHTML = `Moi: ${userChoice} || Ordinateur: ${computerChoice} <br /><br />---> Victoire`
            break;

        case 'Pierre_Pierre':
        case 'Feuille_Feuille':
        case 'Ciseaux_Ciseaux':
            gameStatus.innerHTML = `Moi: ${userChoice} || Ordinateur: ${computerChoice} <br /><br />---> Egalité`
            break;
    }
    gameScore.innerHTML = `Mon score: ${wins} || Ordinateur: ${loses}`;
}

function clearLogs() {
    gameScore.innerHTML = "Mon score: 0 || Ordinateur: 0";
    wins = 0;
    loses = 0;
}

rock.addEventListener("click", () => runGame("Pierre"));
paper.addEventListener("click", () => runGame("Feuille"));
scissors.addEventListener("click", () => runGame("Ciseaux"));