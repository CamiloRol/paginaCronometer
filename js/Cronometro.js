class Cronometro {
    constructor(setTime, k) {
        this.k = k
        this.setTime = setTime
        this.horas = Math.floor(setTime / 60)
        this.minutos = Math.floor(setTime % 60)
        this.segundos = Math.floor(setTime % 1) * 60
        this.intervalId = null
        this.estado = "."
    }

    crearCrono() {
        return `
        <div class="propCrono">
            <div class="upperSpace">
                <p id="time${this.k}"> ${this.horas}:${this.minutos}:${this.segundos}</p>
            </div>
            
            <div class="middleSpace">
                <button id="start${this.k}"><img src="./recursos/start.png" alt=""></button>
                <button id="stop${this.k}"><img src="./recursos/pause.png" alt=""></button>
                <button id="restart${this.k}"><img src="./recursos/delete.png" alt=""></button>
                 <span id="estado">Pausado</span>  <!-- Visualización del estado -->
                
            </div>

            <div class="buttomSpace">
                <p id="estado${this.k}">${this.estado}</p>
            </div>
            
        </div>`
    }

    start() { 
        if (!this.intervalId) { 
            this.estado = "En progreso"; 
            this.updateEstado(); 
            this.intervalId = setInterval(() => { 
                if (this.segundos > 0) { 
                    this.segundos--; 
                } else { if (this.minutos > 0) { 
                            this.minutos--; 
                            this.segundos = 59; 
                        } else if (this.horas > 0) { 
                            this.horas--; 
                            this.minutos = 59; 
                            this.segundos = 59; 
                        } else { 
                            clearInterval(this.intervalId); 
                            this.intervalId = null; 
                            this.estado = "Completado"; 
                            this.updateEstado(); 
                        } 
                    } 
                    this.updateDisplay(); 
                }
                , 1000); 
            } 
        } 
        
    pause() { if (this.intervalId) { 
        clearInterval(this.intervalId); 
        this.intervalId = null; 
        this.estado = "Pausado"; 
        this.updateEstado(); 
            } 
    } 
    
    restart() { 
        this.horas = Math.floor(this.setTime / 60); 
        this.minutos = Math.floor(this.setTime % 60); 
        this.segundos = Math.floor((this.setTime % 1) * 60); 
        this.estado = "Reiniciado"; 
        this.updateDisplay(); 
        this.updateEstado(); 
    } 
    
    updateDisplay() { 
        const timeElement = document.getElementById(`time${this.k}`); timeElement.textContent = `${this.horas}:${this.minutos}:${this.segundos}`; 
    
    } 

    updateEstado() { 
        const estadoElement = document.getElementById(`estado${this.k}`); estadoElement.textContent = this.estado;
    }

    estadocheck() {
        return this.estado
    }
}

export default Cronometro;
