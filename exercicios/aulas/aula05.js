// Dados Boolean (true ou false)

// const matriculado = true

// const terminouCurso = false

// console.log(matriculado)
// console.log(terminouCurso)

const numeroTeste = 20
let numeroTeste2 = 15
const numeroPar2Primeiro = numeroTeste2
const numeroTeste3 = 56.6


let i = 0

const numeroPar = numeroTeste % 2
let numeroPar2 = numeroTeste2 % 2
const numeroPar3 = numeroTeste3 % 2

const resultado = numeroPar === 0
let resultado2 = numeroPar2 === 0
const resultado3 = numeroPar3 === 0

testeNumero(numeroPar, i, resultado, numeroTeste)
testeNumero(numeroPar2, i, resultado2, numeroTeste2)
testeNumero(numeroPar3, i, resultado3, numeroTeste3)


function testeNumero (a,b,c,d){

    if (a === b) {
        console.log(`O número ${d} é par? Resposta: ${c}`)
    } else {
        console.log(`O número ${d} é par? Resposta: ${c}`)
    }

}


// console.log(`O número ${numeroTeste2} é par? Resposta: ${resultado2}`)
// console.log(`O número ${numeroTeste3} é par? Resposta: ${resultado3}`)

// do { 
//     i++,
//     numeroTeste2++,
//     numeroPar2 = numeroTeste2 % 2,
//     resultado2 = numeroPar2 === 0
// } while(resultado3 === true) console.log(`O número ${numeroPar2Primeiro} teve que ser somado ${i} vezes para se tornar um número par, resultado: ${numeroTeste2} é par`)



const nota1 = 7
const nota2 = 5
const notaLimite = 6
let resultado6 = null
let resultado7 = null

function testeNota (a,b) {

    if (a >= b) {
        resultado6 = "aprovado"
        console.log(resultado6)
    } else {
        resultado7 = "reprovado"
        console.log(resultado7)
    }

}

testeNota(nota1, notaLimite)
testeNota(nota2, notaLimite)

/* let testeObjeto = {
    name: "Bruno",
    age: 22,
    height: 1.75
}

const testeArray = [0,1,2,3]

console.log(Object.values(testeObjeto))
console.log(testeArray[2]) */

/* ---------------------------------------------------------------------------------------------------------- */


const estaChovendo = false
const estaNublado = true
const txtChovendo = "esta chovendo"
const txtNublado = "esta nublado"
let levarGuardachuva = null
let resultado5 = null

function previsao (a, b, c) {

    levarGuardachuva = estaChovendo === true || estaNublado === true ? `Levar guarda chuva: true` : `Levar guarda chuva: false`;

    if (levarGuardachuva === `Levar guarda chuva: true`) {
        
        if(estaChovendo === true) {
            return resultado5 = `${levarGuardachuva}, pelo motivo que ${txtChovendo}`
        }else if(estaNublado === true) {
            return resultado5 = `${levarGuardachuva}, pelo motivo que ${txtNublado}`
        }
        
    } else {
        
        return levarGuardachuva
    }

}

console.log(previsao(estaChovendo, estaNublado, levarGuardachuva))






const numeroEntrada = -2
const numeroComparacao = 0
let resultado1 = null
const tipo2 = ["Par", "Ímpar"]
const tipo = ["Negativo", "Positivo", "Neutro"]



function teste (a,b){

    let qualtipo = (numeroEntrada % 2) == 0 ? tipo2[0] : tipo2[1]

    if (numeroEntrada < numeroComparacao){
        return resultado1 = `O número ${numeroEntrada} é ${tipo[0]} e ele é ${qualtipo}`
    } else if (numeroEntrada > numeroComparacao){
        return resultado1 = `O número ${numeroEntrada} é ${tipo[1]} e ele é ${qualtipo}`
    } else {
        return resultado1 = `O número ${numeroEntrada} é ${tipo[2]} e ele é ${qualtipo}`
    }
}
















const nota = 7
const frequencia = 75
const notaCorte = 7
const frequenciaCorte = 75
let resultado9 = null

function aprovacao (nota, notaCorte, frequencia, frequenciaCorte) {
    if (nota >= notaCorte && frequencia >= frequenciaCorte) {
        return resultado9 = "O Aluno foi aprovado!"
    } else {
        return resultado9 = "O Aluno foi reprovado!"
    }
}


console.log(teste(numeroEntrada, numeroComparacao))
console.log(aprovacao(nota, notaCorte, frequencia, frequenciaCorte))





/* 
const user = "Bruno"
const listUsers = ["Rafael", "Gabriel", "Bruno", "Eduardo", "Murilo"]
let i3 = 0

for (i3 = 0; user != listUsers[i3]; ) {
    i3++
}

console.log(listUsers[i3]) */

const numeroTeste4 = [65, 43.5, 23, 10.1]
const limiteMin = 10
const limiteMax = 50
let iii = 0

function testeIntervalo (numeroTeste, limiteMin, limiteMax) {
    if(numeroTeste < limiteMax && numeroTeste > limiteMin){

        return true

    } else {
        return false
    }
}

for (;numeroTeste4[iii] != undefined; iii++) {

    console.log(`O número ${numeroTeste4[iii]} está dentro do intervalo é: ${testeIntervalo(numeroTeste4[iii], limiteMin, limiteMax)}`)
    
}


const estMouse = 5
const qtdMouse = 3
const vlrMouse = 35.6
const saldoCarteira = 200

function compraMouse (estoqueMouse, quantidadeSolicitada, valorMouse, saldoCarteira) {

    if (quantidadeSolicitada > estoqueMouse){
        console.log(`Infelizmente não temos em estoque a quantidade solicitada, mas podemos atender a quantidade de ${estoqueMouse} mouses`)
    } else if ((valorMouse * quantidadeSolicitada) > saldoCarteira) {
        console.log(`Infelizmente o valor total da compra não está disponível em sua carteira, Falha na transação!`)
    } else{
        let saldoAtual =  saldoCarteira - (valorMouse * quantidadeSolicitada)
        console.log(`Sua compra foi realizada com sucesso e seu saldo atual é de ${saldoAtual.toFixed(2)}`)
    }
}

compraMouse(estMouse, qtdMouse, vlrMouse, saldoCarteira)




function cadastro(nome, idade, titulo) {
    this.nome = nome
    this.idade = idade
    this.titulo = titulo
}

const pessoa1 = new cadastro("Bruno", 22, true)
const pessoa2 = new cadastro("Leandro", 15, false)
const pessoa3 = new cadastro("Rafael", 20, false)
const idadeLimite = 16


function testeIdade (idade, idadeLimite, titulo, nome){

    if (idade >= idadeLimite){
        if(titulo){
            console.log(`A pessoa ${nome} tem ${idade} anos de idade e possui titulo de eleitor, Pode Votar!`)
        }else {
            console.log(`A pessoa ${nome} tem ${idade} anos de idade, mas não possui titulo de eleitor, Não Pode Votar!`)
        }
    }else {
            console.log(`A pessoa ${nome} não tem idade suficiente e por isso não possui titulo de eleitor, Não Pode Votar!`)
    }
}

console.log(testeIdade(pessoa1.idade, idadeLimite ,pessoa1.titulo, pessoa1.nome))
console.log(testeIdade(pessoa2.idade, idadeLimite ,pessoa2.titulo, pessoa2.nome))
console.log(testeIdade(pessoa3.idade, idadeLimite ,pessoa3.titulo, pessoa3.nome))




