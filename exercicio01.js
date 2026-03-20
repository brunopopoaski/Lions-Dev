
//config
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})


let tentativa = ""
//ex 1

function testeNomeIdade () {

    rl.question("Digite seu nome: ", (input1) => {
        const nome = (input1)
        rl.question("Digite sua idade: ", (input2) => {
            const idade = (input2)
            if (nome && idade != ""){
                const testeIdade = nome >= 18 ? `Já é maior de idade` : `ainda é menor de idade` //teste operador ternario
                console.log(`Boa noite ${nome}, pelas informações fornecidadas você tem ${idade} anos de idade e ${testeIdade} `)
                rl.close()
            } else {
                tentativa++
                if (tentativa < 3){
                    console.log(`Você não digitou as informações solicitadas! Inicie a aplicação novamente para`)
                    testeNomeIdade ()
                } else {
                    console.log(`Você teve mais de 3 tentativas, inicie o programa novamente!`)
                    rl.close()
            }
            }
        })
    })
}

testeNomeIdade()