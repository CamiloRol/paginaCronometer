import Cronometro from "./Cronometro.js";

const setCronometers = document.getElementById('setCronometers')
const procInit = document.getElementById('procInit')
const settersTime = document.getElementById('settersTime')
const procCreated = document.getElementById('procCreated')
let setTime
const reloadPage = document.getElementById('reloadPage')

window.addEventListener('load', iniciar)

/* Aun no tengo certeza donde voy a ubicar el objeto cronometro como tal */
let crono1 = new Cronometro(getCronoValue, setTime)

/* lo que hacemos con window load es tener una funcion que nos precargue botones o funcionalidades iniciales para la pagina */
function iniciar() {
    settersTime.style.display = "none"    
    procInit.addEventListener('click', function (event) {
        event.preventDefault();
        setCronometers.style.display = "none";
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

    const getCronoValue = document.getElementById('getCronoValue').value

    if (getCronoValue < 6) {
        for (let i = 0; i < getCronoValue; i++) {
            content += ` <div class="divTime"> 
            <label for="setTime${i}">Ingrese Tiempo en minutos: </label> 
            <input type="number" id="setTime${i}"> </div> `
        }        
    }else {
        content += `<p>Estamos programados para brindarte la mejor experiencia por eso lo maximo que puedes insertar son 5 cronometros</p>`
    }

    content += ` <button id="procCreated" class="btnStyling">Crear</button> `

    settersTime.innerHTML += content

    document.addEventListener('click', function(event) { if (event.target && event.target.id === 'procCreated')
        
        {console.log('Botón Crear presionado');}
    })
}

function createdCrono() {
    let crono1 = new Cronometro(getCronoValue, setTime)
}