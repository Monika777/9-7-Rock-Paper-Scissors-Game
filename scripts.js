//scrips for New Game Button 
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


//scripts for Player Choice Buttons
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//Game Logic
//Starting variables
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// Game elements display
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');


function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}


setGameElements();//Sprawdź, jak zachowuje się gra, kiedy nadasz zmiennej gameState różne wartości.

//Starting Game
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//Dalej definiujemy funkcję, która będzie uruchamiana po wciśnięciu przycisku "New Game" / "Play Again"
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints(); // This function has not been created yet
  }

}

//Player Choice
function playerPick(playerPick) {
    console.log(playerPick);
}

//Computer Choice Random
/*var x = Math.random();
Math.floor(Math.random()*3)*/


function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}



var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick); //dopisaneeeeeeeeeeee
}

//Who is the winner?
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        playerResultElem.innerHTML = 'Remis';
        computerResultElem.innerHTML = 'Remis';
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
        checkGameEnd(true);//dopisane
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
        checkGameEnd(false);//dopisane
    }
    setGamePoints(); //dopisane
}


function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//Results update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}



///End Game
function checkGameEnd(ifPlayerWin) {
    if (ifPlayerWin) {
        console.log('player: '+player.score);
        if (player.score == 10) {
            alert('Player won!');
            endGame();
        }
    } else {
        console.log('computer: '+computer.score);
        if (computer.score ==10) {
            alert('Computer won!');
            endGame();
        }
    }
}

function endGame() {
    gameState = 'ended';
    setGameElements();
}

function resetGameData() {
    playerPickElem.innerHTML = "Player Selection";
    computerPickElem.innerHTML = "Computer Selection";
    playerResultElem.innerHTML = "Player Score";
    computerResultElem.innerHTML = "Computer Score";
}










