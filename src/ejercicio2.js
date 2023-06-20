import { contador } from "./ejercicio1";

class Contador {
  valor=0

siguente(){
  this.valor +=1;
}
}

// Inserte el código aquí
const instanciaA = new contador();
const instanciaB = new contador();

instanciaA.siguente();
console.log(instanciaA, instanciaB);

