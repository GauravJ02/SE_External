function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){
        return null;
    }
    return a/b;
}

console.log("Addition of 5,4: ",add(5,4));
console.log("Substraction of 5,4: ",Substract(5,4));
console.log("Multiplication of 5,4: ",multiply(5,4));
console.log("Division of 6,2: ",divide(6,2));