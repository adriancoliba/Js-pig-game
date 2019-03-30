
// START RULES BUTTON
let divRules = document.getElementById("divRules");
let buttonRules = document.getElementById("gameRules");
function showRules () {
    if(divRules.style.display == "none"){
        divRules.style.display = "block";
        buttonRules.style.marginTop = "4px"
        buttonRules.style.color = "rgba(0, 0, 0, 0.099)"

    } else {
        divRules.style.display = "none"
        buttonRules.style.marginTop = "10px"
    }
}
// END RULES BUTTON

let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let dice = Math.floor(Math.random() * 6) + 1
document.querySelector(".dice").style.display ="none"

function activeDot(){
    if (activePlayer == 0) {
        activePlayer = 1;
        document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".player-0-panel").classList.remove("active")
    } else {
        activePlayer = 0;
        document.querySelector(".player-1-panel").classList.remove("active")
        document.querySelector(".player-0-panel").classList.add("active")
    }
}

function generateNumber () {
    var number= Math.floor(Math.random() * 6) + 1;
    if(number !== 1) {
        document.querySelector(".dice").style.display ="block"
        document.querySelector(".dice").src = "dice-" + number + ".png";
        roundScore += number;
        document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
    } else if (number == 1){
        document.querySelector(".dice").style.display = "none";
        roundScore = 0;
        document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
        
        activeDot();
    }
}

function hold () {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
    if(scores[activePlayer] >=20) {
        document.querySelector("#name-" + activePlayer).innerHTML = "<h3>WINNER!</h1>"
    }
    activeDot();
}

function newGame (){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector(".dice").style.display ="none";
    document.querySelector("#name-0").innerHTML = "Player 1";
    document.querySelector("#name-1").innerHTML = "Player 2";
    document.querySelector(".player-score").innerHTML = 0;
    
}


document.querySelector(".btn-roll").onclick = generateNumber;
document.querySelector(".btn-hold").onclick = hold;
document.querySelector(".btn-new").onclick = newGame;

