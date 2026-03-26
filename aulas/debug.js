
// Debug --- forma de testar o código antes de depurar no terminal
/* 
 erro de sintaxe -- erro na escrita
 erro de lógica -- erro na logica do codigo
 erro de runtime -- erro apenas quando executa
 */


/* 
function multiplicar(a, b){
    const resultado = a - b
    return resultado
}

console.log(`${multiplicar(2, 3)}`)

 */

// exercicio
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let quantidadeNomesEncontrados = 0
const pessoa1 = {
    nome: 'bruno',
    idade: 22,
    curso: 'TI',
    nota: 10
}
const pessoa2 = {
    nome: 'carlos',
    idade: 24,
    curso: 'ADM',
    nota: 10
}
const pessoa3 = {
    nome: 'eduarda',
    idade: 50,
    curso: 'ENFERMAGEM',
    nota: 7
}

const pessoa4 = {
    nome: 'bruno',
    idade: 50,
    curso: 'ADM',
    nota: 6
}

const cadastrados = [pessoa1, pessoa2, pessoa3, pessoa4]

let tentativa = 0

function inputDados() {
    console.clear()
    rl.question('Digite o nome do aluno: ', (inputNome) => {
        const nome = inputNome.trim().toLocaleLowerCase()
        rl.question('Digite a idade do aluno: ', (inputIdade) => {
            const idade = parseInt(inputIdade)
            rl.question('Digite o curso do aluno: ', (inputCurso) => {
                const curso = inputCurso.trim().toLocaleUpperCase()
                rl.question('Digite a nota do Aluno: ', inputNota => {
                    const nota = inputNota
                    cadastrarAluno(nome, idade, curso, nota)
                })
            })
        })
    });

}

function cadastrarAluno(nome, idade, curso, nota) {

    const objetoCadastro = {
        nome: nome,
        idade: idade,
        curso: curso,
        nota: nota
    }

    cadastrados.push(objetoCadastro)

    console.log('cadastro realizado com sucesso!\n\n\n')
    iniciar()
}

function exibirAlunos() {
    console.clear()
    console.log('\n\nAlunos Cadastrados:\n\n');
    cadastrados.forEach((momento, index) => { console.log(`Nome: ${momento.nome.charAt(0).toUpperCase() + momento.nome.slice(1)} | Idade: ${momento.idade} | Curso: ${momento.curso} | Nota: ${momento.nota} -- ID: ${index + 1}\n`) })
    //iniciar()
}

function excluirAluno(nome) {

    cadastrados.forEach((momento, index) => {
        if (momento.nome === nome) {
            cadastrados.splice(index, 1)
            console.log(`Aluno ${nome} excluído com sucesso!`)
            iniciar()
        } else if (cadastrados[index + 1] === undefined && momento.nome !== nome) {
            console.log(`Aluno ${nome} não encontrado!`)
            iniciar()
        }
    })

}


function consultando() {
    console.clear()
    rl.question('Digite o Nome do aluno que deseja consultar: ', inputname => {
        const nome = inputname.trim().toLocaleLowerCase()

        cadastrados.forEach((momento, index) => {
            if (momento.nome === nome) {
                quantidadeNomesEncontrados += 1
                console.log(`\nNome: ${momento.nome.charAt(0).toUpperCase() + momento.nome.slice(1)} | Idade: ${momento.idade} | Curso: ${momento.curso} | Nota: ${momento.nota} -- ID: ${index + 1}\n`)
            } else if (index === cadastrados.length - 1 && quantidadeNomesEncontrados === 0) {
                rl.question(`Aluno ${inputname} não encontrado, Deseja cadastrar o aluno? \n[1]Sim\n [2]Não`, input => {
                    const resposta = Number(input)
                    switch (resposta) {
                        case 1:
                            inputDados()
                            break;
                        case 2:
                            iniciar()
                            break;
                        default:
                            console.log('Opção inválida!');
                            iniciar()
                    }
                })
            }
        })

        iniciar()

    })

}

function mediaNotas() {
    let somaNotas = 0
    cadastrados.forEach(objetoAtual => somaNotas += objetoAtual.nota)
    const resultado = somaNotas / cadastrados.length
    console.log(`A média de notas de todos os alunos da classe é: ${resultado.toFixed(2)}\n`)
    iniciar()
}

