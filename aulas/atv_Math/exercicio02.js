//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

const escolhas = ['pedra', 'papel', 'tesoura', 'spock', 'lagarto']
const computador = escolhaComputador(escolhas.length)

const vitorias = {
    pedra: ['tesoura', 'lagarto'],
    papel: ['pedra', 'spock'],
    tesoura: ['papel', 'lagarto'],
    spock: ['pedra', 'tesoura'],
    lagarto: ['papel', 'spock']
}


function escolhaComputador(max) {

    const idAleatorio = Math.floor(Math.random() * max)
    console.log(idAleatorio)
    return escolhas[idAleatorio]

}


function comparacao(escolhaAluno, computador) {
    const arrayVit = vitorias[escolhaAluno]
    const resultado = arrayVit.includes(computador)
    const empate = escolhaAluno === computador
    resultadoJogo(resultado, empate, escolhaAluno, computador)
}



function resultadoJogo(resultado, empate, escolhaAluno, escolhaComputador) {
    switch (true) {
        case (empate):
            console.log(`EMPATOU!!!!!\n${escolhaAluno} empatou com ${escolhaComputador}`)
            iniciar()
            break;
        case (resultado):
            console.log(`GANHOU!!!!!\n ${escolhaAluno} ganhou de ${escolhaComputador}`)
            iniciar()
            break;
        default:
            console.log(`PERDEU!!!!!\n${escolhaAluno} perdeu para ${escolhaComputador}`)
            iniciar()
    }
}

function iniciar() {

    rl.question('Selecione uma das opções [0]pedra [1]papel [2]tesoura [3]spock [4]lagarto:', inputEscolha => {

        escolhaUser = escolhas[parseInt(inputEscolha)]
        escolhaComputer = escolhaComputador(escolhas.length)
        comparacao(escolhaUser, escolhaComputer)

    })
}

iniciar()