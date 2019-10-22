
var randomNo1 = 0,
randomNo2 = 0,
scrDirectory1 ="",
scrDirectory2 = "",
diceResult = 0,
resultText ="";


var button1 = document.getElementById("rollButtonEven");
var button2 = document.getElementById("rollButtonOdd");

button1.onclick = function (){

    randomNo1 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    randomNo2 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    //return randomNo1;
    //return randomNo2;

  scrDirectory1 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Black" + randomNo1 + ".png?raw=true";
  scrDirectory2 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Red" + randomNo2 + ".png?raw=true";
  document.getElementById("die1").src = scrDirectory1;
  document.getElementById("die2").src = scrDirectory2;
  diceResult = randomNo1 + randomNo2;
  if(diceResult%2 == 0) {
    resultText = " - EVEN YOU WIN!!";
  }
  else resultText = " - ODD YOU LOOSE!!";

  document.getElementById("result").innerHTML = "Result is "+ diceResult + resultText;

}

button2.onclick = function (){

    randomNo1 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    randomNo2 = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    //return randomNo1;
    //return randomNo2;

  scrDirectory1 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Black" + randomNo1 + ".png?raw=true";
  scrDirectory2 = "https://github.com/DarrenGoulder/Ethereum-Dice-Rolling-Game/blob/master/images/Red" + randomNo2 + ".png?raw=true";
  document.getElementById("die1").src = scrDirectory1;
  document.getElementById("die2").src = scrDirectory2;
  diceResult = randomNo1 + randomNo2;
  if(diceResult%2 == 0) {
    resultText = " - EVEN YOU LOOSE!!";
  }
  else resultText = " - ODD YOU WIN!!";

  document.getElementById("result").innerHTML = "Result is "+ diceResult + resultText;

}
