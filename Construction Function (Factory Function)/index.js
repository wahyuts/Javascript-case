/*Construction Function /Factory Function adalah Fungsi yang di ciptakan untuk menyederhanakan 
suatu fumgsi atau object atau apapun yang mana sebelumnya jika kita menciptakan hal tersebut
harus melalui pengulangan berkali kali */

// Code pembuatan fungsi Construction (dalam hal ini pembuatan object agar tidak berulang)
function BellBoy (name,age,hasWorkPermit,languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Penjelasan Code
// Contruction Function harus di awali dengan Huruf besar di awalnya
function BellBoy (name,age,hasWorkPermit,languages){ // berisi parameter inputan yang akan d berikan
    this.name = name; // this ini mengacu ke fungsi BellBoy itu sendiri
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Setelah Code fungsi di buat baru kita melakukan pemanggilan fungsi
var bellBoy1 = new BellBoy("Timmy",19,true,["French","English"]);

//Kalau fungsi diatas di jalankan apabila kita melakukan console log,..maka kita akan mendapat object baru
/* cth nya
console.log(bellBoy1)  akan menghasilkan
BellBoy {name: 'Timmy', age: 19, hasWorkPermit: true, languages: Array(2)} */


