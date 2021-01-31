var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6//

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images.png1 - images.png2

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player1 wins//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";

  //if player2 wins//
}

else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";

  //if the both play draw//
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
