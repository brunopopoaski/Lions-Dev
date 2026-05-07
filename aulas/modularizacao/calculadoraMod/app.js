const { entradaDeInput } = require('./input.js')
const { soma } = require("./soma.js")
const { subtracao } = require("./subtracao.js")
const { multiplicacao } = require("./multiplicacao.js")
const { divisao } = require("./divisao.js")
const { validacaoNumber, validacaoOperacao } = require("./validacoes.js")


function realizarOperacao(input, numeroPrimeiro, numeroSegundo) {

    switch (input) {
        case '+':
            return soma(numeroPrimeiro, numeroSegundo)

        case '-':
            return subtracao(numeroPrimeiro, numeroSegundo)

        case '*':
            return multiplicacao(numeroPrimeiro, numeroSegundo)

        case '/':
            return divisao(numeroPrimeiro, numeroSegundo)

    }
}

function iniciar() {

    const number1 = validacaoNumber(entradaDeInput('Entrada primeiro numero: '))
    if (!number1) {
        console.log(`Entrada Inválida, tente novamente...`);
        return iniciar()
    }
    const operacao = validacaoOperacao(entradaDeInput('Entrada operação: '))
    if (!operacao) {
        console.log(`Entrada Inválida, tente novamente...`);
        return iniciar()
    } 
    const number2 = validacaoNumber(entradaDeInput('Entrada segundo numero: '))
    if (!number2) {
        console.log(`Entrada Inválida, tente novamente...`);
        return iniciar()
    }
    
    console.log(realizarOperacao(operacao, number1, number2))
}

iniciar()

module.exports = { iniciar }