function maiorNota() {

    let notaAtual = 0
    let notaMaior = notaComparacao
    const notaComparacao = cadastrados[0].nota
    const notasMaiores = []

    cadastrados.forEach((objetoAtual) => {
        notaAtual = objetoAtual.nota
        notaMaior = notaComparacao

        switch (true) {

            case (notaAtual > notaMaior):
                notaMaior = notaAtual
                break;

            case (notaAtual = notaMaior):
                notaMaior = notaAtual
                break;

        }

    })

    cadastrados.forEach((objetoAtual) => {

        if (objetoAtual.nota === notaMaior) {
            notasMaiores.push(objetoAtual)
        }

    })
    console.log(`\n-----------------------Lista de alunos com maiores notas--------------------`)
    notasMaiores.forEach(todasMaiores => console.log(`\n Nome: ${todasMaiores.nome} --- Nota: ${notaMaior}`))
    rl.close()
}

function editarNome(array) {
    rl.question('Digite o nome para atualizar o cadastro:\n', inputName => {
        array.nome = inputName
        iniciar()
    })
}
function editarIdade(array) {
    rl.question('Digite o nome para atualizar o cadastro:\n', inputAge => {
        array.idade = parseInt(inputAge)
        console.log('Informação atualizada com sucesso!')
        iniciar()
    })

}
function editarCurso(array) {
    rl.question('Digite o nome para atualizar o cadastro:\n', inputCourse => {
        array.curso = inputCourse
        console.log('Informação atualizada com sucesso!')
        iniciar()
    })

}
function editarNota(array) {
    rl.question('Digite o nome para atualizar o cadastro:\n', inputNote => {
        array.nota = parseFloat(inputNote)
        console.log('Informação atualizada com sucesso!')
        iniciar()
    })

}




function editandoUser(id) {
    cadastrados.forEach((alunoDados, indice) => {
        if (id === indice + 1) {
            rl.question('Qual informação deseja editar:\n [1]Nome\n [2]Idade\n [3]Curso\n [4]Nota\n', inputEdit => {
                switch (inputEdit) {
                    case '1':
                        editarNome(alunoDados)
                        break;
                    case '2':
                        editarIdade(alunoDados)
                        break;
                    case '3':
                        editarCurso(alunoDados)
                        break;
                    case '4':
                        editarNota(alunoDados)
                        break;
                    default: console.log('Opção inválida, tente novamente...')
                        editandoUser()
                }
            })
        }
    })
}


// menu iniciar

function iniciar() {

    console.log("\n==== MENU ====");
    console.log("===============");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Pesquisar Por Nome");
    console.log("3 - Listar Todos");
    console.log("4 - Excluir Um Aluno");
    console.log("5 - Maior Nota");//
    console.log("6 - Média das Notas");//
    console.log("7 - Editar Dados");
    console.log("0 - SAIR");
    console.log("===============");

    rl.question('\nDigite o opção desejada:', (input) => {
        switch (input.toLowerCase()) {
            case '1':
                inputDados()
                break;
            case '5':
                maiorNota()
                break;
            case '6':
                mediaNotas()
                break;
            case '3':
                exibirAlunos();
                iniciar();
                break;
            case '4':
                console.log(`Lista de alunos disponíveis para exclusão`)
                exibirAlunos()
                rl.question('Digite o nome do aluno a ser excluído: ', (inputNome) => {
                    const nome = inputNome.trim().toLocaleLowerCase()
                    excluirAluno(nome)
                });
                break;
            case '2':
                consultando();
                break;
            case '0':
                rl.close();
                break;
            case '7':
                console.log(`Lista de alunos disponíveis para exclusão`)
                exibirAlunos()
                rl.question('Digite o ID do aluno que deseja editar as informações: ', (inputId) => {
                    const id = parseInt(inputId.trim().toLocaleLowerCase())
                    editandoUser(id)
                    iniciar()
                });
                editandoUser()
                break;
            default:
                if (tentativa < 3) {
                    tentativa++
                    console.log('Opção inválida. Por favor, escolha "cadastrar", "relatorio" ou "excluir".')
                    iniciar()
                } else {
                    console.log('Número de tentativas excedido. Encerrando o programa.')
                    rl.close()
                }
        }
    })
}


iniciar()