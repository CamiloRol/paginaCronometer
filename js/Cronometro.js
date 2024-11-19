let crono

class Cronometro {
    constructor(cantidad, tiempo) {
        this.cantidad = cantidad
        this.tiempo = tiempo
    }

    crearCrono() {
        crono = `<div>
            <img src="./recursos/start.png" alt="">
            <img src="./recursos/pause.png" alt="">
            <img src="./recursos/delete.png" alt="">
        </div>`
    }
}

export default Cronometro;