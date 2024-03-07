

var numberoOfDrumButton = document.querySelectorAll(".drum").length
for (i=0;i<numberoOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //identity of button that triggered event listener
        var buttonInnerHTML = this.innerHTML
switch(buttonInnerHTML){
case"w":
this.style.color = "white";
var crash = new Audio('sounds/crash.mp3')
crash.play();
break;
case"a":
this.style.color = "white";
var kick = new Audio('sounds/kick-bass.mp3')
kick.play();
break;
case"s":
this.style.color = "white";
var snare = new Audio('sounds/tom-1.mp3')
snare.play();
break;
case"d":
this.style.color = "white";
var tom1 = new Audio('sounds/snare.mp3')
tom1.play();
break;
case"j":
this.style.color = "white";
var tom2 = new Audio('sounds/tom-2.mp3')
tom2.play();
break;
case"k":
this.style.color = "white";
var tom3 = new Audio('sounds/tom-3.mp3')
tom3.play();
break;
case"l":
this.style.color = "white";
var tom4 = new Audio('sounds/tom-4.mp3')
tom4.play();
break;
default:
    console.log(this.innerHTML)
        
}
   
   
    })
} // console.log(this.innerHTML)
   // alert('Welcome')
//     var audio = new Audio('sounds/tom-1.mp3')
//     audio.play();

