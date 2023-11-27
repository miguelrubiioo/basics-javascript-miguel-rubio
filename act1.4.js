const prompt = require ("prompt-sync")({ sigint:true })

let NumImput
let num
let cadena = "" ;
let texto = prompt ("Introduce una cadena o cancela para salir -->");
while (texto != "cancelar") {
    if(Number(NumImput)){
        num = Number(NumImput)
        suma += num
    } else {
        texto = prompt("Introduce la cadena --> ")
        cadena = cadena + ' ' + texto;
    }
}
console.log(cadena);