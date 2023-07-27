// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets

// Misal kita diberi uang sekian dan harga botol susu sekian (contoh 5000), maka berapa banyak susu yang kita dapat beli?

// code full
var priceMilk = 5000;
function howManyBottle(money) {
    var resultBottles = money/priceMilk;
    console.log(`Dapet susunya cuma ${resultBottles}`)
};

//code beserta penjelasan
//1. Tentukan harga susu
var priceMilk = 5000;

//2. Buat fungsi perhitungan yang bisa di custom
function howManyBottle(money) { // money disini adalah parameter (maksudnya seperti nama variable tapi bukan variable)
    var resultBottles = money/priceMilk; // priceMilk ini adalah variable yang kita ambil dari variable yang sama yang sudah kita deklarasikan sebelumnya
    console.log(`Dapet susunya cuma ${resultBottles}`) // ini untuk menapilkan hasil didalam console.log
}; // fungsi ini baru di buat belum dijalankan sehingga hasilnya tidak keluar

//3. Jalankan Fungsinya (ini bisa dijalankan di concole chrome)
howManyBottle(20000); //20000 ini adalah angka uangnya, jika dijalankan di fungsi tersebut maka akan termasuk dalam kategori parameter money nya

