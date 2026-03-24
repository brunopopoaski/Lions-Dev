
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


const { resolveObjectURL } = require('buffer')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const pessoa1 = {
    nome: 'bruno',
    idade: 22,
    curso: 'TI',
    nota: 5
}
const pessoa2 = {
    nome: 'carlos',
    idade: 24,
    curso: 'ADM',
    nota: 7
}
const pessoa3 = {
    nome: 'eduarda',
    idade: 50,
    curso: 'Enfermagem',
    nota: 9
}
const alunosNomes = ['bruno', 'carlos', 'eduarda']

const cadastrados = [pessoa1,pessoa2,pessoa3]

let tentativa = 0


function inputDados(){
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
    
    alunosNomes.push(nome)

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
    console.log('\n\nAlunos Cadastrados:\n\n');
    cadastrados.forEach((momento, index) => {console.log(`Nome: ${momento.nome.charAt(0).toUpperCase() + momento.nome.slice(1)} | Idade: ${momento.idade} | Curso: ${momento.curso} | Nota: ${momento.nota} -- ID: ${index + 1}\n`)})
    iniciar()
}

function excluirAluno(nome) {

    cadastrados.forEach((momento, index) => {
        if (momento.nome === nome){
            alunosNomes.splice(index,1)
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

function mediaNotas() {
    let somaNotas = 0
    cadastrados.forEach(objetoAtual => somaNotas += objetoAtual.nota)
    const resultado = somaNotas / cadastrados.length
    console.log(`A média de notas de todos os alunos da classe é: ${resultado.toFixed(2)}\n`)
    iniciar()
}

function maiorNota (){

    let notaAtual = 0
    let notaComparacao = cadastrados[0].nota
    let notaMaior = 0
    let ind = 0

    cadastrados.forEach((objetoAtual, index) => {
        notaAtual = objetoAtual.nota
        notaMaior = notaComparacao
        
        switch (true){

            case (notaAtual > notaComparacao) :
            notaMaior = notaAtual
            ind = index
            break;
            
            case (notaAtual = notaComparacao) :
            notaMaior = notaAtual
            ind = index
            break;
                
            case (notaAtual < notaComparacao) :
            notaMaior = notaComparacao
            ind = index
            break;
                    
            }

            })
            
            console.log(`A maior nota foi de ${cadastrados[ind].nome} e sua nota foi ${notaMaior}`);
    }











function iniciar() {

    console.log("\n==== MENU ====");
    console.log("===============");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Pesquisar Por Nome");
    console.log("3 - Listar Todos");
    console.log("4 - Excluir Um Aluno");
    console.log("5 - Maior Nota");//
    console.log("6 - Média das Notas");//
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
            break;
        case '4':
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











