const console = require('console')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/* ● Tarefa: Criar um programa com um saldo inicial de R$ 1000. O usuário deve informar um
valor para saque. O programa deve verificar se há saldo suficiente. Se houver, realizar o
saque e exibir o saldo restante. Caso contrário, exibir "Saldo insuficiente". */

const saldoInicial = 1000
let tentativa = 0

function sacandoDinheiro() {
    rl.question('Quanto de dinheiro você deseja sacar: ', input => {
        const dinheiroSacar = parseFloat(input)
        if(isNaN(dinheiroSacar)){
            if (tentativa < 3){
                console.log('Seu numero não é inválido, tente novamente...')
                sacandoDinheiro()
            } 
        } else if (dinheiroSacar <= saldoInicial){
            const resultado = saldoInicial - dinheiroSacar
            console.log(`Saque realizado com sucesso! seu saldo atual é de R$ ${resultado.toFixed(2)}`)
            rl.close()
        } else {
            console.log(`Saldo insuficiente, tente novamente...`)
            sacandoDinheiro()
        }
    })
}

sacandoDinheiro()










