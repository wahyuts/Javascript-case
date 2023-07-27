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

fizzBuzz();