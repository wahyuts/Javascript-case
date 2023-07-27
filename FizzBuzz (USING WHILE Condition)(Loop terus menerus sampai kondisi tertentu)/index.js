//SOAL
// Buat fungsi untuk cetak print angka 1-100 dengan ketentuan:
// di setiap kelipatan 3 maka print angka nya diganti jadi kata kata "fizz"
// di setiap kelipatan 5 maka print angka nya diganti jadi kata kata "Buzz"
// di setiap kelipatan 3 DAN 5 maka di ganti dengan kata kata "fizzBuzz"

//CODE FULL
var outputArray = [];
var numberStar = 1;
function fizzBuzz() {

    while(numberStar < 100){
        if(numberStar % 3 === 0 && numberStar % 5 === 0 ){
        outputArray.push("fizzBuzz");
        } else if(numberStar % 3 === 0) {
            outputArray.push("fizz");
        } else if (numberStar % 5 === 0){
            outputArray.push("Buzz"); 
        } else{
            outputArray.push(numberStar);
        }
        numberStar++;          
    }
    console.log(outputArray);
}

//Code Penjelasan
//1. Buat Array kosong


//5.JA;ANKAN fUNGSI
fizzBuzz();
