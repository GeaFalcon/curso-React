function saludar(nombre) {
    console.log("Bienvenido ", nombre)

}

saludar("Jose")


// Si no defino ningun tipo de parametro se pasan los que le mande por defecto

function actividad(nombre = "Draco", actividad = "Programar") {
    console.log(`La persona  ${nombre} Esta realizando la actividad ${actividad}`)
}
actividad("Jose", )

let viajando = function(destino) {
    return `Viajando a la ciudad de : ${destino}`
}
let viaje = viajando('paris')

console.log(viaje)

let travel = (travel) => `viaje a ${travel}`

let viajje = travel("madrid")
console.log(viajje)

var suma = (numero, otro) => numero + otro

var resultado = suma(4, 2)
console.log(resultado)

var miNombre = (fnombre, snombre) => `Mi nombre es ${fnombre} ${snombre} `
var name = miNombre("Jose", "Antonio")
console.log(name)