// Membuat Chaining Function Calculator
// Disebut juga High Order function, karena fungsi tersebut dapat menerima fungsi lain sebagai input dan mengeksekusinya

//FULL CODE
function add (num1,num2){
    return num1+num2;
}

function multiply (num1,num2){
    return num1*num2
}

function Calculator (num1,num2,operator){
    return operator (num1,num2);
}

Calculator(2,3,add);


//Penjelasan code
//1. Buat masing masing fungsi perkalian dan penjumlahan,...
//   dimana fungsi fungsi ini nanti akan di gunakan sebagai input dari fungsi calculator
function add (num1,num2){
    return num1+num2;
}

function multiply (num1,num2){
    return num1*num2
}

//2. Buat fungsi calculator yang menerima parameter input dari fungsi diatas
function Calculator (num1,num2,operator){  // num1, dan num2 ini input biasa kek angka,..sedangkan operator ini adalah yang bakal di ganti fungsi add dan multiply
    return operator (num1,num2); // bagian ini menjelaskan akan menjalakan antara fungsi add or multiply
                                 // kata operator ini bisa di ganti fungsi add or multiply (tergantung user pilih mana)
                                 // lalu nanti sama saja si kata operatr ini menjalankan fungsi add or multiply yang akan mendaptkan return langsung
}


//3. panggil fungsi nya
Calculator(2,3,add);  // ini contoh user(kita) memanggil fungsi nya dengan input angka 2 dan 3 serta fungsi add

