const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const list1 = []
const list2 = []
let numerosPar = 0
let numerosImpar = 1
let tentativa = 0

function criarListas () {
 
    while (numerosPar <= 100 || numerosImpar < 100) {
        
        list1.push(numerosPar)
        list2.push(numerosImpar)
        numerosPar += 2
        numerosImpar += 2
    }
    
}

function testarNumero () {
    criarListas()

    rl.question ('Digite um número inteiro entre 1 e 100: ', (input) => {
        const numero = parseInt(input)

        if (isNaN(numero) || numero < 1 || numero > 100) {
            if (tentativa < 3) {
                tentativa++
                console.log('Número inválido. Por favor, digite um número inteiro entre 1 e 100.')
                testarNumero()
            } else {
                console.log('Número de tentativas excedido. Encerrando o programa.')
                rl.close()
            }
        } else {
            if (list1.includes(numero)) {
                console.log(`O número ${numero} está na lista de números pares.`)
                rl.close()
            } else if (list2.includes(numero)) {
                console.log(`O número ${numero} está na lista de números ímpares.`)
                rl.close()
            }
        }
    })
}

testarNumero()