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

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)