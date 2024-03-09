//detecting buttons

var numberofDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
   
    });
}

//detecting keypress

document.addEventListener("keypress", function(e){
    makesound(e.key); 
    buttonanimation(e.key);
})


function makesound(key){

    switch(key) {
    case "w":
    case "W":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

    case "a":
    case "A":     
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
    case "S":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
    case "D":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
    case "J":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
    case "K":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
    case "L":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    
    default:
        console.log(buttoninnerhtml);
}}

function buttonanimation(currentkey){
    var active = document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}
