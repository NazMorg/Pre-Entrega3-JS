/*** ALMACENAR FORMULARIO DE CONSULTAS ***/
//Objeto consulta:
class Consulta {
    constructor(nombre, numeroTelefono, email, asunto, mensaje) {
        this.nombre = nombre
        this.numeroTelefono = numeroTelefono
        this.email = email
        this.asunto = asunto
        this.mensaje = mensaje
        this.fecha = new Date()
    }
}
//Array para almacenar consultas:
const consultas = JSON.parse(localStorage.getItem("consulta")) || []

//Funcion enviarConsulta:
const enviarConsulta = () => {
    const formulario = document.querySelector("#enviarFormulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        const numeroTelefono = e.target.children["numero"].value
        const email = e.target.children["email"].value
        const asunto = e.target.children["asunto"].value
        const mensaje = e.target.children["mensaje"].value
        const consulta = new Consulta(nombre, numeroTelefono, email, asunto, mensaje)
        consultas.push(consulta)
        localStorage.setItem("consultas", JSON.stringify(consultas))
        crearTarjeta(consulta)
        formulario.reset()
        console.log("Guardado")
    })
}

//Funcion crearTarjeta:
const crearTarjeta = (consulta) => {
    const tarjetaConsulta = document.querySelector("#consultas")
    const divConsulta = document.createElement("div")
    divConsulta.innerHTML = `
                            <div class="card h-100 tarjeta">
                                <div class="card-header tituloTarjeta">
                                    ${consulta.asunto}
                                </div>
                                <div class="card-body cuerpoTarjeta">
                                    <blockquote class="blockquote mb-0 mensajeTarjeta">
                                        <p>${consulta.mensaje}</p>
                                        <footer class="blockquote-footer autorTarjeta">${consulta.nombre}</footer>
                                        <cite title="Source Title fechaTarjeta">${consulta.fecha}</cite>
                                    </blockquote>
                                </div>
                            </div>
                            `
    tarjetaConsulta.append(divConsulta)
    console.log("Tarjeta Creada")
}

//Funcion verConsultas:
const verConsultas = () => {
    consultas.forEach(consulta => {
        crearTarjeta()
    })
}

verConsultas()
enviarConsulta()