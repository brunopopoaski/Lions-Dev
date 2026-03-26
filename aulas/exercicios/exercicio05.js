//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

let tentativa = 0

function inputDeDados() {
    rl.question(`\n\nDigite um número:`, input => {
        const numeroTeste = parseInt(input)
        switch (true) {

            case (tentativa === 3):
                console.log(`\nNúmero inválido, finalizando sistema...\n`)
                rl.close()
                break;

            case (isNaN(numeroTeste)):
                tentativa++
                console.log(`\nNúmero inválido, tente novamente\n`)
                inputDeDados()
                break;
            default:
                divisando(numeroTeste)
        }
    })
}

function divisando(numero) {

    for (let i = 0; i <= 10; i++) {
        let resultado = numero % i
        if (resultado == 0) {
            console.log(`${numero} é divisivel por ${i}`)
        }
    }
    inputDeDados()

}

inputDeDados()