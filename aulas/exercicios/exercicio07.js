//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

const listaTotal = [27, 10, 3, 0, 20, 5, 6, 3]
const listaImpar = []
const listaPar = []
let tentativa = 0


function inputDeNumero(){
    rl.question('Digite sua idade:', input =>{
        const idade = parseInt(input)
        switch (true) {

            case (tentativa === 3):
                console.log(`\nNúmero inválido, finalizando sistema...\n`)
                rl.close()
                break;

            case (isNaN(idade)):
                tentativa++
                console.log(`\nNúmero inválido, tente novamente\n`)
                inputDeNumero()
                break;
            default:
                testandoNumeros(idade)
        }
    })
}


function testandoNumeros() {
    listaTotal.forEach(numero => {
        let resultado = numero % 2
        if (resultado === 0) {
            listaPar.push(numero)
        } else {
            listaImpar.push(numero)
        }
    })
    console.log(`\n Testando os numero:\n \n Lista Par ---- ${listaPar};\n Lista Impar ---- ${listaImpar};`)
    rl.close()
}

inputDeNumero()