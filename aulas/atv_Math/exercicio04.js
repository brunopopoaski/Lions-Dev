//config
const { log } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

//</>

const numeroAleatorio = aleatoriandoNumero()
console.log(numeroAleatorio)

function aleatoriandoNumero() {
    return Math.floor(Math.random() * 100) + 1
}


function iniciar() {

    rl.question('\n\nDigite um número de 0 a 100 para tentar acertar o número sorteado: ', input => {
        const numeroEscolhido = parseInt(input)
        if (numeroEscolhido > 100 || numeroEscolhido < 0 || isNaN(numeroEscolhido)){
            console.log('\n\nDigite um numero VÁLIDO de 0 a 100!!!');
            iniciar()
        } else{

            comparando(numeroEscolhido, numeroAleatorio)
        }
    })
}

function comparando(user, computer) {
    diferenca = computer - user
    switch (true) {
        case (diferenca < 0):
            console.log(`\n\nO numero que você digitou esta ACIMA do numero escolhido`)
            iniciar()
            break;
            case (diferenca > 0):
                console.log(`\n\nO numero que você digitou esta ABAIXO do numero escolhido`)
                iniciar()
                break;
                case (diferenca === 0): -
                console.log(`\n\nParabéns!!!! VOCÊ ACERTOU O NÚMERO ERA ${user}!!!!!!`);
                rl.close()
                break;
                }
}

iniciar()