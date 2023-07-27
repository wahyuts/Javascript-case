// Tulis coding ini di snippets didalam browser chrome untuk ujicoba
// lokasinya masuk menu developer, pilih source, lalu pilih snippets

//Soal
// Ada sebuah list nama tamu undangan,..tugas kita adalah mengecek apakah kita namanya terdaftar di dalam list itu atu tidak


//Code Full
function cekList() {
    var guestList = ["Andy","Bogel","Zack","Milly","Autumn","Roger"];
    var ourName = prompt("Siapakah Anda Gerangan?");
    if (guestList.includes(ourName)) {
        alert(`Welcome ${ourName} !`);
    } else {
        alert("Anda bukan tamu undangan!");
    }
}

// Code penjelasan
function cekList() {
    //1. Buat daftar array list tamu undangan
    var guestList = ["Andy","Bogel","Zack","Milly","Autumn","Roger"];
    //2. Masukin nama kita di prompt
    var ourName = prompt("Siapakah Anda Gerangan?");
    //3. Cek menggunakan if else apakah nama kita ada di list
    if (guestList.includes(ourName)) { // fungsi includes ini untuk mengecek apakah elemen/nama kita ada di array tersebut
        alert(`Welcome ${ourName} !`);
    } else {
        alert("Anda bukan tamu undangan!");
    }
}

//4. Panggil function nya
cekList();
