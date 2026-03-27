//config
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

//gerar um numero aleatorio
/* receber entrada
verificar numero correto
repetir a etapa 2e3
para de repetir quando acerta */

let fase = 0
const minimo = 1
let tentativas = 0
const todasTentativas = []

const aleatorio10 = gerandoNumeroAleatorio(10)
const aleatorio100 = gerandoNumeroAleatorio(100)
const aleatorio1000 = gerandoNumeroAleatorio(1000)

console.log(aleatorio10)
console.log(aleatorio100)
console.log(aleatorio1000)

function gerandoNumeroAleatorio(max) {
    const numeroAleatorioDez = Math.floor(Math.random() * max) + 1
    return numeroAleatorioDez
}

function iniciar(faseSelecionada) {

    switch (true) {
        case (faseSelecionada === 1):
            responder(minimo, 10, aleatorio10)
            break;
        case (faseSelecionada === 2):

            responder(minimo, 100, aleatorio100)
            break;
        case (faseSelecionada === 3):

            responder(minimo, 1000, aleatorio1000)
            break;
        default:
            console.log(`PARABÉNS VOCÊ FINALIZOU O DESAFIO COM ${tentativas} tentativas!!\n\n OS NUMEROS CORRETOS FORAM:\n\n de 1 a 10 --- ${aleatorio10}\n\n de 1 a 100 --- ${aleatorio100}\n\n de 1 a 1000 --- ${aleatorio1000}`);
            rl.close()
    }
}


function responder(min, max, aleatorio) {
    rl.question(`Digite um número de ${min} a ${max}: \n`, inputNumber => {

        const numeroInput = parseInt(inputNumber)

        if (isNaN(numeroInput) || numeroInput > max || numeroInput < min) {
            console.log(`DIGITE UM NUMERO VALIDO! TENTE NOVAMENTE...`)
            iniciar(fase)
        } else if (numeroInput === aleatorio) {
            console.log(`Parabéns você acertou o numero era ${numeroInput}\n\n Próximo Nível!!`)
            fase++
            tentativas++
            tentativas = 0
            iniciar(fase)
        } else {
            console.log(`VOCÊ ERROU PATETA!! TENTE NOVAMENTE...`)
            tentativas++
            iniciar(fase)
            console.log(todasTentativas)
        }

    })
}

function menu() {

    rl.question(`-----------------------------JOGO INICIADO-----------------------------\n\n Selecione uma Fase: [1] Nivel Junior || [2] Nivel Pleno || [3] Nivel Senior\n\n\n`, input => {

        const faseSelecionada = parseInt(input)

        if (isNaN(faseSelecionada) || faseSelecionada > 3 || faseSelecionada < 1) {
            console.log(`DIGITE UM NUMERO VALIDO! TENTE NOVAMENTE...`)
            menu()
        } else {
            fase = faseSelecionada
            iniciar(fase)
        }
    })

}

menu()