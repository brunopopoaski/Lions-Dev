//config
const { info } = require('console')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//</>

const listaFuncionarios = [{ id: 1, nome: 'Bruno', cargo: 'DEV', salario: 2500 }]
let guardarCadastro = []
function transformaEmString(letras) { return letras.toString() }
const transformaEmNumber = (numero) => { return parseFloat(numero) }
const tipoNome = ''
const tipoCargo = ''
const tipoSalario = 0
let id = 0

function criarUsuario(infos) {
    const funcionarioCriado = {
        nome: infos[0],
        cargo: infos[1],
        salario: infos[2]
    }
    listaFuncionarios.push(funcionarioCriado)
    guardarCadastro = []
    menu()
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

function listandoFuncionario(lista) {
    console.log("\n\n-------------------LISTA DE FUNCIONARIOS-------------------\n\n");
    lista.forEach((element, index) => {
        console.log(`\nID: ${index + 1} || Nome: ${element.nome} | Cargo: ${element.cargo} | Salário: ${element.salario}\n`);
    });
}

function maiorSalario() {

    let salarioAtual = 0
    const salarioComparacao = listaFuncionarios[0].salario
    let salarioMaior = 0
    const salariosMaiores = []

    listaFuncionarios.forEach((objetoAtual) => {
        salarioAtual = objetoAtual.salario
        salarioMaior = salarioComparacao

        switch (true) {

            case (salarioAtual > salarioMaior):
                salarioMaior = salarioAtual
                break;

            case (salarioAtual = salarioMaior):
                salarioMaior = salarioAtual
                break;

        }
    })

    listaFuncionarios.forEach((objetoAtual) => {

        if (objetoAtual.salario === salarioMaior) {
            salariosMaiores.push(objetoAtual)
        }

    })
    console.log(`\n-----------------------Lista de funcionarios com maiores salarios--------------------`)
    salariosMaiores.forEach(todasMaiores => console.log(`\n Nome: ${todasMaiores.nome} --- salario: ${salarioMaior}\n\n`))
    menu()
}

function menorSalario() {

    let salarioAtual = 0
    const salarioComparacao = listaFuncionarios[listaFuncionarios.length - 1].salario
    let salariomenor = salarioComparacao
    const salariosmenores = []

    listaFuncionarios.forEach((objetoAtual) => {
        salarioAtual = objetoAtual.salario
        salariomenor = salarioComparacao

        switch (true) {

            case (salarioAtual < salariomenor):
                salariomenor = salarioAtual
                break;

            case (salarioAtual = salariomenor):
                salariomenor = salarioAtual
                break;

        }

    })

    listaFuncionarios.forEach((objetoAtual) => {
        if (objetoAtual.salario === salariomenor) {
            salariosmenores.push(objetoAtual)
        }

    })
    console.log(`\n-----------------------Lista de funcionarios com menores salarios--------------------`)
    salariosmenores.forEach(todasmenores => console.log(`\n Nome: ${todasmenores.nome} --- salario: ${salariomenor}\n\n`))
    menu()
}

function selecionandoId(opcao, func) {
    listandoFuncionario(listaFuncionarios)
    rl.question(`Selecione o ID de um funcionario para ${opcao}`, input => {
        idSelecionado = parseInt(input)

        if (isNaN(idSelecionado) || idSelecionado > listaFuncionarios) {
            console.log('Digite um id valido!!');
            selecionandoId(opcao, func)
        } else {
            func(idSelecionado)
        }
    })
}

function qualEditar(id) {

    rl.question('O que você deseja editar? [1]NOME || [2]CARGO || [3]SALARIO\n\n ', input => {
        qual = parseInt(input)
        switch (qual) {
            case 1:
                    rl.question('Digite o dado atualizado: \n', input => {
                        listaFuncionarios[id - 1].nome = input
                        menu()
                    })
                break;
            case 2:
                rl.question('Digite o dado atualizado: \n', input => {
                    listaFuncionarios[id].cargo = input
                    menu()
                })
                break;
            case 3:
                rl.question('Digite o dado atualizado: \n', input => {
                    listaFuncionarios[id].salario = parseFloat(input)
                    menu()
                })
                break;
        }
    })
}

function excluir() {

    rl.question(`Tem certeza que deseja demitir o ${listaFuncionarios[id].nome}? [1]SIM\n [2]NÃO\n`, input => {
        const escolha = parseInt(input)
        switch (escolha) {
            case 1:
                listaFuncionarios.splice(id -1, 1)
                menu()
                break;
            case 2:
                console.log('\n--Que bom, menos um funcionario demitido\n');
                menu()
                break;
            default:
                console.log('Opção inválida...Reiniciando...');
                menu()
        }
    })

}

function menu() {
    rl.question('\n\nSelecione uma opção \n[1]Cadastrar funcionario \n[2]listarFuncionarios \n[3]Maior salário \n[4]Menor Salário\n[5]Excluir\n[6]Editar\n\n', input => {
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
                    listandoFuncionario(listaFuncionarios)
                    menu()
                    break;
                case 3:
                    maiorSalario()
                    break;
                case 4:
                    menorSalario()
                    break;
                case 5:
                    selecionandoId('demitir um funcionario: \n', excluir)
                    break;
                case 6:
                    selecionandoId('editar os dados de um funcionario:  \n', qualEditar)
                    break;
                default:
                    console.log('Opção inválida...Tente Novamente!')
                    menu()
            }
        }
    })
}

menu()