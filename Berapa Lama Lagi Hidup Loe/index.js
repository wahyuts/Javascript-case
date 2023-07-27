// Soal
/*
In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
*/

function lifeInWeeks(age) {
    var sisaIdupTahun = 90-age;
    var days = sisaIdupTahun*365;
    var weeks = sisaIdupTahun*52;
    var months = sisaIdupTahun*12;
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
}

// Code beserta penjelasan
//1. Tentukan umurmu berapa tahun lagi hiup kurang dari 90 tahunmenggunakan umurmu sekarang (cth umurmu 30 tahun sekarang, berarti 60 tahun lagi hidup mu)
function lifeInWeeks(age) {
    var sisaIdupTahun = 90-age; //tentukan berapa tahun lagi umur hidup mu

    //2. Jika sudah tahu berapa tahun sisa umurnya, maka konversikan kedalam hari,bulan,minggu
    var days = sisaIdupTahun*365;
    var weeks = sisaIdupTahun*52;
    var months = sisaIdupTahun*12;

    //3. tulis console.log or alert or dll untuk menampilkan pesan
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
}

//Panggil fungsinya
lifeInWeeks(30);
