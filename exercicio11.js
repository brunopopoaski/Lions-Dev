const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let tentativa = 0
const notas = []
let somaNotas = 0
let resultado = 0

function calcularMedia() {

    rl.question('Digite sua nota (entre 0 e 10), quando finalizar digite "calcular": ', (input1) => {
        const teste = input1.toLowerCase() === "calcular"
        
        if (teste) {
            notas.forEach(notas => somaNotas += notas)
            resultado = somaNotas / notas.length
            console.log(`A média das suas notas é: ${resultado.toFixed(2)}`)
            rl.close()
        } else {
        
        const nota = parseFloat(input1)

        if (isNaN(nota) || nota < 0 || nota > 10) {
            if (tentativa < 3) {
                tentativa++
                console.log('Comando inválido. Por favor, digite um número entre 0 e 10 ou "calcular" para calcular sua média.')
                calcularMedia()
            } else {
                console.log('Número de tentativas excedido. Encerrando o programa.')
                rl.close()
            }
        } else {
            notas.push(nota)
            calcularMedia()
        }

        }
    })
}

calcularMedia()