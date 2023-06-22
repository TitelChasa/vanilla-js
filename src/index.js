// Inserte el código aquí

import { calculadora } from "./calculadora.js"


function calcular (operacion, numero1, numero2){

    if (operacion=="suma") {
        
        console.log(calculadora.suma(numero1,numero2))
    }else{
        if (operacion=="resta") {
            console.log(calculadora.resta(numero1,numero2))
        }
    }
if (operacion=="multiplicar") {
    console.log(calculadora.multiplicar(numero1,numero2))
}else{
    if (operacion=="dividir") {
        console.log(calculadora.dividir(numero1,numero2))
    }
}

}


calcular("dividir",4,7)








