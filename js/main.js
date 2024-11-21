import Cronometro from "./Cronometro.js";

const setCronometers = document.getElementById('setCronometers')
const procInit = document.getElementById('procInit')
const settersTime = document.getElementById('settersTime')
/* const procCreated = document.getElementById('procCreated') */
const cronometerSpace = document.getElementById('cronometerSpace')
const reloadPage = document.getElementById('reloadPage')
let getCronoValue
let i

window.addEventListener('load', iniciar)

/* lo que hacemos con window load es tener una funcion que nos precargue botones o funcionalidades iniciales para la pagina */
function iniciar() {
    settersTime.style.display = "none"    
    procInit.addEventListener('click', function (event) {
        event.preventDefault();
        setCronometers.style.display = "none";
        getCronoValue = document.getElementById('getCronoValue').value
        createdInit();
    })

    
    reloadPage.addEventListener('click', function () {
    location.reload()
    })
}

/*  Esta es la funcion que solicita los tiempos que va a tener los cronos */
function createdInit() {
    settersTime.style.display = "flex"
    let content = '';

    getCronoValue = document.getElementById('getCronoValue').value

    if (getCronoValue < 6) {
        for (i = 0; i < getCronoValue; i++) {
            content += ` <div class="divTime"> 
            <label for="setTime${i}">Ingrese Tiempo en minutos: </label> 
            <input type="number" id="setTime${i}"> </div> `
        }        
    }else {
        content += `<p>Estamos programados para brindarte la mejor experiencia por eso lo maximo que puedes insertar son 5 cronometros</p>`
    }

    content += ` <button id="procCreated" class="btnStyling">Crear</button> `

    settersTime.innerHTML += content
    
    document.getElementById('procCreated').addEventListener('click', function (event) { event.preventDefault(); 
    settersTime.style.display = "none"; 
    setCronometers.style.display = "none"; 
    createdCrono(); 
    console.log('Botón Crear presionado');
})
}

function createdCrono() {
    cronometerSpace.style.display = "flex"
    let design = ""
    let setTime = []
    let crono = []

    for (i = 0; i < getCronoValue; i++) {
        setTime[i] = document.getElementById(`setTime${i}`)
    }
    for (i = 0; i < getCronoValue; i++) {
        crono[i] = new Cronometro(setTime[i])
        design += crono[i].crearCrono() 
    } 
    cronometerSpace.innerHTML += design
}