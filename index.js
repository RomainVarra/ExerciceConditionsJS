const number1 = 1;
const number2 = 2;
const number3 = 1;

if (number1 === number2 && number1 === number3) {
    console.log("Les trois variables sont identiques")
}
else if (number1 === number2 || number2 ===number3 || number3 === number1){
console.log("Deux des variables sont identiques")
} 
else{
    console.log("toutes les variables sont différentes")
}