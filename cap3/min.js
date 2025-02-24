//let min = (a, b) => a > b ? b : a;
function min(a, b) {
   if (b == undefined) {
    return a;
   }else{
    return a > b ? b : a;
   }
}
console.log(min(8, "hola"));