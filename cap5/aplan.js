let arr = [[4, 5, 8], [9, 8, 0], [7, 8, 6]];
let aplanadora = (arr) => arr.reduce((a, b) => a.concat(b));
console.log(aplanadora(arr)); // [4, 5, 8, 9, 8, 0, 7, 8, 6]