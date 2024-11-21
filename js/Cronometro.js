class Cronometro {
    constructor(tiempo) {
        this.tiempo = tiempo
    }

    crearCrono() {
        return `<div class="propCrono">
            <button><img src="./recursos/start.png" alt=""></button>
            <button><img src="./recursos/pause.png" alt=""></button>
            <button><img src="./recursos/delete.png" alt=""></button>
        </div>`
    }
}

export default Cronometro;