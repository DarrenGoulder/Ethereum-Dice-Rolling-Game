
var randomNo1, randomNo2;
var scrDirectory1, scrDirectory2;
var diceResult, resultText, i;
var evenSelected;

var thumbs = document.getElementById("bE");

thumbs.addEventListener("click", evenFunction);

document.getElementById("bE").addEventListener("click", evenFunction);

rollDice();

function evenFunction() {
  loopDiceRoll();
  document.getElementById("result").innerHTML = "Result is ";
  setTimeout(executeOutcome(evenSelected), 4500);
}

function oddFunction() {
  loopDiceRoll();
  evenSelected = false;
  setTimeout(executeOutcome, 4500);
}

function loopDiceRoll() {
  for (i = 0; i < 15; i++) {
    setTimeout(rollDice, (i * 300));
  }
}

rollDice();

scrDirectory1 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Black" + 6 + ".png?raw=true";

function rollDice() {

  randomNo1 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
  randomNo2 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
  //return randomNo1;
  //return randomNo2;

  scrDirectory1 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Black" + randomNo1 + ".png?raw=true";
  scrDirectory2 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Red" + randomNo2 + ".png?raw=true";
  document.getElementById("die1").src = scrDirectory1;
  document.getElementById("die2").src = scrDirectory2;
  diceResult = randomNo1 + randomNo2;

  document.getElementById("result").innerHTML = "Rolling Dice";
  return diceResult;
}

function executeOutcome(diceResult, evenSelected) {

  if (diceResult%2 == 0 & evenSelected == true) {
  resultText = " - EVEN YOU WIN!!";
}

  elseif (diceResult%2 == 0 & evenSelected == false); resultText = " - EVEN YOU LOOSE!!";
  }

  elseif(diceResult%2 != 0); {
  resultText = " - ODD YOU WIN!!";
  }

  else () {
    resultText = " - ODD YOU LOOSE!!";
  }

document.getElementById("result").innerHTML = "Result is "+ diceResult + resultText;

}
