//SOAL
// Buat fungsi untuk cetak print angka 1-100 dengan ketentuan:
// di setiap kelipatan 3 maka print angka nya diganti jadi kata kata "fizz"
// di setiap kelipatan 5 maka print angka nya diganti jadi kata kata "Buzz"
// di setiap kelipatan 3 DAN 5 maka di ganti dengan kata kata "fizzBuzz"

//CODE FULL
var outputArray = [];
function fizzBuzz() {
    var numberStar = 1;
    var outputLength = outputArray.length;
    var output_Length_For_Modular = outputLength + 1;
    if(outputLength === 0){
        outputArray.push(numberStar);
    } else if (output_Length_For_Modular % 3 === 0 && output_Length_For_Modular % 5 === 0 ){
        outputArray.push("fizzBuzz");
    } else if(output_Length_For_Modular % 3 === 0) {
        outputArray.push("fizz");
    } else if (output_Length_For_Modular % 5 === 0){
        outputArray.push("Buzz"); 
    } else{
        outputArray.push(outputLength+1);
    }
    console.log(outputArray);
}

//Code Penjelasan
//1. Buat Array kosong
var outputArray = [];
function fizzBuzz() {
    //2. Buat variable dengan isian angka 1 untuk di gunakan sebagai permulaan untuk pengisian array kosong
    var numberStar = 1;
    //3. Buat variable dengan isian jumlah length DAN jumlah length +1
    // tujuannya untuk digunakan di konsisi percabangan
    var outputLength = outputArray.length;
    var output_Length_For_Modular = outputLength + 1;
    //4. masukan kondisi percabangan sesuai dengan kriteria di soalnya
    if(outputLength === 0){
        outputArray.push(numberStar);
    } else if (output_Length_For_Modular % 3 === 0 && output_Length_For_Modular % 5 === 0 ){ //jika kondisi habis dibagi 3 DAN 5
        outputArray.push("fizzBuzz");
    } else if(output_Length_For_Modular % 3 === 0) { //jika kondisi kalo dibagi 3 = habis ga ada sisa(maksudnya pake modular yah, bukan pembagian biasa)
        outputArray.push("fizz");
    } else if (output_Length_For_Modular % 5 === 0){ //jika kondisi kalo dibagi 5 = habis ga ada sisa(maksudnya pake modular yah, bukan pembagian biasa)
        outputArray.push("Buzz"); 
    } else{ //KONDISI NORMALNYA
        outputArray.push(outputLength+1);
    }
    console.log(outputArray);
}

//5.JA;ANKAN fUNGSI
fizzBuzz();
