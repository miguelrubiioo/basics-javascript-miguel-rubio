const prompt = require ("prompt-sync")({ sigint: true })

const nota = prompt ("Introduce tu nota")

if (nota >= 0 && nota <=10){

    if (nota < 3 ){
        console.log("Muy deficiente")
    }
    else if (nota>=3 && nota < 5){
        console.log("Insuficiente")
    }
    else if (nota>=5 && nota < 6){
        console.log("Suficiente")
    }
    else if (nota>=6 && nota < 9){
        console.log("Notable")
    }
    else {
        console.log("Sobresaliente")
    }
}
else {
    console.log("Nota incorrecta")
}