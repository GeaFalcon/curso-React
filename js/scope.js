// SCOPE

var musica = "rock"

if (musica) {
    var musica = "gruge"
    console.log("Dentro del if ", musica)
}
console.log("fuera del if ", musica)

// scope con let 
var musica = "rock"

if (musica) {
    let musica = "gruge"
    console.log("Dentro del if ", musica)
}
console.log("fuera del if ", musica)

// template strings 

const nombre = " Jose "
let trabajo = "Desarrollador web"

// concatenar javascript

console.log("Nombre:", nombre, "trabajo", trabajo)
console.log(`nombre: ${nombre}, trabajo, ${trabajo}`)

// concatenar multiples lineas  

const contenedorApp = document.querySelector('#app')
let html = `<ul>  <li> nombre  ${nombre}  </li>  <li>trabajo  ${trabajo}  </li>  </ul>`;

contenedorApp.innerHTML = html