//config
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

//ex 3
let tentativa = 0
let tentativa2 = 0



function testeNomeIdade () {
    
    rl.question("Digite seu nome: ", (input1) => {
        const nome = (input1)
        rl.question("Digite sua idade: ", (input2) => {
            const idade = (input2)
            if (nome && idade != ""){
                const testeIdade = nome >= 18 ? `Já é maior de idade` : `ainda é menor de idade`
                //console.log(`Boa noite ${nome}, pelas informações fornecidadas você tem ${idade} anos de idade e ${testeIdade} `)
                testeCnh(nome, idade)
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

function testeCnh (nome,idade) {

    rl.question("Você tem CNH? escolha uma opção: \n[1]SIM \n[2]NÃO \n", (input3) => {
        const r = (input3)
        const temCnh = r == "1" ? true : false
        let cnh = ''
        if (idade < 18 && temCnh){
            //console.log(`Sua resposta está errada, de acordo com sua idade, não é possível ter CNH`)
            cnh = "Sim"
            criandoObjetos(nome, idade, cnh)
        } else {
            if (temCnh && idade >= 18) {
        //console.log(`Parabéns você tem CNH!`)
        cnh = "Sim"
        criandoObjetos(nome, idade, cnh)
    } else if ( temCnh && idade >= 18) {
        //console.log(`Você é maior de idade mas infelizmente não possui CNH!`);
        cnh = "Não"
        criandoObjetos(nome, idade, cnh)
    } else {
        tentativa2++
        if (tentativa2 < 3){
        console.log(`A opção não existe! Tente novamente.`)
        testeCnh()
        } else {
            console.log(`Você teve mais de 3 tentativas, inicie o programa novamente!`)
            rl.close()
        }
    }

    }
})
}

function criandoObjetos(nome, idade, cnh){

    const pessoa = {
        nome: nome,
        idade: idade,
        cnh: cnh
    }
    console.log(`\nAqui está um resumo dos seus dados: \nNome: ${pessoa.nome} \nIdade: ${pessoa.idade} \nCNH: ${cnh}`)
    rl.close()
}

testeNomeIdade()



