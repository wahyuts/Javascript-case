// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets


// code full
var boxName = prompt("Whats your name?");
var boxNameLength = boxName.length;
var firstLetter = boxName.slice(0,1);
var firstUpperCase = firstLetter.toUpperCase();
var theRestLetter = boxName.slice(1,boxNameLength);
theRestLetter = theRestLetter.toLowerCase();
alert(`Hello ${firstUpperCase+theRestLetter} !`);


//code beserta penjelasan

//1. Buat variable yang menampung nama lewat fungsi prompt
var boxName = prompt("Whats your name?");

//2. Rubah huruf pertamanya dari nama yang sudah di simpan di variable step1 dengan cara
// 2A. tentukan jumlah keseluruhan character nama
var boxNameLength = boxName.length;
//2B. Slicing huruf pertama dari namanya
var firstLetter = boxName.slice(0,1);
//2C. Rubah huruf pertamanya menjadi Cappital
var firstUpperCase = firstLetter.toUpperCase();
//2D. Slicing sisa huruf setelah huruf pertama (melalui variable boxNameLength)
var theRestLetter = boxName.slice(1,boxNameLength);
//2E. Rubah seluruh sisa huruf menjadi huruf kecil;
theRestLetter = theRestLetter.toLowerCase();

//3. Tampilkan Nama yang sudah di rubah huruf depannya menjadi huruf cappital
alert(`Hello ${firstUpperCase+theRestLetter} !`);