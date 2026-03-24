const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let tentativas = 0

function questionario() {
rl.question(`Você gosta de estudar na Lions? selecione uma opção: \n [1]Sim \n [2]Não \n `, (input) => {
    const resposta = parseInt(input)
    if (isNaN(resposta) || resposta < 1 || resposta > 2) {
        if (tentativas < 3) {
            tentativas++
            console.log(`Opção inválida. Por favor, selecione 1 para Sim ou 2 para Não.`)
            questionario()
        } else {
            console.log(`Número máximo de tentativas alcançado.`)
            rl.close()
        }
    } else if (resposta === 1) {
        console.log(`Que ótimo! Continue aproveitando seus estudos na Lions!`)
        rl.close()
    } else if (resposta === 2) {
        console.log(`Pare com isso, você é um ótimo aluno! E programar é muito bom!!!`)
        rl.close()
    }
})
}

questionario()