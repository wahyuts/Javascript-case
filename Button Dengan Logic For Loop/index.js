//1. Pilih seluruh button dengan class drum dan daatkan total length nya untuk di jadikan syarat pembanding di for loop
var numberOfDrumsButton = document.querySelectorAll(".drum").length;

//2. Gunakan fungsi for loop untuk membuat 7 button berbeda yang langsung berfungsi ketika di klik
//   dengan keterangan  i  adalah countnya    dan variable   numberOfDrumsButton  adalah pembandingnya
for (let i = 0; i < numberOfDrumsButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        if(i === 0){
            alert("You got a clicked W");
        } else if(i === 1){
            alert("You got a clicked A");
        } else if(i === 2){
            alert("You got a clicked S");
        } else if(i === 3){
            alert("You got a clicked D");
        } else if(i === 4){
            alert("You got a clicked J");
        } else if(i === 5){
            alert("You got a clicked K");
        } else if(i === 6){
            alert("You got a clicked L");
        }
    })   
}
