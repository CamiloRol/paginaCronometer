

class Cronometro {
    constructor(setTime, k) {
        this.k = k
        this.setTime = setTime
        this.horas = Math.floor(setTime / 60)
        this.minutos = Math.floor(setTime % 60)
        this.segundos = Math.floor(setTime % 1) * 60
        this.estado = "."
    }

    crearCrono() {
        return `
        <div class="propCrono">
            <div class="upperSpace">
                <p> ${this.horas}:${this.minutos}:${this.segundos}</p>
            </div>
            
            <div class="middleSpace">
                <button id="start${this.k}"><img src="./recursos/start.png" alt=""></button>
                <button id="stop${this.k}"><img src="./recursos/pause.png" alt=""></button>
                <button id="restart${this.k}"><img src="./recursos/delete.png" alt=""></button>
            </div>

            <div class="buttomSpace">
                <p>${this.estado}</p>
            </div>
            
        </div>`
    }
}

export default Cronometro;