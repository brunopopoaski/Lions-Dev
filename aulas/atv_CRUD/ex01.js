//config
const { info } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//</>

const listaFuncionarios = []
const guardarCadastro = []
function transformaEmString(letras) { return letras.toString() }
const transformaEmNumber = (numero) => { return parseFloat(numero) }
const tipoNome = ''
const tipoCargo = ''
const tipoSalario = 0

function criarUsuario(infos) {
    const funcionarioCriado = {
        nome: infos[0],
        cargo: infos[1],
        salario: infos[2]
    }
    listaFuncionarios.push(funcionarioCriado)
    guardarCadastro = []
}

function inputs(solicitacaAtual, tipo, transforma) {
    rl.question(`Digite ${solicitacaAtual}: `, input => {
        const dadoCadastro = transforma(input)
        validacaodados(dadoCadastro, tipo, solicitacaAtual)
    })
}

function validacaodados(input, tipo, solicitacao) {
    switch (true) {

        case (typeof (input) != typeof (tipo)):
            console.log(`Você digitou a informação de ${solicitacao} inválida, tente novamente...`)
            rl.close()
            break;
        case (guardarCadastro.length == 0):
            guardarCadastro.push(input)
            inputs('o seu cargo para cadastro', tipoCargo, transformaEmString)
            break;
        case (guardarCadastro.length == 1):
            guardarCadastro.push(input)
            inputs('o valor do seu salário para cadastro', tipoSalario, transformaEmNumber)
            break;
        case (guardarCadastro.length == 2):
            guardarCadastro.push(input)
            criarUsuario(guardarCadastro)
            break;
    }
}


function menu() {
    rl.question('\n\nSelecione uma opção \n[1]Cadastrar funcionario \n[2]listarFuncionarios \n[3]Maior salário \n[4]Menor Salário', input => {
        const escolhaMenu = parseInt(input)
        if (isNaN(escolhaMenu)) {
            console.log('Opção inválida, tente novamente...');
            menu()
        } else {
            switch (escolhaMenu) {
                case 1:
                    inputs('o seu nome para cadastro', tipoNome, transformaEmString)
                    break;
                case 2:
                    listandoFuncionario()
                    break;
                case 3:
                    maiorSalario()
                    break;
                case 4:
                    menorSalario()
                    break;
            }
        }
    })
}

menu()