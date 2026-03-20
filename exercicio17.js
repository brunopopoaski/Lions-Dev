const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const user = 'vasco'
const password = '2020'

function iniciar(){
rl.question('Usuario (menor time do Rio de Janeiro):', inputUser => {
    const userDig = inputUser
    rl.question('Senha (ultimo ano que caiu para série B):', inputPass => {
    const passDig = inputPass

    logando(userDig, passDig)
    })

})
}

function logando (usuario, senha) {
    const testeUser =  usuario.toLowerCase() === user
    const testePassword = senha.toLowerCase() === password

    if(testeUser) {
        if(testePassword){
            console.log('Infelizmente para Torcedores do vasco, LOGIN REALIZADO COM SUCESSO!!! sorry kk')
            rl.close()
        } else {
            console.log('Senha Incorreta! A senha é o ultimo ano que o vasco caiu!')
            iniciar()
        }
    } else {
        console.log('Nem chegou perto!! Seja verdadeiro');
        iniciar()
    }
}

iniciar()