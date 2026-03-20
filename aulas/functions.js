
//function forma tradicional
/* function nomeDaFunção (parametros ou não) {
    bloco de Código
} */

//function forma moderna
//arrow function
/* const somar = (a,b) => {
    
} */

//ex

//chamar a função
//nomeDaFunção()

function somando (a,b) {
    return a + b
}

const somar = (a,b) => {
    return a + b
}


/* console.log(somar(10,5))

console.log(somando(1,2))
 */
///////////////////////////////////




const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const pessoa1 = {
    nome: 'bruno',
    idade: 22,
    curso: 'TI'
}
const pessoa2 = {
    nome: 'carlos',
    idade: 24,
    curso: 'ADM'
}
const pessoa3 = {
    nome: 'eduarda',
    idade: 50,
    curso: 'Enfermagem'
}

const cadastrados = [pessoa1,pessoa2,pessoa3]


const alunosNomes = ['bruno', 'carlos', 'eduarda']

let tentativa = 0


function inputDados(){
    console.clear()
    rl.question('Digite o nome do aluno: ', (inputNome) => {
        const nome = inputNome.trim().toLocaleLowerCase()
        rl.question('Digite a idade do aluno: ', (inputIdade) => {
            const idade = parseInt(inputIdade)
            rl.question('Digite o curso do aluno: ', (inputCurso) => {
                const curso = inputCurso.trim().toLocaleUpperCase()
                cadastrarAluno(nome, idade, curso)
            })
        })
    });

}


function cadastrarAluno(nome, idade, curso) {
    
    alunosNomes.push(nome)

    const objetoCadastro = {
        nome: nome,
        idade: idade,
        curso: curso
    }

    cadastrados.push(objetoCadastro)

    console.log('cadastro realizado com sucesso!\n\n\n')
    iniciar()



}

function exibirAlunos() {
    console.log('\n\nAlunos Cadastrados:\n\n');
    cadastrados.forEach((momento, index) => {console.log(`Nome: ${momento.nome.charAt(0).toUpperCase() + momento.nome.slice(1)} | Idade: ${momento.idade} | Curso: ${momento.curso} -- ID: ${index + 1}\n`)})
    iniciar()
}

function excluirAluno(nome) {

    cadastrados.forEach((momento, index) => {
        if (momento.nome === nome){
            cadastrados.splice(index,1)
            iniciar()
        }
    })
   
}


function consultando(){
    console.clear()
    rl.question('Digite o Nome do aluno que deseja consultar: ', inputname => {
    const localizacao = alunosNomes.indexOf(inputname)
    if (localizacao !== -1) {
        //arrumar
        console.log(`Aluno ${inputname} encontrado seu numero de cadastro é ${localizacao + 1}\n Deseja Editar? \n [1]Sim\n [2]Não\n.`)
        iniciar()
    } else {
        rl.question(`Aluno ${inputname} não encontrado, Deseja cadastrar o aluno? \n[1]Sim\n [2]Não`, input =>{
            const resposta = Number(input)
            if(resposta === 1){
                inputDados()
            } else if(resposta === 2){
                iniciar()
            } else {
                console.log('Opção inválida!');
                iniciar()
            }
        })

    }

})
}
function iniciar() {
    rl.question('\nDigite o opção desejada:\n "cadastrar"\n "relatorio"\n "excluir"\n "exit"\n "consultar"\n', (input) => {
        switch (input.toLowerCase()) {
        case 'cadastrar':  
            inputDados()
            break;
        case 'relatorio':
            exibirAlunos();
            break;
        case 'excluir':
            rl.question('Digite o nome do aluno a ser excluído: ', (inputNome) => {
                const nome = inputNome.trim().toLocaleLowerCase()
                excluirAluno(nome)
            });
            break;
        case 'consultar':
            consultando();
            break;
        case 'exit':
            rl.close();
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
        }})
}


iniciar()