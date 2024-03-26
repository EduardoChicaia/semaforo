const img = document.getElementById ('img')
const buttons = document.getElementById ('buttons')

let colorIndex = 0

let intervalId = null;

const acao = ( event) => {
    stopAutomatico();
    ligada[event.target.id]();
}

const proximaCor = () =>colorIndex = colorIndex < 2 ? ++ colorIndex : 0 ;

const trocarCor = () => {

    const cores = ['vermelho', 'verde', 'amarela']
    const colorado = cores [colorIndex]
    ligada[colorado]();
    proximaCor ();
}

const stopAutomatico = () => {
    clearInterval (intervalId);
}

const ligada = {
    'vermelho' : () => img.src = './img/vermelho.png',

    'verde'    : () => img.src = './img/verde.png',

    'amarela'  : () => img.src = './img/amarelo.png',

    'automatico': ()=> intervalId = setInterval(trocarCor, 1000)
}
buttons.addEventListener ('click', acao)