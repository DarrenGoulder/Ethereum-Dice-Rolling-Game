var resultText
var userSelected;
var myVar;
var userBalance = 3000;
var userBet = 0;
var result;
var resultCoin;
var bCVersion = false;
var random;
var wei;
var winLose;

document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance +" WEI.";

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
    document.getElementById("resultJS").innerHTML = "Not enough funds, your balance is: " + userBalance + " WEI";
    }

  if (userBet == null || userBet == 0) {
    document.getElementById("resultJS").innerHTML = "Please enter a bet amount";
    }
  else {

    document.getElementById("resultJS").innerHTML = "Good luck, you bet " + userBet + " WEI - "+ userSelected ;
    document.getElementById("winLose").innerHTML = "";
    document.getElementById("wei").innerHTML = "";
    flipCoin();

    }
}

//New code

const coin = document.querySelector('#coin');

//const button = document.querySelector('#flip');

//const status = document.querySelector('#status');

//const heads = document.querySelector('#headsCount');

//const tails = document.querySelector('#tailsCount');


let headsCount = 0;

let tailsCount = 0;


function deferFn(callback, ms) {

  setTimeout(callback, ms);
}

function processResult(result) {

    console.log(resultCoin);

    if (resultCoin == 'heads' & userSelected == "HEADS") {
       resultText = "HEADS YOU ";
       wei = userBet + " WEI!!";
       winLose ="WIN";
       document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
       //document.getElementById("ethLg").src = "/images/champion-cup-sports-winner-icon-473717.png";
       userBalance = parseInt(userBalance) + parseInt(userBet);
     }
     else if (resultCoin == 'heads' & userSelected == "TAILS") {
       resultText = "HEADS YOU ";
       wei = userBet + " WEI!!";
       winLose ="LOOSE";
       document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
       //document.getElementById("ethLg").src = "/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png";
       userBalance = parseInt(userBalance) - parseInt(userBet);
     }
     else if (resultCoin == 'tails' & userSelected == "TAILS") {
       resultText = "TAILS YOU ";
       wei = userBet + " WEI!!";
       winLose ="WIN";
       document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/champion-cup-sports-winner-icon-473717.png?raw=true";
       //document.getElementById("ethLg").src = "/images/champion-cup-sports-winner-icon-473717.png";
       userBalance = parseInt(userBalance) + parseInt(userBet);
     }
     else {
       resultText = "TAILS YOU ";
       wei = userBet + " WEI!!";
       winLose ="LOOSE";
       document.getElementById("ethLg").src = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png?raw=true";
       //document.getElementById("ethLg").src = "/images/lisasimpson-loser-simpson-simpsons-aesthetic-tumblrfree-11634.png";
       userBalance = parseInt(userBalance) - parseInt(userBet);
     }

     document.getElementById("resultJS").innerHTML = "Result is " + resultText;
     document.getElementById("wei").innerHTML = wei;
     document.getElementById("winLose").innerHTML = winLose;
     document.getElementById("uB").innerHTML = "Your current balance is: " + userBalance +" WEI.";
   }


function flipCoin() {

    if (bCVersion == false) {

      random = Math.random();
      resultCoin = random < 0.5 ? 'heads' : 'tails';
    }

  //Animation function
  coin.setAttribute('class', '');

  deferFn(function() {

     coin.setAttribute('class', 'animate-' + resultCoin);

     deferFn(processResult.bind(null, resultCoin), 2900);

     }, 100);

     return resultCoin;
  }
