//Respuesta Original
for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0 ) {
        console.log("FizzBuzz");
    }else if (num % 5 == 0) {
        console.log("Buzz")
    }else if ( num % 3 == 0 ) {
        console.log('Fizz')
    }else{
        console.log(num);
    }  
}


//Una modificacion que quice hacer
/*let FizzBuzz = 0;
let Fizz = 0;
let Buzz = 0;
for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0 ) {
        console.log("FizzBuzz");
        FizzBuzz++;
    }else if (num % 5 == 0) {
        console.log("Buzz");
        Buzz++;
    }else if ( num % 3 == 0 ) {
        console.log('Fizz');
        Fizz++;
    }else{
        console.log(num);
    }  
}
console.log("El numero d Fizz es de " + Fizz);
console.log("El numero d Buzz es de " + Buzz);
console.log("El numero d FizzBuzz es de " + FizzBuzz);*/