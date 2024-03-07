//--Angela solution---
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }



//------------------------dice 1-----------------------
var randomNumber1 = Math.floor(Math.random() * 6)+1;
if (randomNumber1 === 1){
 var  newImg1 = document.querySelector(".img1").style.backgroundImage = "images/dice1.png"
//var  newImg1 = "images/dice1.png"
}
else if (randomNumber1 === 2){
 var   newImg1 =  document.querySelector(".img1").style.backgroundImage = "images/dice2.png"
 //var  newImg1 = "images/dice2.png"
 }
 else if (randomNumber1 === 3){
  var  newImg1 =  document.querySelector(".img1").style.backgroundImage = "images/dice3.png"
  //var  newImg1 = "images/dice3.png"
 }
 else if (randomNumber1 === 4){
var newImg1 =  document.querySelector(".img1").style.backgroundImage = "images/dice4.png"
 //  var  newImg1 = "images/dice4.png"
 }
else if (randomNumber1 === 5){
  var  newImg1 =  document.querySelector(".img1").style.backgroundImage = "images/dice5.png"
  //var  newImg1 = "images/dice5.png"
 }
 else if (randomNumber1 === 6) {
   var newImg1 =   document.querySelector(".img1").style.backgroundImage = "images/dice6.png"
  //  var  newImg1 = "images/dice6.png"
 }

 document.querySelector(".img1").setAttribute("src",newImg1) ;
//--------------------------dice 2--------------------------
var randomNumber2 = Math.floor(Math.random() * 6)+1;


if (randomNumber2 === 1){
  // var newImg2 =   document.querySelector("img").style.backgroundImage = "url('dice1.png')"
  var  newImg2 = "images/dice1.png"
 }
 else if (randomNumber2 === 2){
  // var newImg2 =   document.querySelector("img").style.backgroundImage = "url('dice2.png')"
  var  newImg2 = "images/dice2.png"
  }
  else if (randomNumber2 === 3){
   //var newImg2 =  document.querySelector("img").style.backgroundImage = "url('dice3.png')"
   var  newImg2 = "images/dice3.png"
  }
  else if (randomNumber2 === 4){
   //var newImg2 =  document.querySelector("img").style.backgroundImage = "url('dice4.png')"
   var  newImg2 = "images/dice4.png"
  }
 else if (randomNumber2 === 5){
   //var newImg2 =   document.querySelector("img").style.backgroundImage = "url('dice5.png')"
   var  newImg2 = "images/dice5.png"
  }
  else {
   //var newImg2 =   document.querySelector("img").style.backgroundImage = "url('dice6.png')"
   var  newImg2 = "images/dice6.png"
  }

  document.querySelector(".img2").setAttribute("src",newImg2) ;
  //manipulate h1
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw" 
    
}
// */