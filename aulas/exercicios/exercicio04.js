const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

const agoraData = new Date()
const anoAtual = agoraData.getFullYear()

function calculaIdade() {
    
    rl.question("Digite o ano que você nasceu?:", (input4) => {
        
        const anoNascimento = parseInt(input4)

        if(isNaN(anoNascimento) || anoNascimento > anoAtual){
            console.log(`O ano que você digitou não é válido! Tente novamente...`)
            calculaIdade()
        }else if (anoNascimento < anoAtual){
                const idade = anoAtual - anoNascimento
                console.log(`Você tem ${idade} anos de idade`)
                rl.close()
        }
})
}
//ex 4
calculaIdade()
