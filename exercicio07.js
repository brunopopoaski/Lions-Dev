const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let tentativas = 0

function testeNumero() {
rl.question('Digite um número: ', (input) => {
    const numero = parseInt(input)
    if (isNaN(numero)) {
        if (tentativas < 3) {
        tentativas++
        console.log(`Por favor, digite um número válido para a idade.`)
        testeNumero()
        } else { 
        console.log(`Número de tentativas excedido. Encerrando o programa.`)
        rl.close()
        }
    } else if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`)
        rl.close()
    } else {
        console.log(`O número ${numero} é ímpar.`)
        rl.close()
    }
})
}

testeNumero()