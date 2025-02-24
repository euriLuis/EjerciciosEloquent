function range(num1, num2) {
    
    let arr = [];
    //compruebo si el primer parametro es un numero, en caso de no serlo retorno un mensj de error.
    if (isNaN(num1)) {
        console.log("Debe ingresar un numero");
        return;
    //compruebo si el segundo es un numero, en caso de no serlo retorno el rngo desde el 1er numero hasta 0.    
    }else if (isNaN(num2)) {
        //en caso de ser negativo cuento desde el modulo del numero hasta cero y lo agrego al array. 
        if (num1 < 0) {
            let numPos = num1 * -1;
            for (let i = numPos; i >= 0; i--) {
            arr.push(i);   
            }
            
            return arr;
        //en caso de ser positivo, cuento hasta cero y lo agrego al array
        }else{
            for (let i = num1; i >= 0; i--) {
                arr.push(i);   
            }

            return arr;
        }

        //En caso de tener dos numeros paso a sacar el rango entre ambos.
    }else{
        // en esta parte en dependecia de cual sea el menor vario la forma en que recorro el rango.
        if (num1 < num2) {

            for (let i = num1; i  <= num2; i++) {
                arr.push(i);
            }
    
            return arr; 
        } else {
    
            for (let i = num1; i  >= num2; i--) {
                arr.push(i);
            }
    
            return arr;
        }
    }
}

function sum(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    return sum;
}

let list = [4, 5, 9, 7, 75];

function rangeMod(num1, num2, paso = 1){
    let arr = [];
    for (let i = num1; i >= num2; i += paso){
       arr.push(i);
    }
    return arr;
}

console.log(range(-8));
console.log(range(2));
console.log(range(-5, 2));
console.log(range(4, -3));
