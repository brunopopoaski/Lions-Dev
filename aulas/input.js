const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

/* rl.setPrompt('Seu Nome: ')
rl.prompt()

,

let entradaUsuario = ''

rl.on('line', (input) => {
    entradaUsuario = input.toString()
    console.log(`Seu nome é ${entradaUsuario}`)
    rl.close()
}) */




let array = ['Bruno', 'Fernando', 'Murilo']

console.log(array)

array.push('Verdade')

console.log(array)

console.log(Array.isArray(array))
console.log(array.length)


const testeArray = [25, 25]
let resultado10 = ''


function testandoArray(number1, number2) {
        if (number1 > number2){
            resultado10 = `Comparando o numero ${number1} e ${number2}, o número ${number1} é maior`
        } else if (number1 < number2){
            resultado10 = `Comparando o numero ${number1} e ${number2}, o número ${number2} é maior`
        } else {
            resultado10 = `Os numeros ${number1} e ${number2} são iguais`
        }
}
 
testandoArray(testeArray[0], testeArray[1])

console.log(resultado10)


//metodos arrays

// push() → adiciona elemento no final do array
// pop() → remove o último elemento
// shift() → remove o primeiro elemento
// unshift() → adiciona elemento no início
// splice() → remove, adiciona ou substitui elementos em qualquer posição
// slice() → copia uma parte do array sem alterar o original
// concat() → junta dois arrays em um novo
// join() → transforma o array em string
// indexOf() → retorna o índice da primeira ocorrência de um valor
// includes() → verifica se existe um valor no array (true/false)
// find() → retorna o primeiro elemento que satisfaz uma condição
// filter() → retorna todos os elementos que passam em uma condição
// map() → cria novo array transformando os valores
// forEach() → percorre o array executando uma função
// sort() → ordena os elementos do array
// reverse() → inverte a ordem do array
// length → propriedade que mostra o tamanho do array que seria a quantidade de elementos

const minhaMesa = ['Bruno', 'Carlos', 'Bianca', 'Isac']

console.log(`Meu nome é ${minhaMesa[0]}, meus colegas são: ${minhaMesa[1]}, ${minhaMesa[2]} e ${minhaMesa[3]}.`)



/* rl.prompt()

console.log("Digite dois números:") */

/* let notaUsuario1 = ''
let notaUsuario2 = ''

rl.on('line', (input) => {
    notaUsuario1 = parseFloat(input)
    rl.on('line', (input) => {
        notaUsuario2 = parseFloat(input)
        console.log(notaUsuario1 + notaUsuario2)
        rl.close()
    })
}) */



// bug do push----------------------------------------------------------------------------------

rl.prompt()

console.log("Digite dois números:")

let notas = []

rl.on('line', (input) => {
    notas.push(parseFloat(input))
    rl.on('line', (input) => {
        notas.push(parseFloat(input))
        console.log((notas[0] + notas[1])/notas.length)
        rl.close()
    })
})

// bug do push-----------------------------------------------------------------------------------