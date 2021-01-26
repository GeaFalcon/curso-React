// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true
        if (descuento) {
            resolve("Descuento aplicado")
        } else {
            reject("No se pudo aplicar el descuento")
        }
    }, 3000)

})

aplicarDescuento.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})


// Promises con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar cantidad a la api 
    var api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    var xhr = new XMLHttpRequest();

    xhr.open("GET", api, true)

    // on load
    xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText).results)
            } else { reject(Error(xhr.statusText)) }
        }
        // opcional (on error)
    xhr.onerror = (error) => reject(error)
        // send

    xhr.send()
})

descargarUsuarios(20)
    .then(
        // miembros es el "resolve" y error es el reject , lo que recibe y el error 
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error("Hubo un error" + error)
        )
    )

function imprimirHTML(usuarios) {
    let html = " "
    usuarios.forEach(usuarios => {
        html += `
        <li>
            Nombre: ${usuarios.name.first}  ${usuarios.name.last}
            Pais: ${usuarios.nat}
            Imagen:
            <img src="${usuarios.picture.medium}">
            
        </li>
        `
    })
    const contenedorApp = document.querySelector('#app')

    contenedorApp.innerHTML = html
}