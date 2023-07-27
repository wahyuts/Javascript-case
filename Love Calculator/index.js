// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets

//Soal
// Buat sebuah calculator cinta dengan misalkan kita menginput nama pasangan masing2 lalu nanti muncul persentase love nya


//Code Full
function loveCalculator() {
    var nameMan = prompt("Nama Laki Laki");
    var nameGirl = prompt("Nama Wanita");
    var n = Math.random();
    n = n*100;
    n = Math.floor(n)+1;
    alert(`Selamat pasangan ${nameMan} dan ${nameGirl} mendapat percentase cinta ${n}%`);
}

//Code beserta penjelasan
function loveCalculator() {
    //1. Identifikasikan 2 nama yang disimpan kedalam variable
    var nameMan = prompt("Nama Laki Laki");
    var nameGirl = prompt("Nama Wanita");
    //2. Tentukan jumlah percentase love nya pake random number generator
    var n = Math.random();
    n = n*100;
    n = Math.floor(n)+1;
    //3. tampilkan di alert or console.log
    alert(`Selamat pasangan ${nameMan} dan ${nameGirl} mendapat percentase cinta ${n}%`);
}

//4.Panggil fungsinya
loveCalculator();