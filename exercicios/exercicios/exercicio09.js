const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.question('Digite uma frase: ', (input) => {
    const frase = input.trim()

    console.log(`A frase que você digitou tem ${frase.length} caracteres`)
    rl.close()
})
