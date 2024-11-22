

class Cronometro {
    constructor(setTime, k) {
        this.k = k
        this.setTime = setTime
        this.horas = Math.floor(setTime / 60)
        this.minutos = Math.floor(setTime % 60)
        this.segundos = Math.floor(setTime % 1) * 60
        this.activo = false
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
                 <span id="estado">Pausado</span>  <!-- Visualización del estado -->
                
            </div>

            <div class="buttomSpace">
                <p>${this.estado}</p>
            </div>
            
        </div>`
    }
    
    iniciarCronómetro() {
        if (this.tiempo > 0) {
            this.activo = true; // Cambia el estado a activo
            this.actualizarEstado();
        }
    }

    pararCronómetro() {
        this.activo = false; // Cambia el estado a inactivo
        this.actualizarEstado();
    }

    validarEstado() {
        return this.activo && this.tiempo > 0; // Devuelve true si está activo y tiene tiempo restante
    }

    actualizarEstado() {
        const estadoElement = document.getElementById('estado'); // Elemento donde se muestra el estado
        estadoElement.innerText = this.activo ? "En marcha" : "Pausado"; // Actualiza el texto según `activo`
    }
    

}

export default Cronometro;
