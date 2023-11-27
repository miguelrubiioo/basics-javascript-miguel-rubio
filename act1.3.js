const prompt = require ("prompt-sync")({ sigint:true })
let esCancelar =  prompt("Introduce los números => ")
let num
let suma = 0
while(esCancelar!="cancelar") {
    if (Number(esCancelar)) {
        num = Number(esCancelar)
        suma += num
    } else {
        console.log("Introduce el número valido")
    } {
        esCancelar = prompt("Introduce los numeros =>")
    } 
}
console.log('La suma es ' + suma);
