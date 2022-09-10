const audio1 = document.getElementById("bt_verde"),
    audio2 = document.getElementById("bt_amarelo"),
    audio3 = document.getElementById("bt_vermelho"),
    audio4 = document.getElementById("bt_azul")

const C4 = 261.6,
    E4 = 329.6,
    G4 = 392.0,
    A4 = 440.0,
    C2 = 2093

let context,
	oscillator,
    contextGain,
    x = 1,
    type = 'sine',
    frequency;

function start(){
    context = new AudioContext()
    oscillator = context.createOscillator()
    contextGain = context.createGain()
    oscillator.frequency.value = frequency
    oscillator.type = type
    oscillator.connect(contextGain)
    contextGain.connect(context.destination)
    oscillator.start()

    return context
}

function stop(){
    const recebeStart = start()
    contextGain.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + x
    )
    setTimeout(() => recebeStart.close(), 1000)
}


audio1.addEventListener('click', function(){
	frequency = C4;
    stop()
})
audio2.addEventListener('click', function(){
	frequency = E4
    stop()
})
audio3.addEventListener('click', function(){
	frequency = G4
    stop()
})
audio4.addEventListener('click', function(){
	frequency = A4;
    stop()
})