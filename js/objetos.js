// Objeto literal


const persona = {
    nombre: "Jose",
    profesion: "Desarrollador",
    edad: 26
}


console.log(persona)

// Object Constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre
    this.urgencia = urgencia
}

// crear nueva tarea  

const tarea1 = new Tarea("aprender Javascript", "Urgente")
const tarea2 = new Tarea("Sacar la basura", "media")
const tarea3 = new Tarea("Hablar con la abogada", "Urgente")

// console.log(tarea1)
// console.log(tarea2)
// console.log(tarea3)

// Agregar un prototype

Tarea.prototype.mostrarInformacionTarea = function() {
        return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
    }
    // const mostrarCliente = mostrarinformaciontarea(persona.nombre, persona.profesion)

console.log(tarea2.mostrarInformacionTarea())

// Destructuring de objetos 

const aprendiendoJS = {
        version: {
            nueva: "ES6+",
            anterior: "ES5",
        },
        frameworks: ["React", "VueJS", "AngularJS"],
    }
    // Destructuring es extraer valores de un objeto

console.log(aprendiendoJS)

let { nueva } = aprendiendoJS.version

console.log(nueva)

var jose = {
    lenguajes: ["Angular", "Ionic", "JS"],
    años: 26,
    aprendiendo: {
        Antes: "Angular",
        Ahora: "React"
    }
}

let { Ahora } = jose.aprendiendo

console.log(Ahora)

// Object literal enhancement

const band = "Metallica"
var genero = "Heavy metal"
var canciones = "unforgiven"

// forma anterior

// const Metallica = {
//     banda: band,
//     genero: genero,
//     canciones: canciones
// }

// forma nueva

const Metallica = { band, genero, canciones }
console.log(Metallica)

// Metodos o funciones en un objeto

const persono = {
    nombre: "Jose",
    trabajo: "parao",
    edad: 404,
    musica: "Na",
    mostrarInformacion: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad}`)
    }
}

persono.mostrarInformacion()

// Array y .map

const carrito = ["Producto1", "Producto2", "Producto3"]

console.log(carrito)

const appContenedor = document.querySelector('#app')

let html = "";

carrito.forEach(asd => {
    html += `<li>${asd}</li>`
})

appContenedor.innerHTML = html


carrito.map(producto => {
    return `el producto es ${producto}`
})


const personna = {
    nombre: "Draco",
    profesion: "Hago cosas",
    edad: "42"
}
console.log(Object.keys(persona))

// Sprear Operator

let lenguajes = ["Java", "Pythom", "PHP"]
let frameworks = ["ReactJS", "Laravel", "Django"]

let combinacion = lenguajes.concat(frameworks)

console.log(combinacion)

let combinacion2 = [...lenguajes, ...frameworks]

console.log(combinacion2)