//bucle
function every(arr, func){
    for(let element of arr) {
        if(func(!element)){
            return false;
        }
    }
    return true;
}
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

console.log(every(arr1, a => a < 4));
console.log(every(arr1, a => a > 4));
//some
function everY(arr, func){
    if (arr.some(a => func(a))) {
        return false;
    } else {
        return true;
    }
}