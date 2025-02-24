function reverseArray(arr) {
    let newArr = [];
    for (const element of arr) {
        newArr.unshift(element);
    }
    return newArr;
}
let arrprub = [1, 8, 6, 99, 78];

console.log(reverseArray(arrprub))

/*sin terminar
function reverseArrayInPlace(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(reverseArrayInPlace(arrprub));*/