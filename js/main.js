import Cronometro from "./Cronometro";

const setCronometers = document.getElementById('setCronometers')
const procInit = document.getElementById('procInit')
const settersTime = document.getElementById('settersTime')
const procCreated = document.getElementById('procCreated')

//Obtencion de valores
const getCronoValue = document.getElementById('getCronoValue').value
const setTime = document.getElementById('setTime').value

window.addEventListener('load', iniciar)

let crono1 = new Cronometro(getCronoValue, setTime)

function iniciar() {
    procInit.addEventListener('click', function () {
        setCronometers.style.display = "none"
        settersTime.style.display = "flex"
    })
}

