
var numberOfDrumsButton = document.querySelectorAll(".drum").length;

/*
part dibawah ini cuma buat ngetest maksud innerHTML aja,..ternya cuma untuk mendapatkan isi di dalam tag html nya

var wwww = document.querySelectorAll(".drum")[2].innerHTML;
console.log(wwww);
*/

function pilihYangMana (key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

for (let i = 0; i < numberOfDrumsButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHtml = this.innerHTML;
        pilihYangMana(buttonInnerHtml)
    })
}

//Untuk keypress alias pencet keyboard,..pake method keydown di addEventListener
document.addEventListener("keydown", function(event){
    pilihYangMana(event.key);
})


