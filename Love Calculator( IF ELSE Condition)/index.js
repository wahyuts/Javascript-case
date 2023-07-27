// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets

//Soal
// Buat sebuah calculator cinta dengan misalkan kita menginput nama pasangan masing2 lalu nanti muncul status love nya


//Code Full
function loveCalculatorStatus() {
    var nameMan = prompt("Nama Laki Laki");
    var nameGirl = prompt("Nama Wanita");
    var n = Math.random();
    n = n*100;
    n = Math.floor(n)+1;
    if (n === 100) {
        alert(`Selamat Pasangan ${nameMan} dan ${nameGirl} sangat COCOK Dan PERFECT`);
    } else if (n<50){
        alert(`Selamat Pasangan ${nameMan} dan ${nameGirl} cukup MENGKHAWATIRKAN`);
    } else {
        alert(`Pasangan ${nameMan} dan ${nameGirl} CUKUP SERASI`);
    }
}

//Code beserta penjelasan
function loveCalculatorStatus() {
    //1. Identifikasikan 2 nama yang disimpan kedalam variable
    var nameMan = prompt("Nama Laki Laki");
    var nameGirl = prompt("Nama Wanita");
    //2. Tentukan jumlah percentase love nya pake random number generator
    var n = Math.random();
    n = n*100;
    n = Math.floor(n)+1;
    //3. tampilkan STATUS PSANGAN di alert or console.log menggunakan IF ELSE Condition
    if (n === 100) {
        alert(`Selamat Pasangan ${nameMan} dan ${nameGirl} sangat COCOK Dan PERFECT`);
    } else if (n<50){
        alert(`Selamat Pasangan ${nameMan} dan ${nameGirl} cukup MENGKHAWATIRKAN`);
    } else {
        alert(`Pasangan ${nameMan} dan ${nameGirl} CUKUP SERASI`);
    }
}

//4.Panggil fungsinya
loveCalculatorStatus();