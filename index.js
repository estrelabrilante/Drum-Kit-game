

var numberoOfDrum = document.querySelectorAll(".drum").length
for (i=0;i<numberoOfDrum;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handClick)
}
function handClick(){
    alert('Welcome')
}
