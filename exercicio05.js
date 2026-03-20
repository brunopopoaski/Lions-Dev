const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let tentativas = 0

function testeIdade() {
rl.question('Digite sua idade: ', (input) => {
    const idade = parseInt(input)
    if (isNaN(idade)) {
        if (tentativas < 3) {
        tentativas++
        console.log(`Por favor, digite um número válido para a idade.`)
        testeIdade()
        } else { 
        console.log(`Número de tentativas excedido. Encerrando o programa.`)
        rl.close()
        }
    } else if (idade < 18) {
        console.log(`Você é menor de idade.`)
        rl.close()
    } else {
        console.log(`Você é maior de idade.`)
        rl.close()
    }
})
}

testeIdade()