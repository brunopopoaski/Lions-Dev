//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

const caracteres = 'ABCDEFGHIJKLMNOPQRS&*()_+`{}^?TUVWXYZabcdnopqrstuvwxyz01234efghijklm56789!@#$%¨:><|+-*/'
const tamanho = caracteres.length
const ids = []
let password = ''

function gerandoIndex (max, tamanhoArray){
    for (let i = 0; i < max; i++ ){
        let resultado = Math.floor(Math.random() * tamanhoArray) + 1
        ids.push(caracteres[resultado])
    }
    gerandoSenha(ids)
}

function gerandoSenha(indexs){
    indexs.forEach(agora => {
         password += agora 
    });

    console.log(`\n\nSenha gerada: ${password}\n\n`)
    iniciar()
}

function iniciar (){
    rl.question('DIGITE A QUANTIDADE DE CARACTERES DESEJA GERAR UMA SENHA: ', inputmax=>{
        max = parseInt(inputmax)
        gerandoIndex(max, tamanho)
    })
}

iniciar()