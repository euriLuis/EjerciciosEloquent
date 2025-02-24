function isEven(num) {
    if(isNaN(num)){
       return
    }
    if (num == 0) {
        return true;
    }else if (num == 1) {
        return false;
    }else{
        return isEven(num - 2);
    }
}
console.log(isEven(undefined) || "Solo acepta numeros");


