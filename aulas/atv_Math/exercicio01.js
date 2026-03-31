//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>


function lancarDado (ladosDado) {

     const numeroAleatorio = Math.floor(Math.random() * ladosDado) + 1
     return numeroAleatorio
}

function iniciar(){
   
    rl.question('Digite a quantidade de lados do dado que deseja girar: ', input => {
        const lados = parseInt(input)
        if(isNaN(lados)){
            console.log(`${input} não é um numero válido, digite um numero válido!!!`);
            iniciar()
        } else {
            lancarDado(lados)
            console.log(`O numero sorteado foi ${lancarDado(lados)}`)
            iniciar()
        }
    })
}


iniciar()