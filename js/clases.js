// Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostar() {
        return `${this.nombre} tiene la prioridad de ${this.prioridad}`
    }
}

class ComprarPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {

        // SUPER FUNCIONA PARA HEREDAR LAS DECLARACIONES DE LA TAREA ASOCIADA CON EL EXTENDS 

        super(nombre, prioridad)
        this.cantidad = cantidad
    }
    mostrarCompras() {
        console.log(this.nombre, this.prioridad, this.cantidad)
    }
}

// crear los objetos 

let tarea1 = new Tarea("Aprender Javascript", "alta")
let tarea2 = new Tarea("correr", "baja")
let tarea3 = new Tarea("Perder peso", "alta")
let tarea4 = new Tarea("dormir", "baja")

console.log(tarea1.mostar())

let compra1 = new ComprarPendientes("Jabon", "Urgente", 20)

compra1.mostrarCompras()