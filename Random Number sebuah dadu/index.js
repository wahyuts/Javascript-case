// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets

// Berapa angka dadu yang keluar jika satu dadu di kocok

// code full
function roleDadu (angkaDadu) {
    var angkaDaduMuncul = Math.random();
    angkaDaduMuncul = angkaDaduMuncul*6*angkaDadu;
    angkaDaduMuncul = Math.floor(angkaDaduMuncul) +1
    console.log(angkaDaduMuncul);
}

//code beserta penjelasan
function roleDadu (angkaDadu) {
    //1. Buat sebuah angka random muncul lewat fungsi javascript math( angka random ini akan berbentuk decimal kurang dari angka 1, cth 0,0xxx sekian)
    var angkaDaduMuncul = Math.random();
    //2. Angka decimal randomnyaakan di kali 6 jika role satu dadu (12 jika role 2 dadu)
    angkaDaduMuncul = angkaDaduMuncul*6*angkaDadu;
    //3. Angka random akan di bulatkan dan ditambah 1 (kalo ga ditambah 1 cuma menghasilkan angka 1-5)
    angkaDaduMuncul = Math.floor(angkaDaduMuncul) +1
    //4. console log buat liat hasilnya
    console.log(angkaDaduMuncul);
}

//5. Panggil fungsinya
roleDadu (1);// isi 1 jika satu dadu, 2 jika 2 dadu