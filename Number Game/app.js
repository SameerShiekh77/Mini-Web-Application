let x, yplayerNumber, rand, randComp, compNumber
let playerName = prompt("Enter Your Name", "Guest");

let userName = document.getElementById('player');
userName.innerHTML = playerName;

function player() {
    playerNumber = document.getElementById('playerNumber');
    rand = Math.floor((Math.random() * 100) + 1)
    x = playerNumber.innerHTML = rand


}

function computer() {
    computerNumber = document.getElementById('compNumber');
    randComp = Math.floor((Math.random() * 100) + 1)
    y = computerNumber.innerHTML = randComp

}
let playercount = 0;
let computercount = 0;
let score = document.getElementById('score')
let Playerwon, computerWon;

function check() {
    player()
    computer()
    if (x > y) {
        Playerwon = document.getElementById('number')
        Playerwon.innerHTML = 'YOU WIN';
        playercount++;
    } else if (y > x) {
        computerWon = document.getElementById('number')
        computerWon.innerHTML = 'COMPUTER WIN';
        computercount++;
    } else if (x == y) {
        let draw = document.getElementById('number')
        draw.innerHTML = 'DRAW';

    }
    score.innerHTML = 'Score <br> Player ' + playercount + '/Computer ' + computercount
    if (playercount >= 10) {
        let btn = document.getElementById('btn');
        btn.disabled = true;
        Playerwon.innerHTML = 'GAME OVER <br>Champion ' + playerName;
    } else if (computercount >= 10) {
        let btn = document.getElementById('btn');
        btn.disabled = true;
        Playerwon.innerHTML = 'GAME OVER <br>Champion Computer';
    }

}