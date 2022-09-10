const main = document.getElementById("container")

const section = document.createElement("section")
section.id = "box_game"
main.appendChild(section)

const btverde = document.createElement("div")
btverde.id = "bt_verde"
const btamarelo = document.createElement("div")
btamarelo.id = "bt_amarelo"
const btvermelho = document.createElement("div")
btvermelho.id = "bt_vermelho"
const btazul = document.createElement("div")
btazul.id = "bt_azul"

section.appendChild(btverde)
section.appendChild(btamarelo)
section.appendChild(btvermelho)
section.appendChild(btazul) 

const bordabtstart = document.createElement("div")
bordabtstart.id = "borda_bt_start"
const btstart = document.createElement("div")
btstart.id = "bt_start"
btstart.innerText = "Start"

main.appendChild(bordabtstart)
main.appendChild(btstart)


const bt_start = document.getElementById("bt_start")

const bt_verde = document.getElementById("bt_verde")
const bt_amarelo = document.getElementById("bt_amarelo")
const bt_vermelho = document.getElementById("bt_vermelho")
const bt_azul = document.getElementById("bt_azul")


const contadorRounds = document.getElementById("contador")

const pcOuUsuario = document.getElementById("pcOuUsuario")


//Funções dos botoes --------------------------------------------------------------------

bt_verde.value = 1
bt_amarelo.value = 2
bt_vermelho.value = 3
bt_azul.value = 4


let sequenciaDoPc = []
let sequenciaDoUsuasio = []


let contadorRound = 0
let indexSequenciaDoPc = 0


function recomecar(){

    if(bt_start.innerText === 'GameOver'){
        document.querySelector("body").style.backgroundColor = "rgb(58, 58, 58)"

        bt_start.innerText ="Recomeçar"
        bt_start.style.fontSize = "18px"
        bt_start.style.color = "grey"
        bt_start.style.backgroundImage = 'radial-gradient(white, rgb(180, 180, 180))'
        bt_start.style.boxShadow ="rgb(175, 175, 175) 1px 2px 2px"
    }
}

function geraCorAleatoria() {

    let min = 1
    let max = 5
    min = Math.ceil(min);
    max = Math.floor(max);
    
    sequenciaDoPc.push(Math.floor(Math.random() * (max - min)) + min)
    console.log(sequenciaDoPc)
    setTimeout(loopComIntervalo, 400)
    pcOuUsuario.innerText = "Aguarde..."
    bt_start.innerText =""
}

function loopComIntervalo(){

    setInterval(acendeQuandoClica(sequenciaDoPc), 400)
    indexSequenciaDoPc++

    if(indexSequenciaDoPc>sequenciaDoPc.length){

        indexSequenciaDoPc = 0
        pcOuUsuario.innerText = "Sua vez"
    }
}


function acendeQuandoClica(arrayPc) {

    if(bt_verde.value === arrayPc[indexSequenciaDoPc]){
        bt_verde.classList.toggle("ativo")
        setTimeout(apagarQuandoClicaVerde, 400)

        frequency = C4
        stop()
    }
    if(bt_amarelo.value === arrayPc[indexSequenciaDoPc]){
        bt_amarelo.classList.toggle("ativo")
        setTimeout(apagarQuandoClicaAmarelo, 400)

        frequency = E4
        stop()
    }
    if(bt_vermelho.value === arrayPc[indexSequenciaDoPc]){
        bt_vermelho.classList.toggle("ativo")
        setTimeout(apagarQuandoClicaVermelho, 400)

        frequency = G4
        stop()
    }
    if(bt_azul.value === arrayPc[indexSequenciaDoPc]){
        bt_azul.classList.toggle("ativo")
        setTimeout(apagarQuandoClicaAzul, 400)

        frequency = A4
        stop()
    }
}

function apagarQuandoClicaVerde(){
    bt_verde.classList.remove("ativo")
    setTimeout(loopComIntervalo, 400)
}
function apagarQuandoClicaAmarelo(){
    bt_amarelo.classList.remove("ativo")
    setTimeout(loopComIntervalo, 400)
}
function apagarQuandoClicaVermelho(){
    bt_vermelho.classList.remove("ativo")
    setTimeout(loopComIntervalo, 400)
}
function apagarQuandoClicaAzul(){
    bt_azul.classList.remove("ativo")
    setTimeout(loopComIntervalo, 400)
}

function adcionaCorSelecionadaPeloUsuarioNaArray(event){
    const eventClick = event.target
    if(eventClick === bt_verde){
        sequenciaDoUsuasio.push(bt_verde.value)
    }
    if(eventClick === bt_amarelo){
        sequenciaDoUsuasio.push(bt_amarelo.value)
    }
    if(eventClick === bt_vermelho){
        sequenciaDoUsuasio.push(bt_vermelho.value)
    }
    if(eventClick === bt_azul){
        sequenciaDoUsuasio.push(bt_azul.value)
    }
} 

function confereAcerto(){

    if(sequenciaDoUsuasio.length === sequenciaDoPc.length){

        if(sequenciaDoPc.join("").includes(sequenciaDoUsuasio.join(""))){
            sequenciaDoUsuasio = []
            contadorRound++
            contadorRounds.innerText = `${contadorRound}`
            setTimeout(geraCorAleatoria, 800)
        }    
        else{
            sequenciaDoPc = []
            sequenciaDoUsuasio = []
            contadorRound = 0
            i = 0
            
            bt_start.innerText ="GameOver"
            bt_start.style.fontSize = "18px"
            bt_start.style.color = "white"
            bt_start.style.backgroundImage = 'radial-gradient(#ff6565, #ff1717)'
            bt_start.style.boxShadow ="red 2px 2px 2px"
            document.querySelector("body").style.background ="#c04141"
            frequency = C2
            stop()
            setTimeout(recomecar, 4000)
        }
    }
} 


bt_start.addEventListener("click", geraCorAleatoria)
bt_start.addEventListener("click", recomecar)

pcUser = document.getElementById("pcOuUsuario")



bt_verde.addEventListener("click", adcionaCorSelecionadaPeloUsuarioNaArray)
bt_verde.addEventListener("click", confereAcerto)


bt_amarelo.addEventListener("click", adcionaCorSelecionadaPeloUsuarioNaArray)
bt_amarelo.addEventListener("click", confereAcerto)


bt_vermelho.addEventListener("click", adcionaCorSelecionadaPeloUsuarioNaArray)
bt_vermelho.addEventListener("click", confereAcerto)


bt_azul.addEventListener("click", adcionaCorSelecionadaPeloUsuarioNaArray)
bt_azul.addEventListener("click", confereAcerto)



