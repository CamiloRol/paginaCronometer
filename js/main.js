/* import Cronometro from "./Cronometro"; */

const setCronometers = document.getElementById('setCronometers')
const procInit = document.getElementById('procInit')
const settersTime = document.getElementById('settersTime')
const procCreated = document.getElementById('procCreated')
let setTime
const reloadPage = document.getElementById('reloadPage')

//Obtencion de valores
const getCronoValue = document.getElementById('getCronoValue').value

window.addEventListener('load', iniciar)

/* let crono1 = new Cronometro(getCronoValue, setTime) */

/* lo que hacemos con window load es tener una funcion que nos precargue botones o funcionalidades iniciales para la pagina */
function iniciar() {
    settersTime.style.display = "none"    
    procInit.addEventListener('click', function (event) {
        event.preventDefault();
        setCronometers.style.display = "none";
        createdInit()
    })
/*  procCreated.addEventListener('click', function () {
        
    }) */

    reloadPage.addEventListener('click', function () {
    location.reload()
    })
}

/* Esta es la funcion que solicita los tiempos que va a tener los cronos */
function createdInit() {
    settersTime.style.display = "flex"
    for (let i = 1; i < getCronoValue; i++) {
        settersTime.insertAdjacentElement("afterbegin",`
                <div>
                    <label for="">Ingrese Tiempo en minutos: </label>
                    <input type="number" id="setTime${i}">
                </div>
                <button id="procCreated" class="btnStyling">Crear</button>`) 
        setTime = document.getElementById(`setTime${i}`).value
    }
}