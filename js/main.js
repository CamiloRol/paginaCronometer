/* import Cronometro from "./Cronometro"; */

const setCronometers = document.getElementById('setCronometers')
const procInit = document.getElementById('procInit')
const settersTime = document.getElementById('settersTime')
const procCreated = document.getElementById('procCreated')
let setTime

//Obtencion de valores
const getCronoValue = document.getElementById('getCronoValue').value

window.addEventListener('load', iniciar)

/* let crono1 = new Cronometro(getCronoValue, setTime) */

function iniciar() {
    settersTime.style.display = "none"    
    procInit.addEventListener('click', function (event) {
        event.preventDefault();
        setCronometers.style.display = "none";
        settersTime.style.display = "flex"
        createdInit()
    })
/*     procCreated.addEventListener('click', function () {
        
    }) */
}

function createdInit() {
    for (let i = 1; i < getCronoValue; i++) {
        settersTime.innerHTML += `
                <div>
                    <label for="">Ingrese Tiempo en minutos: </label>
                    <input type="number" id="setTime${i}">
                </div>
                <button id="procCreated" class="btnStyling">Crear</button>`
        setTime = document.getElementById(`setTime${i}`).value
    }
}

