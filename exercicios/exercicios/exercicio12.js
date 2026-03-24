const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const alunosNomes = ['Bruno', 'Maria', 'João']
const alunosIdades = ['25', '30', '22']
const alunosCursos = ['TI', 'Medicina', 'Direito']
let tentativa = 0



function cadastrarAluno(nome, idade, curso) {
    alunosNomes.push(nome)
    alunosIdades.push(idade)
    alunosCursos.push(curso)
    console.log('cadastro realizado com sucesso!')
    iniciar()
}

function exibirAlunos() {
    const cadastroCompleto = [alunosNomes, alunosIdades, alunosCursos]
    console.log('Alunos cadastrados:\n');
    for (let i = 0; i < alunosNomes.length; i++) {
        console.log(`Nome: ${cadastroCompleto[0][i]}, Idade: ${cadastroCompleto[1][i]}, Curso: ${cadastroCompleto[2][i]}\n`);
        
    }
    iniciar()
}

function excluirAluno(nome) {
    const localizacao = alunosNomes.indexOf(nome)
    if (localizacao !== -1) {
        alunosNomes.splice(localizacao, 1)
        alunosIdades.splice(localizacao, 1)
        alunosCursos.splice(localizacao, 1)
        console.log(`Aluno ${nome} excluído com sucesso.`)
        iniciar()
    } else {
        console.log(`Aluno ${nome} não encontrado.`)
        iniciar()
    }
}

function iniciar() {
    rl.question('\nDigite o opção desejada:\n "cadastrar"\n "relatorio"\n "excluir"\n "exit"\n "consultar"\n', (input) => {
        if (input.toLowerCase() === 'cadastrar') {
            
            rl.question('Digite o nome do aluno: ', (inputNome) => {
                const nome = inputNome.trim()
                rl.question('Digite a idade do aluno: ', (inputIdade) => {
                    const idade = parseInt(inputIdade)
                    rl.question('Digite o curso do aluno: ', (inputCurso) => {
                        const curso = inputCurso.trim()
                        cadastrarAluno(nome, idade, curso)
                    })
                })
            })
        } else if (input.toLowerCase() === 'relatorio') {
            exibirAlunos()
        } else if (input.toLowerCase() === 'excluir') {
            rl.question('Digite o nome do aluno a ser excluído: ', (inputNome) => {
                const nome = inputNome.trim()
                excluirAluno(nome)
            })
        } else if (input.toLowerCase() === 'exit') {
            rl.close()
        } else {
            if (tentativa < 3) {
                tentativa++
                console.log('Opção inválida. Por favor, escolha "cadastrar", "relatorio" ou "excluir".')
         iniciar()
            } else {
            console.log('Número de tentativas excedido. Encerrando o programa.')
            rl.close()
            }
        }})
}


iniciar()