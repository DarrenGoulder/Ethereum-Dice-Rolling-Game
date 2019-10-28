var randomNo1, randomNo2;
var scrDirectory1, scrDirectory2;
var diceResult, resultText, i;
var userSelected;
var myVar;
var userBalance = 30000;
var userBet;

document.getElementById("bE").addEventListener("click", evenFunction);
document.getElementById("bO").addEventListener("click", oddFunction);
document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance;

function evenFunction() {

  userBet = document.getElementById("inputBet").value;
  if (userBet <= userBalance) {
    loopDiceRoll();
    userSelected = "Even";
    setTimeout(executeOutcome, 7000);
  }

  else {
  document.getElementById("resultJS").innerHTML = "Not enough funds, your balance is: " + userBalance;
  }
}

function oddFunction() {
  userBet = document.getElementById("inputBet").value;
  if (userBet <= userBalance) {
    loopDiceRoll();
    userSelected = "Odd";
    setTimeout(executeOutcome, 7000);
  }

  else {
  document.getElementById("resultJS").innerHTML = "Not enough funds, your balance is: " + userBalance;
  }
}

function loopDiceRoll() {
  for (i = 0; i < 30; i++) {

    setTimeout(rollDice, (i * 150));

  }

}

function rollDice() {

  randomNo1 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
  randomNo2 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
  //return randomNo1;
  //return randomNo2;
  document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/ethereum-growing-exponentially-in-china-consensys-media-738504.png?raw=true";
  scrDirectory1 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Black" + randomNo1 + ".png?raw=true";
  scrDirectory2 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Red" + randomNo2 + ".png?raw=true";
  document.getElementById("die1").src = scrDirectory1;
  document.getElementById("die2").src = scrDirectory2;
  diceResult = randomNo1 + randomNo2;

  document.getElementById("resultJS").innerHTML = "Rolling Dice, you bet " + userBet + " - " + userSelected;

  return diceResult;
}

function executeOutcome() {

  if (diceResult % 2 == 0 & userSelected == "Even") {
    resultText = " - EVEN YOU WIN " + userBet + "!!";
    document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
    userBalance = parseInt(userBalance) + parseInt(userBet);
  }
  else if (diceResult % 2 == 0 & userSelected == "Odd") {
    resultText = " - EVEN YOU LOOSE " + userBet + "!!";
    document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
    userBalance = parseInt(userBalance) - parseInt(userBet);
  }
  else if (diceResult % 2 != 0 & userSelected == "Odd") {
    resultText = " - ODD YOU WIN " + userBet + "!!";
    document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
    userBalance = parseInt(userBalance) + parseInt(userBet);
  }
  else {
    resultText = " - ODD YOU LOOSE " + userBet + "!!";
    document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
    userBalance = parseInt(userBalance) - parseInt(userBet);
  }

  document.getElementById("resultJS").innerHTML = "Result is " + diceResult + resultText;
  document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance;
}
