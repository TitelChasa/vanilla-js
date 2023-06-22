//ejercicio1
function tiempoActual(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

hh = (hh< 10) ? "0" + hh : hh;
mm = (mm< 10) ? "0" + mm : mm;
ss = (ss< 10) ? "0" + ss : ss;

let time= hh + ":" + mm + ":" + ss;
let watch= document.querySelector("#watch");
watch.innerHTML = time;

console.log(time)
}


tiempoActual()

setInterval(tiempoActual, 1000);



//ejercicio 2
obtenerListaUsuario();

function obtenerListaUsuario(){

fetch("http://localhost:3000/users")
.then((response) => response.json())
.then((data) => {
console.log("Lista de usuarios:", data );
})

.cath((error) => {
console.error("error al obtener la lista de usuario", error);
});

}

function usuario(){
return new Promise(obtnerListaUsuario);
}

//ejercio 3

obtenerListaUsuario();

function obtenerUsuarios(){
return new Promise((resolve, reject) => {
const fb = obtenerUsuarios
if
})

//Terminar
}