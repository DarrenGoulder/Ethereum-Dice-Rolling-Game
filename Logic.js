var randomNo1, randomNo2;
var scrDirectory1, scrDirectory2;
var diceResult, resultText, i, ii;

var userSelected;
var myVar;
var userBalance = 3000;
var userBet = 0;
var extraMenu1 = document.getElementById("extraMenuText1");
var extraMenu2 = document.getElementById("extraMenuText2");
var extraMenu3 = document.getElementById("inputAddress");
var result;
document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance;

extraMenu1.style.display = "none";
extraMenu2.style.display = "none";
extraMenu3.style.display = "none";

var radio1 = document.getElementById("radio-1")
var radio2 = document.getElementById("radio-2")


//Side menu functionality

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
}


radio1.onclick = function(extraMenuText1, extraMenuText2, extraMenuText3) {
  extraMenu1.style.display = "none";
  extraMenu2.style.display = "none";
  extraMenu3.style.display = "none";
}

radio2.onclick = function(extraMenuText1, extraMenuText2, extraMenuText3) {
  extraMenu1.style.display = "block";
  extraMenu2.style.display = "block";
  extraMenu3.style.display = "block";
}


// Coin flip functionality

function headsFunction() {
    userSelected = "HEADS";
    executeBet(userSelected);
  }

function tailsFunction() {
    userSelected = "TAILS";
    executeBet(userSelected);
  }

function executeBet() {
  document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/ethereum-growing-exponentially-in-china-consensys-media-738504.png?raw=true";
  userBet = document.getElementById("inputBet").value;

  if (userBet > userBalance) {
    document.getElementById("resultJS").innerHTML = "Not enough funds, your balance is: " + userBalance;
    }

  if (userBet == null || userBet == 0) {
    document.getElementById("resultJS").innerHTML = "Please enter a bet amount";
    }
  else {

    ii = 1;

    document.getElementById("resultJS").innerHTML = "Good luck, you bet " + userBet + " - " + userSelected;

    flipCoin();

    }
}


//New code

const coin = document.querySelector('#coin');

const button = document.querySelector('#flip');

const status = document.querySelector('#status');

const heads = document.querySelector('#headsCount');

const tails = document.querySelector('#tailsCount');


let headsCount = 0;

let tailsCount = 0;


function deferFn(callback, ms) {

  setTimeout(callback, ms);

}


function processResult(result) {


     if (result == 'heads' & userSelected == "HEADS") {
       resultText = "HEADS YOU WIN " + userBet + "!!";
       //document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
       document.getElementById("ethLg").src = "/images/champion-cup-sports-winner-icon-473717.png";
       userBalance = parseInt(userBalance) + parseInt(userBet);
     }
     else if (result == 'heads' & userSelected == "TAILS") {
       resultText = "HEADS YOU LOOSE " + userBet + "!!";
       //document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
       document.getElementById("ethLg").src = "/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png";
       userBalance = parseInt(userBalance) - parseInt(userBet);
     }
     else if (result == 'tails' & userSelected == "TAILS") {
       resultText = "TAILS YOU WIN " + userBet + "!!";
       //document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
       document.getElementById("ethLg").src = "/images/champion-cup-sports-winner-icon-473717.png";
       userBalance = parseInt(userBalance) + parseInt(userBet);
     }
     else {
       resultText = "TAILS YOU LOOSE " + userBet + "!!";
       //document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
       document.getElementById("ethLg").src = "/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png";
       userBalance = parseInt(userBalance) - parseInt(userBet);
     }

     document.getElementById("resultJS").innerHTML = "Result is " + resultText;
     document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance;
   }


function flipCoin() {

  coin.setAttribute('class', '');

  const random = Math.random();

  const result = random < 0.5 ? 'heads' : 'tails';



deferFn(function() {

   coin.setAttribute('class', 'animate-' + result);

   deferFn(processResult.bind(null, result), 2900);

}, 100);

return result;}
